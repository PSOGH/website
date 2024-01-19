import { db, schema } from '../db';

import { events } from '../models/event';

type NewEvent = typeof events.$inferInsert;

export async function registerEvent(newEvent: NewEvent) {
  await db.insert(schema.events).values(newEvent);
}

export async function registerEvents(newEvents: NewEvent[]) {
  await db.insert(schema.events).values(newEvents);
}
