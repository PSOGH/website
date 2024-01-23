import { asc, eq, max } from 'drizzle-orm';
import { db, schema } from '../db';

import { sponsors, sponsorshipLevels } from '../models/sponsor';

type NewSponsorshipLevel = typeof sponsorshipLevels.$inferInsert;

export async function registerSponsorshipLevel(newSponsorshipLevel: NewSponsorshipLevel) {
  await db.insert(schema.sponsorshipLevels).values(newSponsorshipLevel);
}

export async function registerSponsorshipLevels(newSponsorshipLevels: NewSponsorshipLevel[]) {
  await db.insert(schema.sponsorshipLevels).values(newSponsorshipLevels);
}

export async function getSponsorshipLevels() {
  return await db.select().from(schema.sponsorshipLevels).where(eq(schema.sponsorshipLevels.event, 2));
}

export async function addSponsor(sponsor: typeof sponsors.$inferInsert) {
  const recievableId = (await db.insert(schema.recievableAccounts).values({}).returning({id: schema.recievableAccounts.id}))[0].id;
  const sponsorId = (await db.insert(schema.sponsors).values(sponsor).returning({id: schema.sponsors.id}))[0].id;
  await db.update(schema.sponsors).set({recievableAccounts: recievableId}).where(eq(schema.sponsors.id, sponsorId));
}

export async function getSponsors() {
  await db.select().from(schema.sponsors).where(eq(schema.sponsorshipLevels.event, 2));
}

export async function getSponsor(SponsorID: number) {
  await db.select().from(schema.sponsors).where(eq(schema.sponsors.id, SponsorID));
}

export async function getSponsorsFull() {
  return await db.query.sponsors.findMany({
    with: {
      sponsor: {
        with: {
          emails: true,
          phoneNumbers: true,
          websites: true,
          addresses: true,
          logos: true,
          entityType: true,
          entityRole: true,
          representedBy: {
            with: {
              representative: {
                with: {
                  emails: true,
                  phoneNumbers: true,
                  websites: true,
                  addresses: true,
                  logos: true,
                }
              }
            }
          },
        }
      },
      sponsorshipLevel: true,
      recievable: {
        with: {
          payment: {
            with: {
              method: true,
              // recievable: true,
            }
          }
        }
      },
    },
    orderBy: [asc(schema.sponsors.sponsorshipLevel)],
  })
}
