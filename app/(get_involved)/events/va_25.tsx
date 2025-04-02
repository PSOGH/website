import Link from 'next/link'

import ImageKit from '@/components/imagekit'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSignIcon, HeartHandshakeIcon, StoreIcon } from 'lucide-react'
import TicketButtonComponent from './ticketButtonComponent'

type Props = {}

export default function Vaisakhi2025({ }: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>Vaisakhi Mela 2025</CardTitle>
      <CardDescription>April 19, 2025 | <a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/1fUMQZfK11EHwdE56'>Stafford Center Auditorium</a></CardDescription>
      <div className='grid grid-cols-10 gap-2 mt-2'>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <TicketButtonComponent />
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardHeader>
    <CardContent>
      <Link href='/events/va_25'>
        <ImageKit src='va_25_2.jpg' width={1200} alt='Vaisakhi Mela 2024' className='w-full' />
      </Link>
    </CardContent>
    <CardFooter>
      <div className='grid grid-cols-10 gap-2 mt-2 w-full'>
        <Button asChild className='col-span-8 col-start-2 bg-amber-300 text-gray-700 hover:bg-amber-600 hover:text-gray-50 font-semibold' variant={'outline'}><Link href='/events/va_24'>Learn More</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <TicketButtonComponent />
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardFooter>
  </Card>

}