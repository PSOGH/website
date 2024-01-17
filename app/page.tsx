import { redirect } from 'next/navigation'

type Props = {}

export default function LandingPage(props: Props) {
  redirect('/home')
}
