import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import BoothFormElementComponent from './form_component'

type Props = {}

export default function BoothsPage({}: Props) {
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Booths @ Vaisakhi Mela 2024
    </h2>
    <Card className='w-full md:w-5/6 mt-6 mx-auto'>
    <CardHeader>
      <CardTitle>Registration Form</CardTitle>
      <CardDescription>Please use this form to register your business for the booth. Once the registration has been made and payment processed, you will recieve the confirmation of benefits. You can make payments using:</CardDescription>
      <p className="ml-4 leading-7 [&:n.ot(:first-child)]:mt-6 text-muted-foreground text-sm">
        <span className='font-semibold'>Zelle</span>: houstonpunjabi@gmail.com
      </p>
      <p className="ml-4 leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground text-sm">
        <span className='font-semibold'>Check</span> payable at Punjabi Society of Greater Houston
      </p>
    </CardHeader>
    <CardContent>
      <BoothFormElementComponent />
    </CardContent>
  </Card>
    <iframe src="https://form.jotform.com/233449257926164" width="100%" height="100%" className="min-h-[800px] h-max"></iframe>
  </>
}