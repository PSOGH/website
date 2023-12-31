import React from 'react'
import CarousalComponent from '@/components/carousal'

type Props = {
  params: {galleryId: string}
}

type item = {
  type: 'image' | 'video',
  src: string,
}
type gallery = {
  title: string,
  description: string,
  items: item[]
}
type galleries = {
  [key: string]: gallery
}

const sampleGalleries: galleries = {
  va_23: {
    title: 'Vaisakhi Mela 2023',
    description: 'Photos and Videos from the Vaisakhi Mela on 20 April, 2023.',
    items: [
      {
        type: 'image',
        src: 'logo.png',
      },
      {
        type: 'image',
        src: 'logo.png',
      },
      {
        type: 'image',
        src: 'logo.png',
      },
    ]
  },
  sponsors_va_23: {
    title: 'Sponsors for Vaisakhi Mela 2023',
    description: 'Sponsorship promotions for Vaisakhi Mela on 20 April, 2023.',
    items: [
      {
        type: 'image',
        src: 'logo.png',
      },
      {
        type: 'image',
        src: 'logo.png',
      },
      {
        type: 'image',
        src: 'logo.png',
      },
    ]
  },
  historic: {
    title: 'Historic Photos and Videos',
    description: 'Photos and Videos for past events before 2022.',
    items: [
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGLWR0S09XSEZzS0E.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGLXlNR3pGNDZjNkU.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM01Qa2d6aS15RVE.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM0hXa1NtU0hVQmc.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM19zSEpSQzBXZjg.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM1ZVcFpIZnJ0bFk.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM1hDdW5YaDFBRnM.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM2ZxYVNNS1RtNk0.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM3VjY09BRlJicW8.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGTEpXbFNnZ0FCWTQ.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGTFRib1V2S3hieFU.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGLWR0S09XSEZzS0E.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGLXlNR3pGNDZjNkU.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM01Qa2d6aS15RVE.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM0hXa1NtU0hVQmc.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM19zSEpSQzBXZjg.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM1ZVcFpIZnJ0bFk.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM1hDdW5YaDFBRnM.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM2ZxYVNNS1RtNk0.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGM3VjY09BRlJicW8.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGTEpXbFNnZ0FCWTQ.jpg',
      },
      {
        type: 'image',
        src: 'historic_pics/0B-D3UtBBXDUGTFRib1V2S3hieFU.jpg',
      }
    ]
  }
}
export default function GalleryPage({
  params: {galleryId}
}: Props) {
  const galleryDetails: gallery = sampleGalleries[galleryId]
  const {title, description, items} = galleryDetails
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {description}
    </p>
    <CarousalComponent items={items} />
 </>
}