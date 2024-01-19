'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

import { sponsorFormSchema } from './form_schema';
import { submitSponsor } from './submit_sponsor';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  sponsor_types: {key: number, value: string}[]
  sponsorshipLevels: {key: number, value: string}[]
}

function SponsorFormElementComponent({ sponsor_types, sponsorshipLevels }: Props) {
  const [file, setFile] = useState<File>();
  const form = useForm<z.infer<typeof sponsorFormSchema>>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      sponsor_booth: false,
    }
  })

  async function onSubmit(values: z.infer<typeof sponsorFormSchema>) {
    console.log('values', values)

    const result = await submitSponsor(values);
    if(result && !('error' in result)) {
      toast.success('Sponsorship pledge submitted successfully')
      toast.success(result.message)
      form.reset();
    } else {
      toast.error('Failed to submit sponsorship pledge')
      if(result) {
        toast.error(result.message)
      } else {
        toast.error('Unknown error')
      }
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
        form.setValue('sponsor_logo_file', base64value)
      },
      false,
    );
    reader.readAsDataURL(file as File);
  }, [file])

  function onLogoFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files?.[0])
    if (event.target.files?.length) {
      form.setValue('sponsor_logo_filename', event.target.value)
    } else {
      form.setValue('sponsor_logo_file', '')
      form.setValue('sponsor_logo_filename', '')
    }
  }

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit, console.log)} className='space-y-8'>
      <div className='grid grid-cols-6 gap-4'>

        {/* Sponsorship Level - Radio Group */}
        <FormField
          control={form.control}
          name='sponsorship_level_code'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel className=''>Sponsorship Level</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={`${field.value}`}
                >
                  {sponsorshipLevels.map(({key, value}) => (
                    <div className='flex items-center space-x-2' key={`radio_${key}`}>
                      <RadioGroupItem
                        key={key}
                        value={`${key}`}
                        id={`${key}`}
                      />
                      <Label htmlFor={`${key}`} className=''>{value}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              {/* <FormDescription></FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Sponsor Name */}
        <FormField
          control={form.control}
          name='sponsor_name'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-3 md:col-start-2'
            >
              <FormLabel>Sponsor Title</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>This is the name that will be used in all communication and broadcast. You can enter your company name in case of corporate sponsorship.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Sponsor Type */}
        <FormField
          control={form.control}
          name={`sponsor_type`}
          render={({ field }) => (
            <FormItem
            className='col-span-1'
            >
              <Select onValueChange={field.onChange}>
                <Label>Sponsor Type</Label>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sponsor_types.map(({key, value}) => (
                    <SelectItem key={key} value={key.toString()}>{value}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* <FormDescription>Sponsor Type</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Name */}
        <FormField
          control={form.control}
          name='contact_name'
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

        {/* Contact Address */}
        <FormField
          control={form.control}
          name='contact_address'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel>Contact Address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Street Address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Address 2 */}
        <FormField
          control={form.control}
          name='contact_address2'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Street Address 2</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact City */}
        <FormField
          control={form.control}
          name='contact_city'
          render={({ field }) => (
            <FormItem
              className='col-span-3 md:col-span-2 md:col-start-2'
            >
              {/* <FormLabel></FormLabel> */}
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>City</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact State */}
        <FormField
          control={form.control}
          name='contact_state'
          render={({ field }) => (
            <FormItem
              className='col-span-1'
            >
              {/* <FormLabel></FormLabel> */}
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>State</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Zip */}
        <FormField
          control={form.control}
          name='contact_zip'
          render={({ field }) => (
            <FormItem
              className='col-span-2 md:col-span-1'
            >
              {/* <FormLabel></FormLabel> */}
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Zip</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company Logo */}
        <FormField
          control={form.control}
          name='sponsor_logo_filename'
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

        {/* Sponsor Booth */}
        <FormField
          control={form.control}
          name='sponsor_booth'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormControl className='mr-2'><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
              <FormLabel>Check if you need a booth to showcase your product in the mela</FormLabel>
              {
                field.value ? <FormDescription>One of the booth organisers with connect with you on how to set a booth for you.</FormDescription> : null
              }
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Introduction */}
        <FormField
          control={form.control}
          name='sponsor_introduction'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-4 md:col-start-2'
            >
              <FormLabel>Introduction</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormDescription>Provide a brief introduction about yourself.</FormDescription>
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

export default SponsorFormElementComponent