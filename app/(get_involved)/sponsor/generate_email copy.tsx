'use server'
import * as z from 'zod'
import { sponsorFormSchema } from './form_schema'
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText,
  MjmlDivider,
  MjmlTable
} from "@faire/mjml-react";

import { renderReactToMjml } from "./renderReactToMjml";

function formatPhoneNumber(phoneNumberString: string) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return null;
}

async function generateThankYouEmail(data: z.infer<typeof sponsorFormSchema>) {
  const { html, errors } = renderReactToMjml(
    <Mjml>
      <MjmlBody>
        <MjmlSection background-color="#ffffff">
          <MjmlColumn width="100px">
            <MjmlImage width="75px" src="https://ik.imagekit.io/gps/psogh/logo.png?updatedAt=1703632737668&tr=w-100,h-100"></MjmlImage>
          </MjmlColumn>
          <MjmlColumn width="450px" vertical-align="middle">
            <MjmlText  align="center"
                      vertical-align="middle"
                      font-style="italic"
                      font-size="20px"
                      color="#626262">
    Punjabi Society of Greater Houston
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlDivider border-color="#F45E43"></MjmlDivider>
            <MjmlText font-size="20px" color="#F45E43" font-family="helvetica">Thank you for your sponsorship!</MjmlText>
            <MjmlText font-size="16px" color="#F45E43" font-family="helvetica">A member of the Punjabi Society of Greater Houston will reach out to you shortly.</MjmlText>
            
            <MjmlText font-size="20px" font-family="helvetica">Details Captured</MjmlText>
            
            <MjmlTable>
              <tr>
                <td className='font-semibold'>Sponsorship Level</td>
                <td>{{
                  1: 'Grand Sponsor',
                  2: 'Platinum Sponsor',
                  3: 'Diamond Sponsor',
                  4: 'Gold Sponsor',
                  5: 'Silver Sponsor',
                  6: 'Bronze Sponsor',
                }[data['sponsorship_level_code']]}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Pledge Amount</td>
                <td>{{
                  1: '$ 10,000',
                  2: '$ 5,000',
                  3: '$ 2,500',
                  4: '$ 1,500',
                  5: '$ 1,000',
                  6: '$ 500',
                }[data['sponsorship_level_code']]}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Sponsor Type</td>
                <td>{{
                  1: 'Individual',
                  2: 'Organisation',
                }[data['sponsor_type']]}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Sponsor Name</td>
                <td>{data['sponsor_name']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Contact Person</td>
                <td>{data['contact_name']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Phone Number</td>
                <td>{formatPhoneNumber('' + data['contact_phone'])}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Email ID</td>
                <td>{data['contact_email']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Address</td>
                <td>{data['contact_address']}</td>
              </tr>
              {
                ((data['contact_address2']) && (data['contact_address2'] != '')) ? <tr>
                  <td className='font-semibold'></td>
                  <td>{data['contact_address2']}</td>
                </tr> : null
              }
              <tr>
                <td className='font-semibold'></td>
                <td>{data['contact_city']}, {data['contact_state']} - {data['contact_zip']}</td>
              </tr>
              {
                data['sponsor_booth'] ? <tr>
                  <td className='font-semibold'>Booth requested</td>
                  <td>Yes</td>
                </tr> : null
              }
            </MjmlTable>
            
          </MjmlColumn>
        </MjmlSection>
            {
              ((data['sponsor_introduction']) && (data['sponsor_introduction'] != '')) ? <MjmlSection>
                <MjmlText font-size="20px" font-family="helvetica">Introduction</MjmlText>
                <MjmlText font-size="16px" font-family="helvetica">{data['sponsor_introduction']}</MjmlText>
              </MjmlSection> : null
            }
      </MjmlBody>
    </Mjml>
  );
  return html
}

export default async function getEmails(data: z.infer<typeof sponsorFormSchema>){
  console.log(data)
  const thankyou = await generateThankYouEmail(data)
  const notify = await generateNotificationEmail(data)
  console.log(thankyou)
  console.log(notify)
  return {
    'thankYou': await generateThankYouEmail(data),
    'notify': await generateNotificationEmail(data)
  }
}

async function generateNotificationEmail(data: z.infer<typeof sponsorFormSchema>) {
  const { html, errors } = renderReactToMjml(
    <Mjml>
      <MjmlBody>
        <MjmlSection background-color="#ffffff">
          <MjmlColumn width="100px">
            <MjmlImage width="75px" src="https://ik.imagekit.io/gps/psogh/logo.png?updatedAt=1703632737668&tr=w-100,h-100"></MjmlImage>
          </MjmlColumn>
          <MjmlColumn width="450px" vertical-align="middle">
            <MjmlText  align="center"
                      vertical-align="middle"
                      font-style="italic"
                      font-size="20px"
                      color="#626262">
    Punjabi Society of Greater Houston
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlDivider border-color="#F45E43"></MjmlDivider>
            <MjmlText font-size="20px" color="#F45E43" font-family="helvetica">A new sponsor pledge has been recieved!</MjmlText>
            <MjmlText font-size="16px" color="#F45E43" font-family="helvetica">Please find below the details.</MjmlText>
            
            <MjmlText font-size="20px" font-family="helvetica">Details Captured</MjmlText>
            
            <MjmlTable>
              <tr>
                <td className='font-semibold'>Sponsorship Level</td>
                <td>{{
                  1: 'Grand Sponsor',
                  2: 'Platinum Sponsor',
                  3: 'Diamond Sponsor',
                  4: 'Gold Sponsor',
                  5: 'Silver Sponsor',
                  6: 'Bronze Sponsor',
                }[data['sponsorship_level_code']]}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Pledge Amount</td>
                <td>{{
                  1: '$ 10,000',
                  2: '$ 5,000',
                  3: '$ 2,500',
                  4: '$ 1,500',
                  5: '$ 1,000',
                  6: '$ 500',
                }[data['sponsorship_level_code']]}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Sponsor Type</td>
                <td>{{
                  1: 'Individual',
                  2: 'Organisation',
                }[data['sponsor_type']]}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Sponsor Name</td>
                <td>{data['sponsor_name']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Contact Person</td>
                <td>{data['contact_name']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Phone Number</td>
                <td>{formatPhoneNumber('' + data['contact_phone'])}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Email ID</td>
                <td>{data['contact_email']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Address</td>
                <td>{data['contact_address']}</td>
              </tr>
              <tr>
                <td className='font-semibold'></td>
                <td>{data['contact_address2']}</td>
              </tr> : null
              <tr>
                <td className='font-semibold'></td>
                <td>{data['contact_city']}, {data['contact_state']} - {data['contact_zip']}</td>
              </tr>
              <tr>
                <td className='font-semibold'>Booth requested</td>
                <td>{data['sponsor_booth']}</td>
              </tr>
            </MjmlTable>
            
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlText font-size="20px" font-family="helvetica">Introduction</MjmlText>
          <MjmlText font-size="16px" font-family="helvetica">{data['sponsor_introduction']}</MjmlText>
        </MjmlSection>
        <MjmlSection>
          <MjmlText>{JSON.stringify(data)}</MjmlText>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
  return html
}
