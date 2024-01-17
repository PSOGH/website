import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export default function DonatePage({}: Props) {
  redirect('/sponsor')
  return (
    <div>DonatePage</div>
  )
}