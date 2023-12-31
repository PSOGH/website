import { jsonArrayFrom } from 'kysely/helpers/postgres';

import { db } from '@/lib//db';
import { NewParticipant, NewTeam } from '@/lib/models/volunteers';

export async function getTeams() {
  return await db
    .selectFrom('team')
    .select((eb) => [
      'id',
      jsonArrayFrom(
        eb.selectFrom('participant')
          .select(['participant.first_name as firstName', 'participant.last_name as lastName', 'participant.age as age', 'participant.gender as gender'])
          .whereRef('participant.TeamId', '=', 'team.id')
          .orderBy('participant.first_name', 'asc')
      ).as('participants'),
    ])
    .execute();
}

export async function createTeam(team: NewTeam) {
  return await db.insertInto('team').values(team).returningAll().executeTakeFirstOrThrow();
}

export async function createParticipant(participant: NewParticipant) {
  return await db.insertInto('participant').values(participant).returningAll().executeTakeFirstOrThrow();
}