'use server'
import * as z from 'zod'
import { sponsorFormSchema } from './form_schema'
import { createSponsor } from '@/lib/controllers/sponsors';

export async function submitSponsor(data: z.infer<typeof sponsorFormSchema>) {
  const sponsorData = {
    'sponsorship_level_code': data.sponsorship_level_code,
    'sponsor_name': data.sponsor_name,
    'contact_name': data.contact_name,
    'contact_email': data.contact_email,
    'contact_phone': data.contact_phone,
    'contact_address': data.contact_address,
    'contact_address2': data.contact_address2 || '',
    'contact_city': data.contact_city,
    'contact_state': data.contact_state,
    'contact_zip': data.contact_zip,
    'sponsor_logo_file': data.sponsor_logo_file,
    'sponsor_booth': data.sponsor_booth,
    'sponsor_introduction': data.sponsor_introduction,
  };
  try {
    const sponsor = await createSponsor(sponsorData);
    return {
      message: 'Thank you for your interest in sponsoring our event! We will be in touch soon.',
      sponsor: sponsor
    };
  } catch (error) {
    return {
      'message': 'There was an error submitting your Sponsor Information. Please try again later or contact a PSOGH member.',
      'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
    }
  }
}
