import { createKysely } from '@vercel/postgres-kysely';

import { TeamTable, ParticipantTable } from '@/lib/models/volunteers';
import { SponsorTable } from './models/sponsors';

export interface Database {
  team: TeamTable;
  participant: ParticipantTable;
  sponsor: SponsorTable;
}

export const db = createKysely<Database>();
