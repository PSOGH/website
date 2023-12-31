import { NextRequest, NextResponse } from 'next/server'

import { createParticipant, createTeam, getTeams } from '@/lib/controllers/volunteers';

// export async function GET(request: NextRequest) {
//   return NextResponse.json({
//     message: 'This is the api endpoint for volunteer submissions.',
//     data: await getTeams(),
//   }, {status: 200});
// }

export async function POST(request: NextRequest) {
  console.log('In POST')
  console.log(request)
  const data = await request.json();
  // console.log(body)
  // const data = JSON.parse(body);
  const teamData = {
    'first_name': data.team_lead.firstName,
    'last_name': data.team_lead.lastName,
    'email': data.email,
    'phone': data.phone,
    'lead_age': data.team_lead.age,
    'lead_gender': data.team_lead.gender,
    'submitted_at': data.submitted_at,
    'team': data.team,
    'team_size': data.teamSize,
    'event': data.event,
  };
  console.log(data)
  console.log('In POST for teamData')
  console.log(teamData)
  try {
    const team = await createTeam(teamData);
    data.participants.map(async (participant: any) => {
      createParticipant({
        'TeamId': team.id,
        'first_name': participant.firstName,
        'last_name': participant.lastName,
        'age': participant.age,
        'gender': participant.gender,
      });
    });
    console.log(team);
    return NextResponse.json({
      message: 'Thank you for your interest in volunteering with us! We will be in touch soon.',
      team: team
    }, {status: 200});
  } catch (error) {
    console.log(error);
    const error_text = error?.message?.toString() || error
    console.log(error_text)
    if (error_text.includes('duplicate key value violates unique constraint') && error_text.includes('team_team_key')) {
      return NextResponse.json({
        message: 'This team name has already been submitted. Please choose another team name.',
        error: 'There was an error submitting your information. Please try again later.',
      }, {status: 500});
    }
    return NextResponse.json({
      message: 'There was an error submitting your information. Please try again later.',
      error: error?.message?.toString() || error,
    }, {status: 500});
  }
}
