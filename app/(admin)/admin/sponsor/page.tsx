import React from 'react'
import { getSponsors } from '@/lib/controllers/sponsors'
import { Sponsor } from '@/lib/models/sponsors'
import SponsorTableComponent from './sponsor_table'

type Props = {}

async function SponsorListPage({}: Props) {
  const sponsors: Sponsor[] = await getSponsors()
  return <SponsorTableComponent sponsors={sponsors} />
}

export default SponsorListPage