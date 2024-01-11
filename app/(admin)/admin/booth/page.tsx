import { getBooths } from '@/lib/controllers/booths'
import { Booth } from '@/lib/models/booths'
import React from 'react'
import BoothTableComponent from './booth_table'

type Props = {}

async function BoothAdminPage({}: Props) {
  const booths: Booth[] = await getBooths()
  return <BoothTableComponent booths={booths} />
}

export default BoothAdminPage