import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export default function BoothPage({}: Props) {
  redirect('/booths')
  return (
    <div>BoothPage</div>
  )
}