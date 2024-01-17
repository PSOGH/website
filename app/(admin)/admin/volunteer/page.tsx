import React from 'react'
import { getTeams } from '@/lib/controllers/volunteers'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

async function VolunteerListPage({}: Props) {
  const teams = await getTeams()
  return <Card className='w-5/6'>
    <CardHeader>
      <CardTitle>
        Volunteer List
      </CardTitle>
      <CardDescription>
        Vaisakhi Mela 2024 Volunteer Registration List
      </CardDescription>
      <CardContent>
        
      </CardContent>
    </CardHeader>
  </Card>
}

export default VolunteerListPage