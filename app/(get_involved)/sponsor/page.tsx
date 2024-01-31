import React from 'react'
import RowComponent from './Row'
import TitleRowComponent from './titleRow'
import SponsorshipFormComponent from './sponsorship_form'
import { getEntityTypes } from '@/lib/drizzle/controllers/entity'
import { getSponsorshipLevels } from '@/lib/drizzle/controllers/sponsor'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'

type Props = {}
const eventCode: string = 'va24'

export default async function SponsorPage({}: Props) {
  const sponsorshipLevels: {key: number, value: string}[] = (
    await getSponsorshipLevels()
    ).map(
      (sponsorLevel) => {
        return { key: sponsorLevel.id || 0, value: sponsorLevel.name || "" }
      }
      );

  const sponsor_types_raw = await getEntityTypes()
  const sponsor_types: {key: number, value: string}[] = sponsor_types_raw.map((entityType) => {return {key: entityType.id, value: entityType.entityTypeName || ''}})
  return <>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Sponsorship for Vaisakhi Mela 2024
    </h2>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Sponsorship Packages
    </h3>
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full table-fixed min-w-[1150px]">
        <thead>
          <TitleRowComponent item_title="Sponsorship Incentives" sponsor_packages={['Grand Sponsor', 'Platinum Sponsor', 'Diamond Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor']} />
        </thead>
        <tbody>
          <RowComponent value="" checks={['$ 10,000', '$ 5,000', '$ 2,500', '$ 1,500', '$ 1,000', '$ 500']} />
          <RowComponent value="Introducing YOU as a Brand at all media platforms" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Award & Sponsor Recognition by Chief Official Host" checks={['yes', 'yes', 'yes', 'no', 'no', 'no']} />
          <RowComponent value="Award & Sponsor Recognition" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Tickets included" checks={['yes:16 VIP', 'yes:8 VIP', 'yes:5 VIP', 'yes:4 VIP', 'yes:2 VIP', 'yes:2 Premium']} />
          <RowComponent value="VIP Box seating option available" checks={['yes', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Highlight spot to display business promotional material" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Logo & Brand presence on website and all social media platform" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Complimentary food galore" checks={['yes:35 food coupons', 'yes:18 food coupons', 'yes:12 food coupons', 'yes:8 food coupons', 'yes:4 food coupons', 'yes:2 food coupons']} />
          <RowComponent value="Opportunity to present your brand during the program" checks={['yes:5 min', 'yes:3 min', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Recognition as host committee sponsor" checks={['yes', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Recognition in digital print media" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Recognition in e-blast" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Recognition on website" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Recognition in event program" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Verbal recognition" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'yes']} />
          <RowComponent value="Color advertisement in the event souvenir" checks={['yes:Full page', 'yes:Full page', 'yes:1/2 page', 'yes:1/2 page', 'yes:1/4 page', 'no']} />
        </tbody>
      </table>
      {/* <iframe src="https://drive.google.com/file/d/1dgzvSGNsSYo-a9Cu1g7TZYJovBwztwZP/preview" width="100%" height="100%" allow="autoplay" style={{minHeight: '500px'}}></iframe> */}
      <div className="md:w-3/4 md:min-h-[560px] mx-auto invisible md:visible">
        {/* <iframe src="https://drive.google.com/file/d/1zpftxp9ZO_deGf0FGxPezMOfUcQ2Z_h8/preview" width="100%" height="100%" allow="autoplay" style={{minHeight: '480px'}}></iframe> */}
        <iframe src="https://ik.imagekit.io/gps/psogh/va_24/PSGH-%20_VA23%20GENEROUS%20SPONSORSHIP%20PACKAGE-compressed.pdf" style={{width:'100%', height:'500px'}}></iframe>
      </div>
      <div className="my-2 w-3/4 mx-auto visible md:invisible">
        {/* <iframe src="https://drive.google.com/file/d/1zpftxp9ZO_deGf0FGxPezMOfUcQ2Z_h8/preview" width="100%" height="100%" allow="autoplay" style={{minHeight: '480px'}}></iframe> */}
        <Button asChild>
          <a href="https://ik.imagekit.io/gps/psogh/va_24/PSGH-%20_VA23%20GENEROUS%20SPONSORSHIP%20PACKAGE-compressed.pdf">
            <DownloadIcon className="mr-2 h-4 w-4" /> Download Generous Sponsorship Package
          </a>
        </Button>
      </div>
      
      <SponsorshipFormComponent event_code={'va24'} sponsor_types={sponsor_types} sponsorshipLevels={sponsorshipLevels} />
    </div>
  </>
}
