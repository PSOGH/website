import React from 'react'
import SponsorDetailsComponent from './sponsor_detail'
import { Sponsor } from '@/lib/models/sponsors'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type Props = {
  sponsors: Sponsor[]
}

function SponsorTableComponent({
  sponsors
}: Props) {
  const grand_sponsors = sponsors.filter((sponsor) => sponsor.sponsorship_level_code === 'va24_grand')
  const platinum_sponsors = sponsors.filter((sponsor) => sponsor.sponsorship_level_code === 'va24_platinum')
  const diamond_sponsors = sponsors.filter((sponsor) => sponsor.sponsorship_level_code === 'va24_diamond')
  const gold_sponsors = sponsors.filter((sponsor) => sponsor.sponsorship_level_code === 'va24_gold')
  const silver_sponsors = sponsors.filter((sponsor) => sponsor.sponsorship_level_code === 'va24_silver')
  const bronze_sponsors = sponsors.filter((sponsor) => sponsor.sponsorship_level_code === 'va24_bronze')
  const sponsor_pairs = [
    {sponsorship_level: 'All Sponsors Vaisakhi 2024', sponsors: [...grand_sponsors, ...platinum_sponsors, ...diamond_sponsors, ...gold_sponsors, ...silver_sponsors, ...bronze_sponsors]},
    {sponsorship_level: 'Grand Sponsor', sponsors: grand_sponsors},
    {sponsorship_level: 'Platinum Sponsor', sponsors: platinum_sponsors},
    {sponsorship_level: 'Diamond Sponsor', sponsors: diamond_sponsors},
    {sponsorship_level: 'Gold Sponsor', sponsors: gold_sponsors},
    {sponsorship_level: 'Silver Sponsor', sponsors: silver_sponsors},
    {sponsorship_level: 'Bronze Sponsor', sponsors: bronze_sponsors},
  ]
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Sponsor List
    </h2>
    <Accordion type="single" collapsible>
      {sponsor_pairs.map((sponsor_pair) => {
        return <AccordionItem key={sponsor_pair.sponsorship_level} value={sponsor_pair.sponsorship_level}>
          <AccordionTrigger>{sponsor_pair.sponsorship_level}</AccordionTrigger>
          <AccordionContent>
            {sponsor_pair.sponsors.map((sponsor) => {
              return <SponsorDetailsComponent key={sponsor.id} sponsor={sponsor} />
            })}
          </AccordionContent>
        </AccordionItem>
      })}
    </Accordion>
  </>
}

export default SponsorTableComponent