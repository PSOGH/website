import { Generated, Selectable, Insertable, Updateable } from 'kysely'

export interface BoothTable {
  id: Generated<number>

  business_owner: string
  business_name: string
  contact_phone: string
  contact_email: string
  booth_type: string
  booth_logo_file: string
  booth_introduction: string
}

export type Booth = Selectable<BoothTable>
export type NewBooth = Insertable<BoothTable>
export type BoothUpdate = Updateable<BoothTable>
