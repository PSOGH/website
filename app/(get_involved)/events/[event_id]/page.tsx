import React from 'react'
import Vaisakhi2024 from './va_24'

type Props = {
  params: {
    event_id: string
  }
}

export default function EventDetailsPage({
  params: { event_id }
}: Props) {
  if (event_id === 'va_24') {
    return <Vaisakhi2024 />
  }
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {event_id == 'va_23' ? 'Grand Vaisakhi Mela 2023' : 'Event Not Found'}
    </h2>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" id='Sponsors'>
      Sponsors
    </h4>
    <div className='w-full mx-auto mt-4 px-4 py-4 rounded-lg border-solid shadow border-2'>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" id='Highlights'>
        Highlight Reel
      </h4>
      <div className='w-4/5 mx-auto my-1'>
        <video
          width="100%"
          height="100%"
          src="https://www.dropbox.com/scl/fi/7qv3ezju0vgvti8wz9wbf/Vaisakhi23-highlights-Reel.mov?rlkey=5u7zvd4g9vcho0jlhknogjmjp&save_as=true&save_as_action=MP4&raw=1"
          poster="https://ucb37978fb13d70767da9635bfc9.previews.dropboxusercontent.com/p/thumb/ACIK5qsHQvqbHNciXIN1dvJgZ7Rh4wrKxr3dJh7sU6Jelf2yi7Qq7UlYVWIH3mvl-VC0-O1ZKYBWwoMJMchNOlWPtPYiOgOzkUz7dsy_ABXq6MStHFcuN4PuHLMI0dI94eYG6rhUm0L9sCXqid4Y2XdU759ZXmnKyRgMRT583T0plUvpXVsbaZsooURaHZe9srreN-D1LxGc2X51G07uiFDALxrLNVxRRDsYuR9n5kcaukPvaXRYZgl27iqLKW1yC1k1TVFxYvbGzR7FVhUCmgveIY8cT3E38-EjL3YwIEwdLg/p.jpeg?size=1280x960&amp;size_mode=2&amp;psid=6a776d94-1093-4b54-83e7-ecf67002cb2f"
          controls
        ></video>
      </div>
    </div>
    <div className='w-full mx-auto mt-4 px-4 py-4 rounded-lg border-solid shadow border-2'>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" id='Reel'>
      Event Reel
      </h4>
      <div className='w-4/5 mx-auto my-1'>
        <video width="100%" height="100%" src="https://www.dropbox.com/s/5ser508x0gvvv7h/Vaisakhi%202023%20full%20video.mp4?raw=1" controls>
        </video>
      </div>
    </div>
  </>
}