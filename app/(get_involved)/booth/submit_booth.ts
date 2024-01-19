'use server'
import * as z from 'zod'
import { boothFormSchema } from './form_schema'
// import { createBooth } from '@/lib/controllers2/booths';

export async function submitBooth(data: z.infer<typeof boothFormSchema>) {
  const boothData = {
    'business_owner': data.business_owner,
    'business_name': data.business_name,
    'contact_phone': data.contact_phone,
    'contact_email': data.contact_email,
    'booth_type': data.booth_type,
    'booth_logo_file': data.booth_logo_file,
    'booth_introduction': data.booth_introduction,
  };
  try {
    // const booth = await createBooth(boothData);
    return {
      message: 'Thank you for your interest in having a booth at our event! We will be in touch soon.',
      // booth: booth
      booth: ""
    };
  } catch (error) {
    return {
      'message': 'There was an error submitting your Booth Information. Please try again later or contact a PSOGH member.',
      'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
    }
  }
}