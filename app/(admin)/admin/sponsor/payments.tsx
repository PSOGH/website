import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Payment, PaymentMethod } from '@/lib/drizzle/models/payment'
import React from 'react'

type Props = {
  payments: (Payment & {
    method: PaymentMethod | null
  })[]
}

function PaymentsComponent({
  payments
}: Props) {
  if(payments.length == 0) {
    return <div className='font-semibold'>No payments</div>
  }
  return <Table>
    <TableCaption>A list of your payments made.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[150px]">Date</TableHead>
        <TableHead className='w-[100px]'>Method</TableHead>
        <TableHead className='w-[150px]'>Notes</TableHead>
        <TableHead className="w-[100px] text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {payments.map((payment) => (
        <TableRow key={payment.id}>
          <TableCell className="font-medium">{payment.timestamp?.toDateString()}</TableCell>
          <TableCell>{payment.method?.paymentMethodName}</TableCell>
          <TableCell>{payment.detail}</TableCell>
          <TableCell className="text-right">{payment.amount?.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">{
          payments.map(
            (payment) => (payment.amount || 0)
          ).reduce(
            (a, b) => (a + b)
          ).toLocaleString(
            'en-US',
            {style: 'currency', currency: 'USD'}
          )
        }</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
}

export default PaymentsComponent