'use server'
import * as z from 'zod'
import { sponsorFormSchema } from './form_schema'
import { addSponsor } from '@/lib/drizzle/controllers/sponsor';
import { addEntity } from '@/lib/drizzle/controllers/entity';

export async function submitSponsor(data: z.infer<typeof sponsorFormSchema>) {
  // Self Sponsoring
  if(data.sponsor_type == 1) {
    try {
      const entity = await addEntity(
        data.contact_name,
        2,
        3,
        [data.contact_email],
        [data.contact_phone],
        [],
        [[data.sponsor_logo_file, data.sponsor_logo_filename]],
        [{
          address: data.contact_address,
          address2: data.contact_address2 || '',
          city: data.contact_city,
          state: data.contact_state,
          zipCode: data.contact_zip,
        }],
        []
      )

      return {
        message: 'Thank you for your interest in sponsoring our event! We will be in touch soon.',
        sponsor: entity
      };
    } catch (error) {
      return {
        'message': 'There was an error submitting your Sponsor Information. Please try again later or contact a PSOGH member.',
        'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
      }
    }
  }
  if(data.sponsor_type == 2) {
    try {
      const entity = await addEntity(
        data.contact_name,
        1,
        3,
        [data.contact_email],
        [data.contact_phone],
        [],
        [],
        [{
          address: data.contact_address,
          address2: data.contact_address2 || '',
          city: data.contact_city,
          state: data.contact_state,
          zipCode: data.contact_zip,
        }],
        []
      )
      const sponsorEntity = await addEntity(
        data.sponsor_name,
        2,
        3,
        [],
        [],
        [],
        [[data.sponsor_logo_file, data.sponsor_logo_filename]],
        [],
        [entity]
      )
      const sponsor = await addSponsor({
        name: data.sponsor_name,
        introduction: data.sponsor_introduction,
        sponsor: sponsorEntity,
        sponsorshipLevel: data.sponsorship_level_code,
        requestBooth: data.sponsor_booth,
      });

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
}
