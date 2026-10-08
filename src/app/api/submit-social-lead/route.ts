import { NextResponse } from 'next/server';

const WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, socialHandle, platform, vehicleDetails, agreed } = body;

    // Validation
    if (!name || !email || !phone || !socialHandle) {
      return NextResponse.json(
        { success: false, message: 'Please provide your full name, email, phone number, and social media handle.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!agreed) {
      return NextResponse.json(
        { success: false, message: 'Please confirm agreement to the Media Release Terms & Conditions.' },
        { status: 400 }
      );
    }

    const notes = [
      `Social Platform: ${platform || 'Instagram'}`,
      `Handle: ${socialHandle}`,
      `Vehicle / Content Focus: ${vehicleDetails || 'General Automotive Media'}`,
      'Media Release Agreement: Confirmed (1-Paragraph Authorization Accepted)',
      'Submission Source: /social (Creator & Community Showcase)'
    ].join('\n\n');

    // Prepare payload for WordPress Fluent Forms
    const formPayload = new URLSearchParams({
      input_text: String(name).trim(),
      full_name: String(name).trim(),
      names: String(name).trim(),
      email: String(email).trim(),
      input_text_1: String(phone).trim(),
      phone: String(phone).trim(),
      dropdown: String(platform || 'Instagram'),
      platform: String(platform || 'Instagram'),
      input_text_2: String(socialHandle).trim(),
      social_handle: String(socialHandle).trim(),
      input_text_3: String(vehicleDetails || '').trim(),
      vehicle_details: String(vehicleDetails || '').trim(),
      description: notes,
      background_notes: notes,
      terms_agreed: 'Yes (Media Release Statement Accepted)',
      checkbox: 'Yes (Media Release Statement Accepted)',
      checkbox_1: 'Yes (Media Release Statement Accepted)',
      submission_type: 'Social Media Creator Agreement (/social)',
    });

    // Dedicated Fluent Form ID for Social Media Creator Release (Defaults to 6)
    const SOCIAL_FORM_ID = process.env.FLUENT_FORM_SOCIAL_ID || '6';

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: SOCIAL_FORM_ID,
      data: formPayload.toString(),
    });

    try {
      const wpResponse = await fetch(WP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0',
          'Cookie': 'hc_js_gate=1',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: postBody.toString(),
      });

      const rawText = await wpResponse.text();
      console.log('Social Lead WP response:', rawText.substring(0, 180));
    } catch (wpErr) {
      console.warn('WP Forwarding notice for social lead (non-fatal):', wpErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your Media Release Agreement has been successfully submitted.',
    });
  } catch (error: any) {
    console.error('Error submitting social lead:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing media release. Please try again.' },
      { status: 500 }
    );
  }
}
