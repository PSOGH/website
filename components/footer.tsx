import React from 'react'

type Props = {}

export default function FooterComponent({}: Props) {
  return <>
    <div className="min-h-[150px] bg-indigo-600 w-full text-gray-50 bottom-0 mt-auto">
      <div className='lg:max-w-7xl md:max-w-5xl mx-auto px-4 sm:px-6 xl:px-0 pt-4 min-h-[200px]'>
        <div className='lg:max-w-6xl md:max-w-4xl mx-auto'>
          {/* <div className='text-xl font-bold'>Punjabi Society of Greater Houston</div>
          <div className='text-sm'>Houston, TX</div>
          <div className='text-sm'></div> */}
          <div className='grid grid-cols-3 md:grid-cols-7 gap-2'>
            {/* <div className='md:col-start-2 md:col-span-2'>
              <div className='text-xl font-bold'>Mission</div>
              <div className='text-sm'></div>
              <div className='text-sm'>Our mission is to be the best!</div>
            </div> */}
            <div className='md:col-span-2 md:col-start-2'>
              <div className='text-xl font-bold'>Get Involved</div>
              <div className='text-sm'></div>
              <div className='text-sm'><a href='/volunteer'>Volunteer</a></div>
              <div className='text-sm'><a href='/events'>Events</a></div>
              <div className='text-sm'><a href='/booths'>Booths</a></div>
              <div className='text-sm'><a href='/sponsor'>Sponsorship</a></div>
            </div>
            <div className='md:col-span-2'>
              <div className='text-xl font-bold'>About Us</div>
              <div className='text-sm'></div>
              <div className='text-sm'><a href='/about'>About Us</a></div>
              <div className='text-sm'><a href='/mission'>Mission & Vision</a></div>
              <div className='text-sm'><a href='/by_laws'>By-Laws</a></div>
            </div>
            <div className='md:col-span-2'>
              <div className='text-xl font-bold'>Contact Us</div>
              <div className='text-sm'></div>
              <div className='text-sm'><a href='/contact_us'>Contact Us</a></div>
              <div className='text-sm'>Address</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}