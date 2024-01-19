'use client'
import React from 'react'
import { paymentFormSchema } from './form_schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { format } from "date-fns"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { CalendarIcon } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import * as z from 'zod'
import { toast } from 'sonner';
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { submitPayment } from './submit_payment'

type Props = {
  recievable: number,
  paymentMethods: {key: number, value: string}[]
}

function AddPaymentForm({ recievable, paymentMethods }: Props) {
  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      recievable: recievable,
      paymentMethod: 1,
    }
  })

  async function onSubmit(values: z.infer<typeof paymentFormSchema>) {
    console.log(values)
    const result = await submitPayment(values);
    if(result && !('error' in result)) {
      toast.success('Sponsorship pledge submitted successfully')
      toast.success(result.message)
      form.reset();
    } else {
      toast.error('Failed to register sponsorship payment')
      if(result) {
        toast.error(result.message)
        toast.error(result.error || "")
      } else {
        toast.error('Unknown error')
      }
    }
  }

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-col-4 gap-3 min-w-full'>
      <FormField
        control={form.control}
        name='paymentMethod'
        render={({ field }) => (
          <FormItem className='col-start-1'>
            <FormLabel>Payment Method</FormLabel>
            <Select onValueChange={field.onChange} value={field.value.toString()}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>{
                paymentMethods.map(({key, value}) => (
                  <SelectItem key={key} value={key.toString()}>{value}</SelectItem>
                ))
              }</SelectContent>
            </Select>
            <FormDescription>Payment method used</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='paymentAmount'
        render={({ field }) => (
          <FormItem className='col-start-2'>
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <Input {...field} type='number' />
            </FormControl>
            <FormDescription>Amount paid</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='paymentDate'
        render={({ field }) => (
          <FormItem className='col-start-3'>
            <FormLabel>Date</FormLabel>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <FormDescription>Date of payment</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='paymentNotes'
        render={({ field }) => (
          <FormItem className='col-start-4'>
            <FormLabel>Notes</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>Notes about payment</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit'>Submit</Button>
    </form>
  </Form>

}

export default AddPaymentForm