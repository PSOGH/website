import { registerPaymentMethods } from "../controllers/payment";
import { db, schema } from "../db";

export async function seed_payment_data() {
  await db.delete(schema.paymentMethods);
  await registerPaymentMethods([
    {paymentMethodName: 'Cash', id: 1},
    {paymentMethodName: 'Cheque', id: 2},
    {paymentMethodName: 'Bank Transfer', id: 3},
    {paymentMethodName: 'Zelle', id: 4},
  ]);
  await db.delete(schema.payableAccounts);
  await db.delete(schema.recievableAccounts);
  await db.delete(schema.payments);
}
