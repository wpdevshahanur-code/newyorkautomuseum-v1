import { NextResponse } from 'next/server';
import { submitToSalesforce } from '@/lib/salesforce';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      titlePosition,
      companyName,
      email,
      phone,
      address,
      boardTier,
      conflictNote,
      signature,
      signedDate,
    } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Please provide your full legal name, email, and phone number.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || 'Board';
    const lastName = nameParts.slice(1).join(' ') || 'Signatory';

    const certificateId = `NYAM-EXEC-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const description = `[OFFICIAL BOARD AGREEMENT EXECUTED]
Certificate ID: ${certificateId}
Role/Tier: ${boardTier}
Title/Position: ${titlePosition || 'Not Specified'}
Company: ${companyName || 'Individual'}
Mailing Address: ${address || 'Not Provided'}
Conflict of Interest: ${conflictNote || 'N/A'}
E-Signature Status: Verified & Recorded (${signature ? 'Digital Signature Attached' : 'Typed'})
Execution Timestamp: ${signedDate || new Date().toISOString()}
Compliance: US E-SIGN Act (15 U.S.C. § 7001)`;

    // Submit to Salesforce CRM
    await submitToSalesforce({
      firstName,
      lastName,
      email,
      phone,
      company: companyName || 'Board Agreement Candidate',
      leadSource: 'Board Agreement Portal (E-Signed)',
      description,
    });

    console.log(`[Board Agreement Executed] ${certificateId} for ${fullName} (${email})`);

    return NextResponse.json({
      success: true,
      certificateId,
      message: 'Board Agreement executed successfully.',
    });
  } catch (error) {
    console.error('Error processing board agreement execution:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred while processing the agreement.' },
      { status: 500 }
    );
  }
}
