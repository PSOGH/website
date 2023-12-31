import ImageKit from '@/components/imagekit'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

export default function MissionPage({}: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>About Us: Mission & Vision</CardTitle>
      <CardDescription>Punjabi Society of Greater Houston</CardDescription>
    </CardHeader>
    <CardContent>
      <ImageKit src='photo_2023-03-18_19-07-32.jpg' width={600} className='w-3/4 mx-auto' alt='Punjabi Society of Greater Houston' />
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome to the Punjabi Society of Greater Houston! Our society was founded with the purpose of bringing Punjabi people together and giving back to our community. We believe in strengthening the bonds of Punjab, Punjabi culture, and the Punjabi way of living through various initiatives.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our society aims to encourage children to speak Punjabi language and keep Punjabi culture alive for generations to come. We also take care of the interests of Punjabis in Greater Houston and provide necessary remedial measures during difficult times.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We showcase Punjabi philosophy, poetry, drama, dance, music, movies, cuisine, spirituality, education, artistry, and architecture to expand and strengthen our culture.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We organize community service, cultural programs, and learning programs to provide a platform for Punjabis to engage with each other and give back to our community. Our society also provides a networking platform for community members to share their experiences and grow through learning and knowledge sharing.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Join us to celebrate our rich Punjabi culture, strengthen our community, and make a positive impact on the Greater Houston. To get involved, please contact us through our website or social media channels.
      </p>
    </CardContent>
  </Card>
}