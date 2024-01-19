import { db, schema } from "../db";
import { payments } from "@/lib/drizzle/models/payment";

export type NewPayment = typeof payments.$inferInsert;
export type NewPaymentMethod = typeof schema.paymentMethods.$inferInsert;

export async function registerPaymentMethod(newPaymentMethod: NewPaymentMethod) {
  await db.insert(schema.paymentMethods).values(newPaymentMethod);
}

export async function registerPaymentMethods(newPaymentMethods: NewPaymentMethod[]) {
  await db.insert(schema.paymentMethods).values(newPaymentMethods);
}

export async function getPaymentMethods() {
  return await db.select().from(schema.paymentMethods);
}

export async function addPayment(newPayment: NewPayment) {
  console.log(newPayment)
  console.log(process.env.POSTGRES_URL)
  await db.insert(schema.payments).values(newPayment).returning({id: schema.payments.id})
}

