import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export default function AboutPage({}: Props) {
  redirect('/mission')
  return (
    <div>AboutPage</div>
  )
}