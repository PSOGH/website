import { Generated, Selectable, Insertable, Updateable } from 'kysely'

export interface TeamTable {
  id: Generated<number>

  first_name: string
  last_name: string
  email: string
  phone: string
  lead_age: number
  lead_gender: 'male' | 'female' | 'n/a'
  submitted_at: Date
  team: string
  team_size: number
  event: string
}

export type Team = Selectable<TeamTable>
export type NewTeam = Insertable<TeamTable>
export type TeamUpdate = Updateable<TeamTable>

export interface ParticipantTable {
  id: Generated<number>
  TeamId: number

  first_name: string
  last_name: string
  age: number
  gender: 'male' | 'female' | 'n/a'
}

export type Participant = Selectable<ParticipantTable>
export type NewParticipant = Insertable<ParticipantTable>
export type ParticipantUpdate = Updateable<ParticipantTable>
