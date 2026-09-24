import { NextResponse } from 'next/server';

const WP_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace(/\/wp-json\/wp\/v2\/?$/, '') ||
  'https://cms.newyorkautomuseum.com';

const FLUENT_FORM_ID = '2';

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

    const endpoint = `${WP_URL}/wp-admin/admin-ajax.php`;

    // Fluent Forms expects action=fluentform_submit, form_id, and data (URL-encoded query string)
    const params = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: FLUENT_FORM_ID,
      data: `email=${encodeURIComponent(email)}`,
    });

    const wpRes = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: params.toString(),
      cache: 'no-store',
    });

    if (!wpRes.ok) {
      throw new Error(`WordPress returned status ${wpRes.status}`);
    }

    const data = await wpRes.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message:
          data.data?.result?.message ||
          'Thank you for signing up. You are now subscribed to our newsletter.',
      });
    } else {
      let errorMessage = 'Failed to subscribe. Please try again.';
      if (typeof data.errors === 'string') {
        errorMessage = data.errors;
      } else if (data.errors && typeof data.errors === 'object') {
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
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
