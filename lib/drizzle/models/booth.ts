import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core';
import { entities } from './entity';
import { events } from './event';
import { relations } from 'drizzle-orm';
import { recievableAccounts } from './payment';

export const boothLevels = pgTable('tblboothLevels', {
  id: serial('id').primaryKey(),
  event: text('event').notNull(),
  code: text('code'),
  name: text('name'),
  amount: integer('amount'),
});

export const booths = pgTable('tblBooths', {
  id: serial('id').primaryKey(),
  booth: integer('booth'),
  boothLevel: integer('boothLevel'),
  name: text('name').notNull(),
  // address: text('address').notNull(),
  // address2: text('address2'),
  // city: text('city').notNull(),
  // state: text('state').notNull(),
  // zipCode: text('zipCode').notNull(),
  logoURL: text('logoURL').notNull(),
  // requestBooth: boolean('requestBooth').default(false),
  introduction: text('introduction').notNull(),
  recievableAccounts: integer('recievableAccounts'),
});

export const boothLevelRelations = relations(boothLevels, ({ one, many }) => ({
  event: one(events, {
    fields: [boothLevels.event],
    references: [events.id]
  }),
  booths: many(booths),
}));

export const boothRelations = relations(booths, ({ one, many }) => ({
  booth: one(entities, {
    fields: [booths.booth],
    references: [entities.id]
  }),
  boothLevel: one(boothLevels, {
    fields: [booths.boothLevel],
    references: [boothLevels.id]
  }),
  recievable: one(recievableAccounts, {
    fields: [booths.recievableAccounts],
    references: [recievableAccounts.id]
  }),
}));

export type BoothLevel = typeof boothLevels.$inferSelect;
export type NewBoothLevel = typeof boothLevels.$inferInsert;

export type Booth = typeof booths.$inferSelect;
export type NewBooth = typeof booths.$inferInsert;
