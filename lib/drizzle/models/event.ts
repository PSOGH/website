import {
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

import { booths } from './booth';
import { sponsors } from './sponsor';
import { relations } from 'drizzle-orm';


export const events = pgTable('tblEvents', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  date: timestamp('date'),
  location: text('location'),
  address: text('address'),
  address2: text('address2'),
  city: text('city'),
  state: text('state'),
  zipCode: text('zipCode'),
  locationMapLink: text('locationMapLink'),
  logoURL: text('logoURL'),
});

export const eventRelations = relations(events, ({ many }) => ({
  booths: many(booths),
  sponsors: many(sponsors),
}));

export const eventImagesAndReels = pgTable('tblEventImagesAndReels', {
  id: serial('id').primaryKey(),
  event: text('event'),
  imageURL: text('imageURL'),
  videoURL: text('videoURL'),
  highlightVideoURL: text('highlightVideoURL'),
});

export const eventImagesAndReelsRelations = relations(eventImagesAndReels, ({ one }) => ({
  event: one(events, {
    fields: [eventImagesAndReels.event],
    references: [events.id]
  }),
}));
