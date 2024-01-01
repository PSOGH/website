'use client'
import moment from 'moment'
import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { submitVolunteer } from './submit_volunteer'


const Events: {key: string, value: string}[] = [
  { key: 'va23_bhangra', value: 'Bhangra (Team)' },
  { key: 'va23_style_mela', value: 'Singh and Kaur Style Mela' },
  { key: 'va23_gidha', value: 'Gidha' },
  { key: 'va23_singing', value: 'Singing' },
  { key: 'va23_turban', value: 'Turban Tying Competition' },
  { key: 'va23_speech', value: 'Speech' },
  { key: 'va23_dance', value: 'Punjabi Dance' },
  { key: 'va23_others', value: 'Other Mela Item' }
]


const individualParticipantFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  age: z.coerce.number().int().min(1).max(100),
  gender: z.enum(['male', 'female', 'n/a'])
})

const formSchema = z.object({
  team_lead: individualParticipantFormSchema,
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  team: z.string().optional(),
  teamSize: z.coerce.number().int().min(1).max(25),
  event: z.string(),
  participants: z.array(individualParticipantFormSchema),
  submissionDate: z.coerce.date().optional(),
  comments: z.string().max(500).optional(),
})

type Props = {}

export default function VolunteerFormComponent({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_lead: {
        firstName: '',
        lastName: '',
        age: 18,
        gender: 'male',
      },
      teamSize: 1,
      // submissionDate: moment().format('YYYY-MM-DD'),
      participants: [],
      email: '',
      phone: '',
      team: '',
      event: '',
      comments: '',
    },
  })


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = JSON.parse(await submitVolunteer(JSON.stringify(values)));
    if (!('error' in result)) {
      toast.success('Volunteer form submitted successfully')
      toast.success(result.message)
      form.reset()
    } else {
      toast.error('Failed to submit volunteer form')
      toast.error(result.message)
    }
  
  }

return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
      <div className='grid grid-cols-6 gap-4'>
        {/* First Name */}
        <FormField
          control={form.control}
          name='team_lead.firstName'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-3'
            >
              <FormLabel>Name of the Team Lead / Individual Participant Volunteer</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>First Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name='team_lead.lastName'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-3'
            >
              <FormLabel>&nbsp;</FormLabel>
              {/* <FormLabel>Last Name</FormLabel> */}
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Last Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-3'
            >
              <FormLabel>Contact Details</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-3'
            >
              <FormLabel>&nbsp;</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Phone number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Team Name */}
        <FormField
          control={form.control}
          name='team'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-3'
            >
              <FormLabel>Team Details</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormDescription>Team Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Team Size */}
        <FormField
          control={form.control}
          name='teamSize'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-1'
            >
              <FormLabel>&nbsp;</FormLabel>
              <FormControl><Input type='number' min={1} max={25} {...field} /></FormControl>
              <FormDescription>Team Size</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event */}
        <FormField
          control={form.control}
          name='event'
          render={({ field }) => (
            <FormItem
              className='col-span-6 md:col-span-2'
            >
              <FormLabel>&nbsp;</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an event' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Events.map(({ key, value }) => <SelectItem key={key} value={key}>{value}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormDescription>Event</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Team Members */}
        <p className="leading-7 col-span-2 col-start-1 my-auto">
          {(form.getValues('team_lead.firstName') || '') + ' ' + (form.getValues('team_lead.lastName') || '')}
        </p>
        {/* Gender */}
        <FormField
          control={form.control}
          name={`team_lead.gender`}
          render={({ field }) => (
            <FormItem
              className='col-span-2 col-start-3'
            >
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key='male' value='male'>Male</SelectItem>
                  <SelectItem key='female' value='female'>Female</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Gender</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Age */}
        <FormField
          control={form.control}
          name={`team_lead.age`}
          render={({ field }) => (
            <FormItem
              className='col-span-2'
            >
              <FormControl><Input type='number' min={0} max={110} {...field} /></FormControl>
              <FormDescription>Age</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {
          [
            ...Array(form?.getValues('teamSize') as number - 1)  // - 0 to convert string to number
          ].map(
            (_, idx) => {
              return <div className='w-7/8 col-span-8 mt-2' key={`participant.${idx}`}>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {`Team Member ${idx + 1}`}
                </h4>
                <div className='grid grid-cols-6 gap-4'>
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name={`participants.${idx}.firstName`}
                    key={`participants.${idx}.firstName`}
                    render={({ field }) => (
                      <FormItem
                        className='col-span-2'
                      >
                        <FormControl><Input {...field} /></FormControl>
                        <FormDescription>First Name</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name={`participants.${idx}.lastName`}
                    key={`participants.${idx}.lastName`}
                    render={({ field }) => (
                      <FormItem
                        className='col-span-2'
                      >
                        <FormControl><Input {...field} /></FormControl>
                        <FormDescription>Last Name</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Gender */}
                  <FormField
                    control={form.control}
                    name={`participants.${idx}.gender`}
                    key={`participants.${idx}.gender`}
                    render={({ field }) => (
                      <FormItem
                        className='col-span-1'
                      >
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem key='male' value='male'>Male</SelectItem>
                            <SelectItem key='female' value='female'>Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>Gender</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Age */}
                  <FormField
                    control={form.control}
                    name={`participants.${idx}.age`}
                    key={`participants.${idx}.age`}
                    render={({ field }) => (
                      <FormItem
                        className='col-span-6 md:col-span-1'
                      >
                        <FormControl><Input type='number' defaultValue={18} min={0} max={110} {...field} /></FormControl>
                        <FormDescription>Age</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </div>
              </div>
            }
          )
        }
      </div>
      <div className='flex justify-end'>
        <FormField
          control={form.control}
          name={`submissionDate`}
          key={`submissionDate`}
          render={({ field }) => (
            <FormItem
              className='col-span-2'
            >
              <FormControl><Input type='hidden' {...field} value={moment().format('YYYY-MM-DD')} /></FormControl>
            </FormItem>
          )}
        />
        <Button variant='outline' onClick={() => form.reset()}>Reset</Button>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  </Form>
}