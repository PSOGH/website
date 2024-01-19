import * as z from 'zod';

const MAX_FILE_SIZE = 100000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const sponsorFormSchema = z.object({
  sponsorship_level_code: z.coerce.number(),
  sponsor_type: z.coerce.number(),
  sponsor_name: z.string(),
  contact_name: z.string(),
  contact_email: z.string().email(),
  contact_phone: z.string().regex(/^\d{10}$/),
  contact_address: z.string(),
  contact_address2: z.string().optional(),
  contact_city: z.string(),
  contact_state: z.string(),
  contact_zip: z.string().regex(/^\d{5}$/),
  sponsor_logo_filename: z.string(),
  sponsor_logo_file: z.string(),
  sponsor_booth: z.boolean(),
  sponsor_introduction: z.string(),
})
