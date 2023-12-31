import { createKysely } from '@vercel/postgres-kysely';

import { TeamTable, ParticipantTable } from '@/lib/models/volunteers';

export interface Database {
  team: TeamTable;
  participant: ParticipantTable;
}

export const db = createKysely<Database>();
