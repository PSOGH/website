import { Generated, Selectable, Insertable, Updateable } from 'kysely'

export interface SponsorTable {
  id: Generated<number>

  sponsorship_level_code: string
  sponsor_name: string
  contact_name: string
  contact_email: string
  contact_phone: string
  contact_address: string
  contact_address2: string
  contact_city: string
  contact_state: string
  contact_zip: string
  sponsor_logo_file: string
  sponsor_booth: boolean
  sponsor_introduction: string
}

export type Sponsor = Selectable<SponsorTable>
export type NewSponsor = Insertable<SponsorTable>
export type SponsorUpdate = Updateable<SponsorTable>
