import { jsonArrayFrom, jsonObjectFrom } from 'kysely/helpers/postgres';

import { db } from '@/lib//db';
import { NewParticipant, NewTeam } from '@/lib/models/volunteers';

export async function getTeams() {
  return await db
    .selectFrom('team')
    .select((eb) => [
      'id',
      jsonObjectFrom(
        eb.selectNoFrom([
          'first_name as firstName',
          'last_name as lastName',
          'email as email',
          'phone as phone',
          'lead_age as age',
          'lead_gender as gender'
        ])
      ).as('lead'),
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