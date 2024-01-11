import React from 'react'
import { Sponsor } from '@/lib/models/sponsors'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {
  sponsor: Sponsor
}

function SponsorDetailsComponent({
  sponsor
}: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>{sponsor.sponsor_name}</CardTitle>
      <CardDescription>
        {{
          va24_grand: 'Grand Sponsor',
          va24_platinum: 'Platinum Sponsor',
          va24_diamond: 'Diamond Sponsor',
          va24_gold: 'Gold Sponsor',
          va24_silver: 'Silver Sponsor',
          va24_bronze: 'Bronze Sponsor',
        }[
          sponsor.sponsorship_level_code
        ]}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-row justify-start">
        <div className="flex flex-col w-1/6 mr-4">
          <img src={sponsor.sponsor_logo_file} />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="">
              <span className="font-semibold">Contact Name:</span> {sponsor.contact_name}
            </p>
            <p className="">
              <span className="font-semibold">Contact Email:</span> {sponsor.contact_email}
            </p>
            <p className="">
              <span className="font-semibold">Contact Phone:</span> {sponsor.contact_phone}
            </p>
            <p className="">
              <span className="font-semibold">Contact Address:</span> {sponsor.contact_address}
            </p>
            <p className="">
              {sponsor.contact_address2}
            </p>
            <p className="">
              {sponsor.contact_city}, {sponsor.contact_state} {sponsor.contact_zip}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      {sponsor.sponsor_introduction}
    </CardFooter>
  </Card>
}

export default SponsorDetailsComponent