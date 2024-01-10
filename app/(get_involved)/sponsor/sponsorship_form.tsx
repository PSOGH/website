import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import SponsorFormElementComponent from './form_component'

type Props = {
  event_code: string,
}

function SponsorshipFormComponent({ event_code }: Props) {
  return <Card className='w-full md:w-5/6 mt-6 mx-auto'>
    <CardHeader>
      <CardTitle>Sponsorship Pledge Form</CardTitle>
      <CardDescription>Please use this form to confirm your sponsorship pledge. Once the pledge has been made and payment processed, you will recieve the confirmation of benefits. You can make payments using:</CardDescription>
      <p className="ml-4 leading-7 [&:n.ot(:first-child)]:mt-6 text-muted-foreground text-sm">
        <span className='font-semibold'>Zelle</span>: houstonpunjabi@gmail.com
      </p>
      <p className="ml-4 leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground text-sm">
        <span className='font-semibold'>Check</span> payable at Punjabi Society of Greater Houston
      </p>
    </CardHeader>
    <CardContent>
      <SponsorFormElementComponent />
    </CardContent>
  </Card>
}

export default SponsorshipFormComponent