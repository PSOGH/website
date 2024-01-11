import { db } from '@/lib/db';
import { NewBooth, BoothUpdate } from '../models/booths';

export async function getBooths() {
  return await db
    .selectFrom('booth')
    .select([
      'id',
      'business_owner',
      'business_name',
      'contact_phone',
      'contact_email',
      'booth_type',
      'payment_method',
      'booth_logo_file',
      'booth_introduction',
    ])
    .execute();
}

export async function createBooth(booth: NewBooth) {
  return await db.insertInto('booth').values(booth).returningAll().executeTakeFirstOrThrow();
}

export async function updateBooth(booth: BoothUpdate) {
  return await db.updateTable('booth').set(booth).where('id', '=', (booth.id as number)).returningAll().executeTakeFirstOrThrow();
}

export async function deleteBooth(booth: BoothUpdate) {
  return await db.deleteFrom('booth').where('id', '=', (booth.id as number)).execute();
}
