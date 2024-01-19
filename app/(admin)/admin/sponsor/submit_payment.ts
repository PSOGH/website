'use server'
import * as z from 'zod';

import { addPayment } from "@/lib/drizzle/controllers/payment";
import { paymentFormSchema } from "./form_schema";

export async function submitPayment(values: z.infer<typeof paymentFormSchema>) {
  try {
    const payment = await addPayment({
      method: values.paymentMethod,
      amount: values.paymentAmount,
      timestamp: values.paymentDate,
      detail: values.paymentNotes,
      recievable: values.recievable,
      payable: null,
    });
    return {
      message: 'Thank you for your interest in sponsoring our event! We will be in touch soon.',
      paytment: payment
    };
  } catch (error) {
    return {
      'message': 'There was an error submitting your Sponsor Information. Please try again later or contact a PSOGH member.',
      'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
    }
  }
}