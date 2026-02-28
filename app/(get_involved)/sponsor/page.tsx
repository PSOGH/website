import { Button } from '@/components/ui/button'
import { getEntityTypes } from '@/lib/drizzle/controllers/entity'
import { getSponsorshipLevels } from '@/lib/drizzle/controllers/sponsor'
import { DownloadIcon } from 'lucide-react'
import RowComponent from './Row'
import SponsorshipFormComponent from './sponsorship_form'
import TitleRowComponent from './titleRow'

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
      Sponsorship for Grand Vaisakhi Night 2026
    </h2>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Sponsorship Packages
    </h3>
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full table-fixed min-w-[1150px]">
        <thead>
          <TitleRowComponent item_title="Sponsorship Incentives" sponsor_packages={['Grand Sponsor', 'Diamond Sponsor', 'Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor', 'Rose Sponsor']} />
        </thead>
        <tbody>
          <RowComponent value="" checks={['$ 5,000', '$ 2,500', '$ 2,000', '$ 1,500', '$ 1,000', '$ 500', '$ 250']} />
          <RowComponent value="Introducing YOU as a Brand on all media platforms" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Award & Sponsor Recognition by Chief Official Host" checks={['yes', 'yes', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Tickets included" checks={['yes:20 Premium', 'yes:10 Premium', 'yes:8 Premium', 'yes:6 Premium', 'yes:4 Premium', 'yes:2 Premium', 'yes:1 Complementary']} />
          <RowComponent value="Highlight spot to display business promotional material" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Logo & Brand presence on website and all social media platforms" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Opportunity to present your brand during the program" checks={['no', 'no', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Recognition as host committee sponsor" checks={['yes', 'no', 'yes', 'no', 'no', 'no', 'no']} />
          <RowComponent value="Recognition in digital print media" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Recognition in e-blast" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Recognition on website" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Recognition in event program" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no']} />
          <RowComponent value="Verbal recognition" checks={['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no']} />
          <RowComponent value="Color advertisement in the event souvenir" checks={['yes:Full page', 'yes:Half page', 'yes:Full page', 'yes:Half page', 'yes:Quarter page', 'no', 'no']} />
          <RowComponent value="Flyers / Business cards on PSGH table & slide on screen" checks={['no', 'no', 'no', 'no', 'no', 'no', 'yes']} />
        </tbody>
      </table>
      {/* <iframe src="https://drive.google.com/file/d/1dgzvSGNsSYo-a9Cu1g7TZYJovBwztwZP/preview" width="100%" height="100%" allow="autoplay" style={{minHeight: '500px'}}></iframe> */}
      <div className="max-h-0 md:w-3/4 md:min-h-[540px] mx-auto invisible md:visible">
        {/* <iframe src="https://drive.google.com/file/d/1zpftxp9ZO_deGf0FGxPezMOfUcQ2Z_h8/preview" width="100%" height="100%" allow="autoplay" style={{minHeight: '480px'}}></iframe> */}
        {/* <iframe src="https://ik.imagekit.io/gps/psogh/va_24/PSGH-%20_VA23%20GENEROUS%20SPONSORSHIP%20PACKAGE-compressed.pdf" style={{width:'100%', height:'530px'}}></iframe> */}
        <iframe src="https://ik.imagekit.io/gps/psogh/va_26/_VA26%20GENEROUS%20SPONSORSHIP%20PACKAGE-compressed.pdf.pdf?updatedAt=1772236365228" style={{width:'100%', height:'530px'}}></iframe>
      </div>
      <div className="my-2 w-3/4 mx-auto visible md:invisible">
        {/* <iframe src="https://drive.google.com/file/d/1zpftxp9ZO_deGf0FGxPezMOfUcQ2Z_h8/preview" width="100%" height="100%" allow="autoplay" style={{minHeight: '480px'}}></iframe> */}
        <Button asChild>
          <a href="https://ik.imagekit.io/gps/psogh/va_26/_VA26%20GENEROUS%20SPONSORSHIP%20PACKAGE-compressed.pdf.pdf?updatedAt=1772236365228">
            <DownloadIcon className="mr-2 h-4 w-4" /> Download Generous Sponsorship Package
          </a>
        </Button>
      </div>
      <SponsorshipFormComponent event_code={'va26'} sponsor_types={sponsor_types} sponsorshipLevels={sponsorshipLevels} />
    </div>
  </>
}
