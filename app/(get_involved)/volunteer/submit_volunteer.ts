'use server'
import * as z from 'zod'
import { formSchema } from './form_schema'
import { createParticipant, createTeam } from '@/lib/controllers/volunteers'

export async function submitVolunteer(data: z.infer<typeof formSchema>) {
  const teamData = {
    'first_name': data.team_lead.firstName,
    'last_name': data.team_lead.lastName,
    'email': data.email,
    'phone': data.phone,
    'lead_age': data.team_lead.age,
    'lead_gender': data.team_lead.gender,
    'submitted_at': new Date(),
    'team': data.team || `${data.team_lead.firstName} ${data.team_lead.lastName}`,
    'team_size': data.teamSize,
    'event': data.event,
  };
  try {
    const team = await createTeam(teamData);
    const participants = data.participants.map(async (participant: any) => createParticipant({
      'TeamId': team.id,
      'first_name': participant.firstName,
      'last_name': participant.lastName,
      'age': participant.age,
      'gender': participant.gender,
    }));
    await Promise.all(participants);
    return {
      message: 'Thank you for your interest in volunteering with us! We will be in touch soon.',
      team: team
    };
  } catch (error) {
    return {
      'message': 'There was an error submitting your Team Information. Please try again later or contact a PSOGH member.',
      'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
    }
  }
}
