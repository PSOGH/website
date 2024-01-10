import * as z from 'zod'

const individualParticipantFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  age: z.coerce.number().int().min(1).max(100),
  gender: z.enum(['male', 'female', 'n/a'])
})

export const formSchema = z.object({
  team_lead: individualParticipantFormSchema,
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  team: z.string().optional(),
  teamSize: z.coerce.number().int().min(1).max(25),
  event: z.string(),
  participants: z.array(individualParticipantFormSchema),
  comments: z.string().max(500).optional(),
})

