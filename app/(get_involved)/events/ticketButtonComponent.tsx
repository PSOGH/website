import { Button } from '@/components/ui/button'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { TicketIcon } from 'lucide-react'
import React from 'react'

type Props = {}

function TicketButtonComponent({}: Props) {
  return <>
    <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-4 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700' variant={'outline'}><a href='https://www.etix.com/ticket/p/45250551/grand-vaisakhi-mela-2024-houston-dunham-theater-at-houston-christian-university'><TicketIcon className='mr-2' /> Tickets</a></Button>
    {/* <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-4 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700 md:hidden' variant={'outline'}><a href='https://www.etix.com/ticket/p/45250551/grand-vaisakhi-mela-2024-houston-dunham-theater-at-houston-christian-university'><TicketIcon className='mr-2' /> Tickets</a></Button> */}
    {/* <Button asChild className='col-span-8 col-start-2 md:col-span-2 md:col-start-4 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700 hidden md:flex' variant={'outline'}><a href="https://www.etix.com/ticket/p/45250551/grand-vaisakhi-mela-2024-houston-dunham-theater-at-houston-christian-university"><TicketIcon className='mr-2' /> Tickets</a></Button> */}
    {/* <Dialog>
      <DialogTrigger asChild>
        <Button className='col-span-8 col-start-2 md:col-span-2 md:col-start-4 bg-teal-600 text-gray-50 hover:bg-teal-200 hover:text-gray-700 hidden md:flex' variant={'outline'}><TicketIcon className='mr-2' /> Tickets</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buy Tickets here!</DialogTitle>
          <Button asChild variant={'ghost'}><a href="https://www.etix.com/ticket/p/45250551/grand-vaisakhi-mela-2024-houston-dunham-theater-at-houston-christian-university">Click here to open ticketting page separately</a></Button>
        </DialogHeader>
        <iframe src="https://www.etix.com/ticket/p/45250551/grand-vaisakhi-mela-2024-houston-dunham-theater-at-houston-christian-university" width="100%" height="100%" allow="autoplay" style={{minHeight: '500px'}}></iframe>
      </DialogContent>
    </Dialog> */}
  </>
}

export default TicketButtonComponent