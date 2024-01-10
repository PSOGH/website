import React from 'react'
import RowComponent from './Row'
import TitleRowComponent from './titleRow'
import SponsorshipFormComponent from './sponsorship_form'

type Props = {}
const eventCode: string = 'va24'

export default async function SponsorPage({}: Props) {
  // return <iframe src="https://form.jotform.com/houstonpunjabi/PSGHsponsorship-pledge-form" width="100%" height="100%" className="min-h-[800px] h-max"></iframe>
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Sponsorship for Vaisakhi Mela 2024
    </h2>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Sponsorship Packages
    </h3>
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full table-fixed">
        <thead>
          <TitleRowComponent item_title="Sponsorship Benefit" sponsor_packages={['Grand Sponsor', 'Platinum Sponsor', 'Diamond Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor']} />
        </thead>
        <tbody>
          <RowComponent value="Introduction of YOU as a Brand at all media platforms" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Award & Sponsor Recognition" checks={['yes:by Chief Official Host', 'yes:by Chief Official Host', 'yes:by Chief Official Host', 'yes', 'yes', 'no']} />
          <RowComponent value="Seating for you and your guests" checks={['yes:16 VIP seats (or 2 boxes)', 'yes:8 VIP seats (or 1 box)', 'yes:5 VIP seats', 'yes:4 VIP seats', 'yes:2 VIP seats', 'yes:2 Premium seats']} />
          <RowComponent value="Highlight spot to display business promotional material" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Logo & Brand presence on website and all social media platform" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Complimentary food galore" checks={['yes:35 food coupons', 'yes:18 food coupons', 'yes:10 food coupons', 'yes:10 food coupons', 'yes:4 food coupons', 'yes:2 food coupons']} />
          <RowComponent value="Speaking opportunity during the program" checks={['yes', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Recognition as host committee sponsor" checks={['yes', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Recognition in digital print media" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Recognition in e-blast" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Recognition on website" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Recognition in event program" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Verbal recognition" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'yes']} />
          <RowComponent value="Color advertisement in the event souvenir" checks={['yes:Full page', 'yes:Full page', 'yes:1/2 page', 'yes:1/2 page', 'yes:1/4 page', 'no']} />
          <RowComponent value="Sponsorship Amount" checks={['$ 10,000', '$ 5,000', '$ 2,500', '$ 1,500', '$ 1,000', '$ 500']} />
        </tbody>
      </table>
      <SponsorshipFormComponent event_code={'va24'} />
    </div>
  </>
}