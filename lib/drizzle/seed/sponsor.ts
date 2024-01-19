import { registerSponsorshipLevels } from "../controllers/sponsor";
import { db, schema } from "../db";

export async function seed_sponsor_data() {
  await db.delete(schema.sponsorshipLevels);
  await registerSponsorshipLevels([
    {
      event: 2,
      code: 'va24_grand',
      name: 'Grand Sponsor',
      amount: 10000,
      id: 1,
    },
    {
      event: 2,
      code: 'va24_platinum',
      name: 'Platinum Sponsor',
      amount: 5000,
      id: 2,
    },
    {
      event: 2,
      code: 'va24_diamond',
      name: 'Diamond Sponsor',
      amount: 2500,
      id: 3,
    },
    {
      event: 2,
      code: 'va24_gold',
      name: 'Gold Sponsor',
      amount: 1500,
      id: 4,
    },
    {
      event: 2,
      code: 'va24_silver',
      name: 'Silver Sponsor',
      amount: 1000,
      id: 5,
    },
    {
      event: 2,
      code: 'va24_bronze',
      name: 'Bronze Sponsor',
      amount: 500,
      id: 6,
    }
  ]);
  await db.delete(schema.sponsors);
}
