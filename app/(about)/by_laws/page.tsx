import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export default function ByLawsPage({}: Props) {
  redirect('/about')
  return (
    <div>ByLawsPage</div>
  )
}