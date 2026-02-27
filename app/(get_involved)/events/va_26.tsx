import Link from 'next/link'

import ImageKit from '@/components/imagekit'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSignIcon, HeartHandshakeIcon, StoreIcon } from 'lucide-react'
import TicketButtonComponent from './ticketButtonComponent'

type Props = {}

export default function Vaisakhi2026({ }: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>Grand Vaisakhi Night: Gajda Wajda Punjab 2026</CardTitle>
      <CardDescription>April 18, 2026 | 5:00 – 9:30 PM CDT | <a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/GPqcerMR6RFncWqv5'>GSH Event Center</a></CardDescription>
      <div className='grid grid-cols-10 gap-2 mt-2'>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <TicketButtonComponent />
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardHeader>
    <CardContent>
      <Link href='/events/va_26'>
        <ImageKit src='va_26.jpeg' width={1200} alt='Grand Vaisakhi Night 2026' className='w-full' />
      </Link>
    </CardContent>
    <CardFooter>
      <div className='grid grid-cols-10 gap-2 mt-2 w-full'>
        <Button asChild className='col-span-8 col-start-2 bg-amber-300 text-gray-700 hover:bg-amber-600 hover:text-gray-50 font-semibold' variant={'outline'}><Link href='/events/va_26'>Learn More</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <TicketButtonComponent />
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardFooter>
  </Card>
}
