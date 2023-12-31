'use server'
import { headers } from 'next/headers'

export async function submitVolunteer(data: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV==="development"?"http":"https"
  console.log('In submitVolunteer')
  console.log(data)
  const response = await fetch(`${protocal}://${host}/api/volunteer`, {method: 'POST', body: data})
  console.log('In submitVolunteer2')
  console.log(response)
  const result = await response.json()
  console.log('In submitVolunteer3')
  console.log(result)
  return JSON.stringify(result)
}
