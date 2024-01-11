import { db } from '@/lib/db';
import { NewSponsor, SponsorUpdate } from '@/lib/models/sponsors';

export async function getSponsors() {
  return await db
    .selectFrom('sponsor')
    .select([
      'id',
      'sponsorship_level_code',
      'sponsor_name',
      'contact_name',
      'contact_email',
      'contact_phone',
      'contact_address',
      'contact_address2',
      'contact_city',
      'contact_state',
      'contact_zip',
      'sponsor_logo_file',
      'sponsor_booth',
      'sponsor_introduction',
    ])
    .execute();
}

export async function createSponsor(sponsor: NewSponsor) {
  return await db.insertInto('sponsor').values(sponsor).returningAll().executeTakeFirstOrThrow();
}

export async function updateSponsor(sponsor: SponsorUpdate) {
  return await db.updateTable('sponsor').set(sponsor).where('id', '=', (sponsor.id as number)).returningAll().executeTakeFirstOrThrow();
}

export async function deleteSponsor(sponsor: SponsorUpdate) {
  return await db.deleteFrom('sponsor').where('id', '=', (sponsor.id as number)).execute();
}
