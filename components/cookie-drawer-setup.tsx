'use server'
import React from 'react'
import { cookies } from 'next/headers'
import CookieDrawerComponent from '@/components/cookie-drawer'

type Props = {}

export default async function CookieDrawerSetupComponent({}: Props) {
  const cookieStore = await cookies()
  const agreed = cookieStore.has('agreed-to-cookies') && (cookieStore.get('agreed-to-cookies')?.value == 'true')
  
  if (agreed) {
    return <></>
  }
  return <></>
  async function agree_to_cookies() {
    'use server'
    ;(await cookies()).set('agreed-to-cookies', 'true')
  }
  return <CookieDrawerComponent agree_to_cookies={agree_to_cookies} />
}
