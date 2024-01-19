// import { Booth } from '@/lib/models/booths'
import React from 'react'
import BoothDetailsComponent from './booth_details'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'

type Props = {
  // booths: Booth[]
  booths: any[]
}

function BoothTableComponent({ booths }: Props) {
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Booth Registrations List
    </h2>
    <div className="flex flex-row justify-between">
      <Button></Button>
      <Button onClick={console.log}><DownloadIcon className='mr-2' /></Button>
    </div>
    {booths.map((booth) => {
      return <BoothDetailsComponent key={booth.id} booth={booth} />
    })}
  </>
}

export default BoothTableComponent