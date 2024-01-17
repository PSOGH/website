import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

type Props = {}

const positions: { name: string, position: string }[] = [
  {
    name: 'Jasmeeta Singh',
    position: 'Board Member'
  },
  {
    name: 'Aman Sidhu',
    position: 'Board Member'
  },
  {
    name: 'Bobby Kaur',
    position: 'Board Member'
  },
  {
    name: 'Rupinder Kaur',
    position: 'Board Member'
  },
  {
    name: 'Gagan Preet Singh',
    position: 'Board Member'
  },
  {
    name: 'Kavneet Kaur',
    position: 'Board Member'
  },
  {
    name: 'Gurpreet Singh',
    position: 'Board Member'
  },
  {
    name: 'Jasleen Kaur',
    position: 'Board Member'
  },
  {
    name: 'Seema Bhatia',
    position: 'Board Member'
  },
  {
    name: 'Mohan Singh',
    position: 'Board Member'
  },
  {
    name: 'Nikki Singh',
    position: 'Board Member'
  },
  {
    name: 'Amarpreet Kaur',
    position: 'Board Member'
  },
  {
    name: 'Kamaljeet Singh Otal',
    position: 'Board Member'
  },
  {
    name: 'Raman Johar',
    position: 'Board Member'
  },
  {
    name: 'Trilochan Singh',
    position: 'Board Member'
  },
  {
    name: 'Goldy Gill',
    position: 'Board Member'
  }
]

export default function LeadershipPage({}: Props) {
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Leadership
    </h2>
    <Table className='w-4/5 mt-4'>
      <TableCaption>Leaders of Punjabi Society of Greater houston</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Name</TableHead>
          <TableHead>Position</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          positions.map(({ name, position }) => <TableRow key={name}>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell>{position}</TableCell>
          </TableRow>)
        }
      </TableBody>
    </Table>
  </>
}