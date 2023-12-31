import React from 'react'
import VolunteerFormComponent from './volunteer_form'

type Props = {}

export default function VolunteerPage({}: Props) {
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Volunteer with Us
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Welcome to the Punjabi Society of Greater Houston&apos;'s volunteer page! Our society is dedicated to promoting and preserving Punjabi culture and heritage within the Greater Houston. As a volunteer with our society, you will have the opportunity to help us achieve our goals and contribute to the community.
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Our society conducts a range of activities throughout the year, including cultural events, community service projects, and educational programs. We rely on the support and dedication of our volunteers to make these events a success. Some of the volunteer opportunities available include event planning and coordination, marketing and promotion, setup and cleanup, and more.
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Volunteering with our society is a great way to give back to the community, meet new people, and learn more about Punjabi culture and heritage. In addition, volunteering can help you gain valuable skills and experience that can be applied in your personal and professional life.
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      To become a volunteer with our society, you must be at least 18 years old and willing to commit your time and energy to our activities. We welcome volunteers from all backgrounds and levels of experience. Whether you are a seasoned volunteer or new to volunteering, we have opportunities for you.
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      If you are interested in becoming a volunteer, please fill out our online volunteer application form. Our volunteer coordinator will contact you to discuss available opportunities and next steps. Thank you for considering volunteering with the Punjabi Society of Greater Houston. We look forward to working with you!
    </p>
    <div className='w-4/5 md:w-3/4 mx-auto mt-4 px-4 py-4 rounded-lg border-solid shadow border-2'>
      <VolunteerFormComponent />
    </div>
  </>
}