import { NextRequest, NextResponse } from 'next/server'

// import { createParticipant, createTeam, getTeams } from '@/lib/controllers2/volunteers';

// export async function GET(request: NextRequest) {
//   return NextResponse.json({
//     message: 'This is the api endpoint for volunteer submissions.',
//     data: await getTeams(),
//   }, {status: 200});
// }

// export async function POST(request: NextRequest) {
//   const data = await request.json();
//   const teamData = {
//     'first_name': data.team_lead.firstName,
//     'last_name': data.team_lead.lastName,
//     'email': data.email,
//     'phone': data.phone,
//     'lead_age': data.team_lead.age,
//     'lead_gender': data.team_lead.gender,
//     'submitted_at': data.submitted_at,
//     'team': data.team,
//     'team_size': data.teamSize,
//     'event': data.event,
//   };
//   try {
//     const team = await createTeam(teamData);
//     const teamLead = await createParticipant({
//       'TeamId': team.id,
//       'first_name': teamData.first_name,
//       'last_name': teamData.last_name,
//       'age': teamData.lead_age,
//       'gender': teamData.lead_gender,
//     });

//     console.log(team)
//     console.log(teamLead)

//     data.participants.map(async (participant: any) => {
//       createParticipant({
//         'TeamId': teamLead.TeamId,
//         'first_name': participant.firstName,
//         'last_name': participant.lastName,
//         'age': participant.age,
//         'gender': participant.gender,
//       });
//     });

//     return NextResponse.json({
//       message: 'Thank you for your interest in volunteering with us! We will be in touch soon.',
//       team: team
//     }, {status: 200});
//   } catch (error) {
//     if(!(typeof error === 'object')) return NextResponse.json({
//       message: 'There was an error submitting your information. Please try again later.',
//       error: 'Unknown Error',
//     }, {status: 500})

//     if((error == null)) return NextResponse.json({
//       message: 'There was an error submitting your information. Please try again later.',
//       error: 'Unknown Error',
//     }, {status: 500})

//     if(!('message' in error)) return NextResponse.json({
//       message: 'There was an error submitting your information. Please try again later.',
//       error: 'Unknown Error',
//     }, {status: 500})

//     const error_text = ('message' in error ? error.message : error) as string
//     if (error_text.includes('duplicate key value violates unique constraint') && error_text.includes('team_team_key')) {
//       return NextResponse.json({
//         message: 'This team name has already been submitted. Please choose another team name.',
//         error: 'There was an error submitting your information. Please try again later.',
//       }, {status: 500});
//     }
//     return NextResponse.json({
//       message: 'There was an error submitting your information. Please try again later.',
//       error: error?.message?.toString() || error,
//     }, {status: 500});
//   }
// }
