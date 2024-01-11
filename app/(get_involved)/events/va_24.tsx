import React from 'react'
import Link from 'next/link'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import ImageKit from '@/components/imagekit'
import { Button } from '@/components/ui/button'
import { DollarSignIcon, HeartHandshakeIcon, StoreIcon, TicketIcon } from 'lucide-react'

type Props = {}

export default function Vaisakhi2024({}: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>Vaisakhi Mela 2024</CardTitle>
      <CardDescription>April 20, 2024 | <a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/GBBsvfdFb6KKHguE8'>Dunham Theatre</a></CardDescription>
      <div className='grid grid-cols-10 gap-2 mt-2'>
        <div className='col-span-10 text-left text-xl font-bold'></div>
        <Button asChild className='col-span-2 col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <Button asChild className='col-span-2 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700' variant={'outline'}><Link href='/events/va_24'><TicketIcon className='mr-2' /> Tickets</Link></Button>
        <Button asChild className='col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardHeader>
    <CardContent>
      <Link href='/events/va_24'>
        <ImageKit src='IMG_7286.jpg.jpeg' width={1200} alt='Vaisakhi Mela 2024' className='w-full' />
      </Link>
    </CardContent>
    <CardFooter>
      <div className='grid grid-cols-10 gap-2 mt-2 w-full'>
        <Button asChild className='col-span-8 col-start-2 bg-amber-300 text-gray-700 hover:bg-amber-600 hover:text-gray-50 font-semibold' variant={'outline'}><Link href='/events/va_24'>Learn More</Link></Button>
        <Button asChild className='col-span-2 col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <Button asChild className='col-span-2 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700' variant={'outline'}><Link href='/events/va_24'><TicketIcon className='mr-2' /> Tickets</Link></Button>
        <Button asChild className='col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardFooter>
  </Card>

}