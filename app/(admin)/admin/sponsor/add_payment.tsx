'use client'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { PlusIcon, ReceiptIcon } from 'lucide-react'
import React from 'react'
import AddPaymentForm from './form'

type Props = {
  recievable: number
  paymentMethods: { key: number, value: string }[]
}

function AddPayment({ recievable, paymentMethods }: Props) {
  return <Drawer>
    <DrawerTrigger asChild><Button variant='outline' className='w-fit ml-auto'> <PlusIcon className='mr-0' /><ReceiptIcon className='ml-0 mr-0' /></Button></DrawerTrigger>
    <DrawerContent className='px-4 pb-2 min-w-fit max-w-md md:max-w-xl lg:max-w-3xl mx-auto'>
      <DrawerTitle className='mx-auto my-4'>Add Payment</DrawerTitle>
      <DrawerHeader className='flex flex-col'>
        <AddPaymentForm recievable={recievable} paymentMethods={paymentMethods} />
      </DrawerHeader>
      <DrawerFooter className='flex flex-row ml-auto justify-end'>
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
}

export default AddPayment