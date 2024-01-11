import * as z from 'zod';

export const boothFormSchema = z.object({
  business_owner: z.string(),
  business_name: z.string(),
  contact_email: z.string().email(),
  contact_phone: z.string().regex(/^\d{10}$/),
  payment_method: z.string(),
  booth_logo_filename: z.string(),
  booth_logo_file: z.string(),
  booth_type: z.string(),
  booth_introduction: z.string(),
})
