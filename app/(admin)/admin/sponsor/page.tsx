import React from 'react'

import { getSponsorsFull } from '@/lib/drizzle/controllers/sponsor';
import { SponsorFull } from '@/lib/drizzle/models/sponsor'

import SponsorTableComponent from './sponsor_table'
import { getPaymentMethods } from '@/lib/drizzle/controllers/payment';

type Props = {}

async function SponsorListPage({}: Props) {
  const paymentMethods = (await getPaymentMethods()).map((paymentMethod) => ({key: paymentMethod.id, value: paymentMethod.paymentMethodName || ""}));
  const sponsors = await getSponsorsFull();
  return <SponsorTableComponent sponsors={sponsors === null ? [] : sponsors} paymentMethods={paymentMethods} />
}

export default SponsorListPage