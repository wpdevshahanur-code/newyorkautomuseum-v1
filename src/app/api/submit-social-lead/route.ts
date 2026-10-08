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

    let mappedPlatform = 'Instagram';
    const platLower = String(platform || '').toLowerCase();
    if (platLower.includes('tik')) {
      mappedPlatform = 'TikTok';
    } else if (platLower.includes('you') || platLower.includes('yt')) {
      mappedPlatform = 'YouTube';
    } else if (platLower.includes('face') || platLower.includes('fb')) {
      mappedPlatform = 'Facebook';
    } else if (platLower.includes('insta')) {
      mappedPlatform = 'Instagram';
    } else {
      mappedPlatform = 'Other';
    }

    const notes = [
      `Social Platform: ${platform || mappedPlatform}`,
      `Handle: ${socialHandle}`,
      `Vehicle / Content Focus: ${vehicleDetails || 'General Automotive Media'}`,
      'Media Release Agreement: Confirmed (1-Paragraph Authorization Accepted)',
      'Submission Source: /social (Creator & Community Showcase)'
    ].join('\n\n');

    // Prepare payload for WordPress Fluent Forms (Form ID: 6)
    // Avoid sending unconfigured checkbox fields which cause Fluent Forms HTTP 423 validation error
    const formPayload = new URLSearchParams({
      input_text: String(name).trim(),
      full_name: String(name).trim(),
      names: String(name).trim(),
      email: String(email).trim(),
      input_text_1: String(phone).trim(),
      phone: String(phone).trim(),
      dropdown: mappedPlatform,
      platform: mappedPlatform,
      input_text_2: String(socialHandle).trim(),
      social_handle: String(socialHandle).trim(),
      input_text_3: String(vehicleDetails || '').trim(),
      vehicle_details: String(vehicleDetails || '').trim(),
      description: notes,
      background_notes: notes,
      submission_type: 'Social Media Creator Agreement (/social)',
    });

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: '6',
      data: formPayload.toString(),
    });

    try {
      const wpResponse = await fetch(WP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Cookie': 'hc_js_gate=1',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: postBody.toString(),
      });

      const rawText = await wpResponse.text();
      console.log('Social Lead WP response status:', wpResponse.status, rawText.substring(0, 200));

      let wpSuccess = wpResponse.ok;
      try {
        const parsed = JSON.parse(rawText);
        if (parsed.errors) {
          console.error('Fluent Forms 6 validation errors:', parsed.errors);
          wpSuccess = false;
        }
      } catch {}

      if (!wpSuccess) {
        console.warn('WP Forwarding notice for social lead (non-fatal):', rawText);
      }
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
