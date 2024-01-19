import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SponsorFull } from '@/lib/drizzle/models/sponsor'
import { EntityFull } from '@/lib/drizzle/models/entity'
import { Badge } from '@/components/ui/badge'
import ImageKit from '@/components/imagekit'
import PaymentsComponent from './payments'
import AddPaymentForm from './form'

type Props = {
  sponsor: SponsorFull,
  paymentMethods: {key: number, value: string}[]
}

function SponsorDetailsComponent({sponsor, paymentMethods}: Props) {
  const contactDetails: EntityFull | null = (
    (
      (sponsor.sponsor?.representedBy) &&
      (sponsor.sponsor?.representedBy?.length > 0) &&
      (sponsor.sponsor?.representedBy[0])
    )
    ? sponsor.sponsor?.representedBy[0].representative
    : sponsor.sponsor
  );
  return <Card>
    <CardHeader>
      <CardTitle className='flex flex-row mb-1'><div className='mr-4 text-white text-center bg-slate-500 min-w-[100px] max-w-[150px] py-1 rounded-md'>{sponsor.sponsor?.entityType && sponsor.sponsor?.entityType?.entityTypeName}</div><div className='py-1'>{sponsor.name}</div></CardTitle>
      <CardDescription>
        <Badge variant='outline'>{sponsor.sponsorshipLevel?.name}</Badge>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col justify-start">
        <div className="flex flex-row justify-start">
          <div className="flex flex-col w-1/6 mr-4 px-auto">
            {sponsor.sponsor?.logos && sponsor.sponsor?.logos[0] && sponsor.sponsor?.logos[0].entityLogo && <ImageKit src={`${sponsor.sponsor?.logos[0].entityLogo.substring(7)}`} width={100} alt={sponsor.sponsor.entityName || ""} className='mx-auto my-auto' />}
          </div>
          <div className="flex flex-row mx-4">
            <div className="flex flex-col">
              <div className="font-semibold">Contact Details</div>
              <div className="grid grid-cols-4">
                <div className="font-semibold col-start-1">Name</div>
                <div className="col-start-2 col-span-3">{contactDetails?.entityName}</div>
                <div className="font-semibold col-start-1">Email</div>
                <div className="col-start-2 col-span-3">{contactDetails?.emails && contactDetails?.emails[0] && contactDetails?.emails[0].entityEmail}</div>
                <div className="font-semibold col-start-1">Phone</div>
                <div className="col-start-2 col-span-3">{contactDetails?.phoneNumbers && contactDetails?.phoneNumbers[0] && contactDetails?.phoneNumbers[0].entityPhoneNumber}</div>
                <div className="font-semibold col-start-1">Address</div>
                <div className="col-start-2 col-span-3">{contactDetails?.addresses && contactDetails?.addresses[0] && contactDetails?.addresses[0].entityAddress}</div>
                <div className="col-start-2 col-span-3">{contactDetails?.addresses && contactDetails?.addresses[0] && contactDetails?.addresses[0].entityAddress2}</div>
                <div className="col-start-2 col-span-3">{contactDetails?.addresses && contactDetails?.addresses[0] && contactDetails?.addresses[0].city}</div>
                <div className="col-start-2 col-span-3">{contactDetails?.addresses && contactDetails?.addresses[0] && contactDetails?.addresses[0].state}</div>
                <div className="col-start-2 col-span-3">{contactDetails?.addresses && contactDetails?.addresses[0] && contactDetails?.addresses[0].zipCode}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-4">
            <PaymentsComponent payments={sponsor.recievable?.payment || []} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-left ml-8">
        <span className="font-semibold mr-2">Introduction</span>
        {sponsor.introduction}
      </div>
    </CardContent>
    <CardFooter>
      <AddPaymentForm recievable={sponsor.recievable?.id || 0} paymentMethods={paymentMethods} />
    </CardFooter>
  </Card>
}

export default SponsorDetailsComponent