import { createKysely } from '@vercel/postgres-kysely';

import { TeamTable, ParticipantTable } from '@/lib/models/volunteers';
import { SponsorTable } from './models/sponsors';
import { BoothTable } from './models/booths';

export interface Database {
  team: TeamTable;
  participant: ParticipantTable;
  sponsor: SponsorTable;
  booth: BoothTable;
}

export const db = createKysely<Database>();
