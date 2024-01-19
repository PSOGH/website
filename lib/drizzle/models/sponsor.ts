import {
  boolean,
  pgTable,
  serial,
  text,
  integer,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { EntityFull, entities } from './entity';
import { events } from './event';
import { Payment, PaymentMethod, RecievableAccount, recievableAccounts } from './payment';

export const sponsorshipLevels = pgTable('tblSponsorshipLevels', {
  id: serial('id').primaryKey(),
  event: integer('event').notNull(),
  code: text('code'),
  name: text('name'),
  amount: integer('amount'),
});

export const sponsors = pgTable('tblSponsors', {
  id: serial('id').primaryKey(),
  sponsor: integer('sponsor'),
  sponsorshipLevel: integer('sponsorshipLevel'),
  name: text('name').notNull(),
  requestBooth: boolean('requestBooth').default(false),
  introduction: text('introduction').notNull(),
  recievableAccounts: integer('recievableAccounts'),
});

export const sponsorshipLevelRelations = relations(sponsorshipLevels, ({ one, many }) => ({
  event: one(events, {
    fields: [sponsorshipLevels.event],
    references: [events.id]
  }),
  sponsors: many(sponsors),
}));

export const sponsorRelations = relations(sponsors, ({ one }) => ({
  sponsor: one(entities, {
    fields: [sponsors.sponsor],
    references: [entities.id]
  }),
  sponsorshipLevel: one(sponsorshipLevels, {
    fields: [sponsors.sponsorshipLevel],
    references: [sponsorshipLevels.id]
  }),
  recievable: one(recievableAccounts, {
    fields: [sponsors.recievableAccounts],
    references: [recievableAccounts.id]
  }),
}));

export type SponsorshipLevel = typeof sponsorshipLevels.$inferSelect;
export type NewSponsorshipLevel = typeof sponsorshipLevels.$inferInsert;

export type Sponsor = typeof sponsors.$inferSelect;
export type NewSponsor = typeof sponsors.$inferInsert;

export type SponsorFull = Sponsor & {
  sponsor: EntityFull | null;
  sponsorshipLevel: SponsorshipLevel | null;
  recievable: RecievableAccount & {
    payment: (Payment & {
      method: PaymentMethod | null;
    })[][];
  } | null;
}