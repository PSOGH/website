import * as z from 'zod';

export const paymentFormSchema = z.object({
  paymentMethod: z.coerce.number().min(1, 'Please select a payment method.'),
  paymentAmount: z.coerce.number().min(1, 'Please enter a payment amount.'),
  paymentDate: z.date(),  // .required('Please enter a payment date.'),
  paymentNotes: z.string().min(1, 'Please enter payment notes.'),
  recievable: z.number().nullable(),
});
