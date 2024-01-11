import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Booth } from '@/lib/models/booths'
import React from 'react'

type Props = {
  booth: Booth
}

function BoothDetailsComponent({ booth }: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>{booth.business_name}</CardTitle>
      <CardDescription>{booth.booth_type}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-row justify-start">
        <div className="flex flex-col w-1/6 mr-4">
          <img src={booth.booth_logo_file} />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="">
              <span className="font-semibold">Contact Name:</span> {booth.business_owner}
            </p>
            <p className="">
              <span className="font-semibold">Contact Email:</span> {booth.contact_email}
            </p>
            <p className="">
              <span className="font-semibold">Contact Phone:</span> {booth.contact_phone}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      {booth.booth_introduction}
    </CardFooter>
  </Card>
}

export default BoothDetailsComponent