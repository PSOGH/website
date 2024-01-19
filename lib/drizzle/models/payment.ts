import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { sponsors } from './sponsor';
import { booths } from './booth';

export const recievableAccounts = pgTable('tblRecievableAccounts', {
  id: serial('id').primaryKey(),
});

export const recievableAccountRelations = relations(recievableAccounts, ({ one, many }) => ({
  sponsorship: one(sponsors, {
    fields: [recievableAccounts.id],
    references: [sponsors.recievableAccounts]
  }),
  booth: one(booths, {
    fields: [recievableAccounts.id],
    references: [booths.recievableAccounts]
  }),
  payment: many(payments, { relationName: 'recievablePayment'}),
}));

export const payableAccounts = pgTable('tblPayableAccounts', {
  id: serial('id').primaryKey(),
  amount: integer('amount'),
});

export const paymentMethods = pgTable('tblPaymentMethods', {
  id: serial('id').primaryKey(),
  paymentMethodName: text('paymentMethodName'),
});

export const payments = pgTable('tblPayments', {
  id: serial('id').primaryKey(),
  method: integer('paymentMethod'),
  amount: integer('amount'),
  detail: text('paymentDetail'),
  timestamp: timestamp('timestamp'),
  recievable: integer('recievable'),
  payable: integer('payable'),
});

export const paymentRelations = relations(payments, ({ one, many }) => ({
  method: one(paymentMethods, {
    fields: [payments.method],
    references: [paymentMethods.id]
  }),
  payable: one(payableAccounts),
  recievable: one(recievableAccounts, {
    fields: [payments.recievable],
    references: [recievableAccounts.id],
    relationName: 'recievablePayment'
  }),
}));

export type RecievableAccount = typeof recievableAccounts.$inferSelect;
export type NewRecievableAccount = typeof recievableAccounts.$inferInsert;

export type PayableAccount = typeof payableAccounts.$inferSelect;
export type NewPayableAccount = typeof payableAccounts.$inferInsert;

export type PaymentMethod = typeof paymentMethods.$inferSelect;
export type NewPaymentMethod = typeof paymentMethods.$inferInsert;

export type Payment = typeof payments.$inferSelect;
export type NewPayment = typeof payments.$inferInsert;
