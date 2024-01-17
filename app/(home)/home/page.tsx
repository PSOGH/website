'use client'
import React from 'react'
import Link from 'next/link'
import { DollarSignIcon, HeartHandshakeIcon, StoreIcon, TicketIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import ImageKit from '@/components/imagekit'

type Props = {}

export default function HomePage({}: Props) {
  return <>
    <video autoPlay loop muted className='min-w-full'>
      <source src="https://ik.imagekit.io/gps/psogh/historic_pics/PSGH%20WEBSITE%20VIDEO.mp4" />
    </video>
    <Card className='mt-2'>
      <CardHeader className='text-xl font-bold'>
        <CardTitle>Upcoming Event: Grand Vaisakhi Mela 2024</CardTitle>
        <CardDescription>April 20, 2024 | <a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/GBBsvfdFb6KKHguE8'>Dunham Theatre</a></CardDescription>
        <div className='grid grid-cols-10 gap-2 mt-2'>
          <div className='col-span-10 text-left text-xl font-bold'></div>
          <Button asChild className='col-span-2 col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
          <Button asChild className='col-span-2 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700' variant={'outline'}><Link href='/events/va_24'><TicketIcon className='mr-2' /> Tickets</Link></Button>
          <Button asChild className='col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
          <Button asChild className='col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booths'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
        </div>
      </CardHeader>
      <CardContent className='text-xl'>
        <Link href='/events/va_24'>
          <ImageKit src='IMG_7286.jpg.jpeg' width={1200} alt='Vaisakhi Mela 2024' className='w-full' />
        </Link>
      </CardContent>
      <CardFooter className='text-xl w-full'>
        <div className='grid grid-cols-10 gap-2 mt-2 w-full'>
          <Button asChild className='col-span-8 col-start-2 bg-amber-300 text-gray-700 hover:bg-amber-600 hover:text-gray-50 font-semibold' variant={'outline'}><Link href='/events/va_24'>Learn More</Link></Button>
          <Button asChild className='col-span-2 col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
          <Button asChild className='col-span-2 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700' variant={'outline'}><Link href='/events/va_24'><TicketIcon className='mr-2' /> Tickets</Link></Button>
          <Button asChild className='col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
          <Button asChild className='col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
        </div>
      </CardFooter>
    </Card>
  </>
}