import ImageKit from '@/components/imagekit'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSignIcon, HeartHandshakeIcon, StoreIcon } from 'lucide-react'
import Link from 'next/link'
import TicketButtonComponent from '../ticketButtonComponent'

type Props = {}

export default function Vaisakhi2026Page({ }: Props) {
  return <Card className='mt-2'>
    <CardHeader className='text-xl font-bold'>
      <CardTitle>Grand Vaisakhi Night: Gajda Wajda Punjab 2026</CardTitle>
      <CardDescription>
        Saturday, April 18, 2026 | 5:00 – 9:30 PM CDT |{' '}
        <a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/GPqcerMR6RFncWqv5'>
          GSH Event Center, 9550 W Bellfort Ave, Houston, TX 77031
        </a>
      </CardDescription>
      <div className='grid grid-cols-10 gap-2 mt-2'>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <TicketButtonComponent />
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardHeader>
    <CardContent className='text-xl'>
      <ImageKit src='va_26.jpeg' width={1200} alt='Grand Vaisakhi Night 2026' className='w-full' />
      <div className='mt-4 space-y-4 text-base'>
        <p>
          Get ready for an unforgettable evening celebrating culture and community at the{' '}
          <strong>Grand Vaisakhi Night: Gajda Wajda Punjab</strong> on Saturday, April 18, 2026!
        </p>
        <div>
          <p className='font-semibold text-lg'>What to Expect:</p>
          <ul className='list-disc list-inside mt-2 space-y-1'>
            <li>Delicious food and shopping booths</li>
            <li>Exciting performances: Bhangra, Gidda, folk dances &amp; singing</li>
            <li>Best Dressed Ethnic Fashion Show – showcasing stunning traditional attire!</li>
            <li>Cash prizes, raffles, and much more!</li>
          </ul>
        </div>
        <div>
          <p className='font-semibold text-lg'>Get Involved:</p>
          <ul className='list-disc list-inside mt-2 space-y-1'>
            <li>Register for Booths: Contact Rupy Kindra at <a href='tel:8325240107' className='underline'>832-524-0107</a></li>
            <li>Sponsorship &amp; VIP Tickets: Contact Jasmeet Singh at <a href='tel:7138588229' className='underline'>713-858-8229</a></li>
          </ul>
        </div>
        <p className='font-semibold'>
          🎟️ General Admission: $20 &nbsp;|&nbsp; Doors Open at 5:00 PM
        </p>
        <p>
          Come dressed in your finest Punjabi attire for a chance to win the{' '}
          <strong>Best Punjabi Dressed</strong> award! 🌟
        </p>
      </div>
    </CardContent>
    <CardFooter className='text-xl w-full'>
      <div className='grid grid-cols-10 gap-2 mt-2 w-full'>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}><Link href='/volunteer'><HeartHandshakeIcon className='mr-2' /> Get Involved</Link></Button>
        <TicketButtonComponent />
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}><Link href='/sponsor'><DollarSignIcon className='mr-2' /> Sponsorship</Link></Button>
        <Button asChild className='col-span-8 col-start-2 md:col-span-2 bg-cyan-600 text-gray-50 hover:bg-cyan-200 hover:text-gray-700' variant={'outline'}><Link href='/booth'><StoreIcon className='mr-2' /> Booth Signup</Link></Button>
      </div>
    </CardFooter>
  </Card>
}
