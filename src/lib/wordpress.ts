import fallbackAdvisors from '@/data/advisors';

export interface AdvisorMember {
  name: string;
  position: string;
  bio: string;
  linkedin: string;
}

export interface AdvisorCategoryGroup {
  category: string;
  members: AdvisorMember[];
}

const WP_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL ||
  'https://cms.newyorkautomuseum.com/wp-json/wp/v2';

// Whitelist of 24 active Board & Advisory members (matching live server index.html)
const ACTIVE_ADVISOR_NAMES = [
  'Otto Ferdinand Wachs',
  'Ray Battaglini',
  'David Senater',
  'Blake Greenstein',
  'Ivan Francis',
  'David Selby',
  'Archor Wright',
  'Eric-Mark Huitema',
  'Terrence Johnson',
  'Bernd Luz',
  'James Toomey',
  'Alex Teplish',
  'James Barnard',
  'Christian Ginet',
  'Shawn Cuffie',
  'Dr David Langguth PhD IIDA',
  'Gabriel Smith',
  'Russel A. Brown',
  'Lawrence Yee',
  'Pardhu Mattupalli',
  'Jay Soneri',
  'Arvind Motivaras',
  'Vivek Malamdi',
  'Narendra Jungi',
];

function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#038;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—');
}

/**
 * Fetches Board & Advisors from Headless WordPress REST API.
 * Automatically falls back to local JSON data if WordPress is unreachable.
 * Caches with Next.js ISR (revalidates every 60 seconds).
 */
export async function getAdvisors(): Promise<AdvisorCategoryGroup[]> {
  try {
    const [depsRes, advsRes] = await Promise.all([
      fetch(`${WP_API_URL}/advisor_department?per_page=100`, {
        next: { revalidate: 60 },
      }),
      fetch(`${WP_API_URL}/advisors?per_page=100&_embed`, {
        next: { revalidate: 60 },
      }),
    ]);

    if (!depsRes.ok || !advsRes.ok) {
      console.warn('WordPress API returned error status, using local fallback data.');
      return fallbackAdvisors as AdvisorCategoryGroup[];
    }

    const deps = await depsRes.json();
    const advs = await advsRes.json();

    if (!Array.isArray(advs) || advs.length === 0) {
      return fallbackAdvisors as AdvisorCategoryGroup[];
    }

    // Sort advisors by ACF order ascending
    advs.sort((a: any, b: any) => {
      const orderA = a.acf?.order !== undefined ? Number(a.acf.order) : 999;
      const orderB = b.acf?.order !== undefined ? Number(b.acf.order) : 999;
      return orderA - orderB;
    });

    const termMap = new Map<number, string>();
    if (Array.isArray(deps)) {
      deps.forEach((d: any) => {
        termMap.set(d.id, decodeHtmlEntities(d.name));
      });
    }

    const groupsMap = new Map<string, AdvisorMember[]>();

    // Seed departments in order of taxonomy
    if (Array.isArray(deps)) {
      deps.forEach((d: any) => {
        groupsMap.set(decodeHtmlEntities(d.name), []);
      });
    }

    advs.forEach((a: any) => {
      const name = decodeHtmlEntities(a.title?.rendered || '').trim();
      const isWhitelisted = ACTIVE_ADVISOR_NAMES.some(
        (active) => name.toLowerCase().includes(active.toLowerCase()) || active.toLowerCase().includes(name.toLowerCase())
      );
      if (!isWhitelisted) return;

      const deptTerm = a._embedded?.['wp:term']?.[0]?.[0];
      const deptName = deptTerm
        ? decodeHtmlEntities(deptTerm.name)
        : a.advisor_department?.[0]
        ? termMap.get(a.advisor_department[0])
        : 'General';

      const groupName = deptName || 'General';
      if (!groupsMap.has(groupName)) {
        groupsMap.set(groupName, []);
      }

      groupsMap.get(groupName)!.push({
        name,
        position: a.acf?.position || '',
        bio: a.acf?.bio || (a.content?.rendered ? a.content.rendered.replace(/<[^>]+>/g, '') : ''),
        linkedin: a.acf?.linkedin || '',
      });
    });

    const result: AdvisorCategoryGroup[] = [];
    groupsMap.forEach((members, category) => {
      if (members.length > 0) {
        result.push({ category, members });
      }
    });

    return result.length > 0 ? result : (fallbackAdvisors as AdvisorCategoryGroup[]);
  } catch (error) {
    console.error('Failed to fetch advisors from WordPress, using fallback:', error);
    return fallbackAdvisors as AdvisorCategoryGroup[];
  }
}
