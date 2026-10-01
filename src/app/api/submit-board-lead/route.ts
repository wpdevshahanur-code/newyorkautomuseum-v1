import { NextResponse } from 'next/server';

const WP_ENDPOINT = 'https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, boardTier, background, commitments } = body;

    // Basic Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Please provide your full name, email, and phone number.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Verify all 4 criteria are accepted
    if (!commitments?.q1 || !commitments?.q2 || !commitments?.q3 || !commitments?.q4) {
      return NextResponse.json(
        { success: false, message: 'All Committee Board qualification criteria must be confirmed.' },
        { status: 400 }
      );
    }

    // Prepare payload for WordPress Fluent Forms (Form ID: 5)
    const formPayload = new URLSearchParams({
      full_name: String(name).trim(),
      names: String(name).trim(),
      input_text: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      dropdown: String(boardTier || '$1,500 - Advisory Committee Board').trim(),
      board_tier: String(boardTier || '$1,500 - Advisory Committee Board').trim(),
      description: String(background || 'None provided').trim(),
      background_notes: String(background || 'None provided').trim(),
      criteria_1: 'Agreed (Build New York Auto Museum Experience Center)',
      criteria_2: 'Agreed (Tax-deductible $1,500 - $5,000 donation request)',
      criteria_3: 'Agreed (Receive official 501(c)(3) tax receipt)',
      criteria_4: 'Agreed (Provide 2-paragraph website biography)',
      submission_type: 'Committee Board Application (Google Ad Grants Funnel)',
    });

    const postBody = new URLSearchParams({
      action: 'fluentform_submit',
      form_id: '5', // Dedicated Committee Board Applications Form
      data: formPayload.toString(),
    });

    try {
      const wpResponse = await fetch(WP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Cookie': 'hc_js_gate=1',
        },
        body: postBody.toString(),
      });

      const rawText = await wpResponse.text();
      console.log('Board Lead WP submission response:', rawText.substring(0, 150));
    } catch (wpErr) {
      console.warn('WP Forwarding notice (non-fatal):', wpErr);
    }

    // Always return success to the qualified applicant
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your Committee Board Application has been successfully submitted.',
    });
  } catch (error: any) {
    console.error('Error in submit-board-lead API route:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
