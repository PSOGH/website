import { Booth } from '@/lib/models/booths'
import React from 'react'
import BoothDetailsComponent from './booth_details'

type Props = {
  booths: Booth[]
}

function BoothTableComponent({ booths }: Props) {
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Booth Registrations List
    </h2>
    {booths.map((booth) => {
      return <BoothDetailsComponent key={booth.id} booth={booth} />
    })}
  </>
}

export default BoothTableComponent