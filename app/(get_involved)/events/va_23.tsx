import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSignIcon, FilmIcon, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Vaisakhi2023({}: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>Grand Vaisakhi Mela 2023 | Gajda Wajda Punjab</CardTitle>
      <CardDescription>April 23, 2023 | <a target="_blank" rel="noreferrer" href='https://maps.app.goo.gl/R1XdzMT4K8dAoUCN6'>GSH Event Center</a></CardDescription>
      <div className='grid grid-cols-6 gap-2 mt-2'>
        <Button asChild className='col-span-2 bg-emerald-600 text-gray-50 hover:bg-emerald-200 hover:text-gray-700' variant={'outline'}>
          <Link href='/events/va_23#Sponsors'><DollarSignIcon className='mr-2' /> Sponsors</Link>
        </Button>
        <Button asChild className='col-span-2 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700' variant={'outline'}>
          <Link href='/events/va_23#Reel'><VideoIcon className='mr-2' /> Event Reel</Link>
        </Button>
        <Button asChild className='col-span-2 bg-green-600 text-gray-50 hover:bg-green-200 hover:text-gray-700' variant={'outline'}>
          <Link href='/events/va_23#Highlights'><FilmIcon className='mr-2' /> Highlights</Link>
        </Button>
      </div>
    </CardHeader>
  </Card>
}