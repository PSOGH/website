'use client';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { boothFormSchema } from './form_schema';
import { submitBooth } from './submit_booth';
import { toast } from 'sonner';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {}

const businesses: string[] = [
  'Food Booth',
  'Real Estate',
  'Jwellery Store',
  'Clothing Store',
  'Insurance',
  'Non Profit',
  'Art',
  'Skin Care Products',
  'Candle Store',
  'Others'
]

function BoothFormElementComponent({}: Props) {
  const [file, setFile] = useState<File>();
  const form = useForm<z.infer<typeof boothFormSchema>>({
    resolver: zodResolver(boothFormSchema),
    defaultValues: {
    }
  })

  async function onSubmit(values: z.infer<typeof boothFormSchema>) {
    console.log('onSubmit', values)

    const result = await submitBooth(values);
    if(!('error' in result)) {
      toast.success('Booth request submitted successfully!');
      toast.success(result.message);
      form.reset();
    } else {
      toast.error('Error submitting booth request');
      toast.error(result.message);
      toast.error(JSON.stringify(result.error));
      console.log('Error submitting booth request', result.error)
    }
  }

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        const base64value = reader.result as string;
        console.log('base64value', base64value)
        form.setValue('booth_logo_file', base64value)
      },
      false,
    );
    reader.readAsDataURL(file as File);
  }, [file])

  function onLogoFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0])
    if (event.target.files?.length) {
      form.setValue('booth_logo_filename', event.target.value)
    } else {
      form.setValue('booth_logo_file', '')
      form.setValue('booth_logo_filename', '')
    }
  }

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit, console.log)} className='space-y-8'>
      <div className='grid grid-cols-6 gap-4'>

        {/* Business Name */}
        <FormField
          control={form.control}
          name='business_name'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel>Business Name</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>This is the name that will be used in our records, allotment and any published information containing booth details.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Person */}
        <FormField
          control={form.control}
          name='business_owner'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel>Contact Person</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Please provide the name of the contact person for all communications.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Email */}
        <FormField
          control={form.control}
          name='contact_email'
          render={({ field }) => (
            <FormItem
              className='col-span-3 md:col-span-2 md:col-start-2'
            >
              <FormLabel>Contact Person Email</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Please provide an email ID for all communication.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Phone */}
        <FormField
          control={form.control}
          name='contact_phone'
          render={({ field }) => (
            <FormItem
              className='col-span-3 md:col-span-2'
            >
              <FormLabel>Contact Person Phone</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Please provide an phone number for all communication.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Booth Type */}
        <FormField
          control={form.control}
          name='booth_type'
          render={({ field }) => (
            <FormItem
              className='col-span-3 md:col-span-2 md:col-start-2'
            >
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    businesses.map((item, index) => {
                      return <SelectItem key={index} value={item}>{item}</SelectItem>
                    })
                  }
                  <SelectItem key={'other'} value='Other'>Other</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Business Type</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {businesses.includes(form.watch('booth_type')) ? null :         <FormField
          control={form.control}
          name='booth_type'
          render={({ field }) => (
            <FormItem
              className='col-span-3 md:col-span-2'
            >
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Other category description</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        }
        {/* Message */}
        <FormField
          control={form.control}
          name='booth_introduction'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel>Introduction</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormDescription>Provide a brief introduction about your business.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Logo for Business */}
        <FormField
          control={form.control}
          name='booth_logo_filename'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel>Company Logo</FormLabel>
              <FormControl><Input onChange={onLogoFileChange} value={field.value} type='file' accept='image/*' /></FormControl>
              <FormDescription>Upload your company logo. We will use it in all our communication and media.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      </div>
      <div className='flex justify-end'>
        <Button variant='outline' onClick={() => form.reset()} className='mx-2'>Reset</Button>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  </Form>
}

export default BoothFormElementComponent