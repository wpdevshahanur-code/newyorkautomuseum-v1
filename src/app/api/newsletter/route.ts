import { NextResponse } from 'next/server';

const PRIMARY_WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';
const FALLBACK_WP_ENDPOINT = 'https://cms.newyorkautomuseum.com/wp-admin/admin-ajax.php';
const FLUENT_FORM_ID = '4';

async function submitToEndpoint(endpoint: string, email: string) {
  const params = new URLSearchParams({
    action: 'fluentform_submit',
    form_id: FLUENT_FORM_ID,
    data: `email=${encodeURIComponent(email)}`,
  });

  const wpRes = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'X-Requested-With': 'XMLHttpRequest',
      'Cookie': 'hc_js_gate=1',
    },
    body: params.toString(),
    cache: 'no-store',
  });

  const rawText = await wpRes.text();
  try {
    return JSON.parse(rawText);
  } catch {
    throw new Error(`WordPress returned HTML (${wpRes.status}) from ${endpoint}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim() : '';

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    let data: any;
    try {
      data = await submitToEndpoint(PRIMARY_WP_ENDPOINT, email);
    } catch {
      data = await submitToEndpoint(FALLBACK_WP_ENDPOINT, email);
    }

    if (data && data.success) {
      return NextResponse.json({
        success: true,
        message:
          data.data?.result?.message ||
          'Thank you for signing up. You are now subscribed to our newsletter.',
      });
    } else {
      let errorMessage = 'Failed to subscribe. Please try again.';
      if (typeof data?.errors === 'string') {
        errorMessage = data.errors;
      } else if (data?.errors && typeof data.errors === 'object') {
        const firstVal = Object.values(data.errors)[0];
        if (typeof firstVal === 'string') {
          errorMessage = firstVal;
        } else if (firstVal && typeof firstVal === 'object') {
          errorMessage = Object.values(firstVal)[0] as string;
        }
      }

      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error?.message || 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
