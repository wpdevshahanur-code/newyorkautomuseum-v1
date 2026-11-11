import { NextResponse } from 'next/server';
import { submitToSalesforce } from '@/lib/salesforce';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      linkedinUrl,
      volunteerArea,
      availability,
      experience,
      agreed,
    } = body;

    if (!name || !email || !phone || !linkedinUrl || !String(linkedinUrl).trim()) {
      return NextResponse.json(
        { success: false, message: 'Please provide your full name, email, phone number, and LinkedIn profile.' },
        { status: 400 }
      );
    }

    if (!String(email).includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!agreed) {
      return NextResponse.json(
        { success: false, message: 'Please confirm your volunteer acknowledgment before submitting.' },
        { status: 400 }
      );
    }

    const nameParts = String(name).trim().split(/\s+/);
    const firstName = nameParts[0] || 'Volunteer';
    const lastName = nameParts.slice(1).join(' ') || 'Applicant';

    const cleanArea = String(volunteerArea || 'Museum Docent & Guest Experience').trim();
    const cleanAvailability = String(availability || 'Flexible / Weekends').trim();
    const cleanLinkedin = String(linkedinUrl).trim();
    const cleanExperience = String(experience || 'No additional notes provided').trim();

    const description = [
      '[VOLUNTEER APPLICATION (/volunteer)]',
      `Preferred Area: ${cleanArea}`,
      `Availability: ${cleanAvailability}`,
      `LinkedIn Profile: ${cleanLinkedin}`,
      `Experience / Notes: ${cleanExperience}`,
    ].join('\n');

    await submitToSalesforce({
      firstName,
      lastName,
      email: String(email).trim(),
      phone: String(phone).trim(),
      company: `Volunteer Applicant (${cleanArea})`,
      leadSource: 'Volunteer Application (/volunteer)',
      description,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your volunteer application has been successfully received.',
    });
  } catch (error) {
    console.error('Error submitting volunteer application:', error);
    return NextResponse.json(
      { success: false, message: 'Server error submitting volunteer application. Please try again.' },
      { status: 500 }
    );
  }
}
