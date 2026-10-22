/**
 * Salesforce Web-to-Lead Integration
 * Organization ID: 00Diw000000OKKC (The New York Auto Experience Inc. / New York Auto Museum)
 */

export interface SalesforceLeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  city?: string;
  state?: string;
  leadSource?: string;
  description?: string;
}

const SF_OID = '00Diw000000OKKC';
const SF_ENDPOINT = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
const RETURN_URL = 'https://www.newyorkautomuseum.com/thank-you';

export async function submitToSalesforce(lead: SalesforceLeadPayload): Promise<boolean> {
  try {
    const payload = new URLSearchParams({
      oid: SF_OID,
      retURL: RETURN_URL,
      first_name: lead.firstName.trim(),
      last_name: lead.lastName.trim() || 'Lead',
      email: lead.email.trim(),
      phone: lead.phone.trim(),
      company: (lead.company || 'New York Auto Museum Lead').trim(),
      city: (lead.city || '').trim(),
      state: (lead.state || '').trim(),
      lead_source: (lead.leadSource || 'Web').trim(),
      description: (lead.description || '').trim(),
    });

    const response = await fetch(SF_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'NYAM-WebToLead/1.0',
      },
      body: payload.toString(),
    });

    console.log(`[Salesforce WebToLead] Submitted ${lead.email} - Status: ${response.status}`);
    return response.ok;
  } catch (error) {
    console.warn('[Salesforce WebToLead] Non-fatal forwarding error:', error);
    return false;
  }
}
