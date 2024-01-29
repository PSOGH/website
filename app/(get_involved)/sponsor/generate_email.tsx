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
  return `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
          <noscript>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          </noscript>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-px-100 {
          width: 100px !important;
          max-width: 100px;
        }
  
        .mj-column-px-450 {
          width: 450px !important;
          max-width: 450px;
        }
  
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-px-100 {
        width: 100px !important;
        max-width: 100px;
      }
  
      .moz-text-html .mj-column-px-450 {
        width: 450px !important;
        max-width: 450px;
      }
  
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
  </head>
  
  <body style="word-spacing:normal;">
    <div style="">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:100px;" ><![endif]-->
                <div class="mj-column-px-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                            <tbody>
                              <tr>
                                <td style="width:50px;">
                                  <img height="auto" src="https://ik.imagekit.io/gps/psogh/logo.png?updatedAt=1703632737668&tr=w-100,h-100" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="50" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:450px;" ><![endif]-->
                <div class="mj-column-px-450 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-style:italic;line-height:1;text-align:center;color:#626262;">Punjabi Society of Greater Houston</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <p style="border-top:solid 4px #F45E43;font-size:1px;margin:0px auto;width:100%;">
                          </p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px #F45E43;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
  </td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#F45E43;">Thank you for your sponsorship!</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:16px;line-height:1;text-align:left;color:#F45E43;">A member of the Punjabi Society of Greater Houston will reach out to you shortly.</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#000000;">Details Captured</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;">
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Sponsorship Level</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${{
                                1: 'Grand Sponsor',
                                2: 'Platinum Sponsor',
                                3: 'Diamond Sponsor',
                                4: 'Gold Sponsor',
                                5: 'Silver Sponsor',
                                6: 'Bronze Sponsor',
                              }[data['sponsorship_level_code']]}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Pledge Amount</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${{
                                1: '$ 10,000',
                                2: '$ 5,000',
                                3: '$ 2,500',
                                4: '$ 1,500',
                                5: '$ 1,000',
                                6: '$ 500',
                              }[data['sponsorship_level_code']]}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Sponsor Type</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${{
                                1: 'Individual',
                                2: 'Organisation',
                              }[data['sponsor_type']]}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Sponsor Name</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${data['sponsor_name']}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Contact Person</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${data['sponsor_name']}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Phone Number</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${formatPhoneNumber('' + data['contact_phone'])}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Email ID</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${data['contact_email']}</td>
                            </tr>
                            <tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Address</td>
                              <td style='font-weight: 400; font-family= helvetica;'>${data['contact_address']}</td>
                            </tr>` + (((data['contact_address2']) && (data['contact_address2'] != '')) ?
                            `<tr>
                              <td style='font-weight: 600; font-family= helvetica;'></td>
                              <td style='font-weight: 400; font-family= helvetica;'>${data['contact_address2']}</td>
                            </tr>` : '') +
                            `<tr>
                              <td style='font-weight: 600; font-family= helvetica;'></td>
                              <td style='font-weight: 400; font-family= helvetica;'>${data['contact_city']}, ${data['contact_state']} - ${data['contact_zip']}</td>
                            </tr>` + ((data['sponsor_booth']) ?
                            `<tr>
                              <td style='font-weight: 600; font-family= helvetica;'>Booth requested</td>
                              <td style='font-weight: 400; font-family= helvetica;'>Yes</td>
                            </tr>` : '') +
                            `
                          </table>
                        </td>
                      </tr>` + (((data['sponsor_introduction']) && (data['sponsor_introduction'] != '')) ?
                      `<tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#000000;">Introduction</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:16px;line-height:1;text-align:left;color:#000000;">${data['sponsor_introduction']}</div>
                        </td>
                      </tr>` : '') +
                    `</tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
  
  </html>`
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
  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>
  </title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-px-100 {
        width: 100px !important;
        max-width: 100px;
      }

      .mj-column-px-450 {
        width: 450px !important;
        max-width: 450px;
      }

      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-px-100 {
      width: 100px !important;
      max-width: 100px;
    }

    .moz-text-html .mj-column-px-450 {
      width: 450px !important;
      max-width: 450px;
    }

    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
</head>

<body style="word-spacing:normal;">
  <div style="">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:100px;" ><![endif]-->
              <div class="mj-column-px-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:50px;">
                                <img height="auto" src="https://ik.imagekit.io/gps/psogh/logo.png?updatedAt=1703632737668&tr=w-100,h-100" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="50" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:450px;" ><![endif]-->
              <div class="mj-column-px-450 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-style:italic;line-height:1;text-align:center;color:#626262;">Punjabi Society of Greater Houston</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <p style="border-top:solid 4px #F45E43;font-size:1px;margin:0px auto;width:100%;">
                        </p>
                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px #F45E43;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#F45E43;">A new sponsor pledge has been recieved!</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:helvetica;font-size:16px;line-height:1;text-align:left;color:#F45E43;">Please find below the details.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#000000;">Details Captured</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;">
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Sponsorship Level</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${{
                              1: 'Grand Sponsor',
                              2: 'Platinum Sponsor',
                              3: 'Diamond Sponsor',
                              4: 'Gold Sponsor',
                              5: 'Silver Sponsor',
                              6: 'Bronze Sponsor',
                            }[data['sponsorship_level_code']]}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Pledge Amount</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${{
                              1: '$ 10,000',
                              2: '$ 5,000',
                              3: '$ 2,500',
                              4: '$ 1,500',
                              5: '$ 1,000',
                              6: '$ 500',
                            }[data['sponsorship_level_code']]}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Sponsor Type</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${{
                              1: 'Individual',
                              2: 'Organisation',
                            }[data['sponsor_type']]}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Sponsor Name</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['sponsor_name']}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Contact Person</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['sponsor_name']}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Phone Number</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${formatPhoneNumber('' + data['contact_phone'])}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Email ID</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['contact_email']}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Address</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['contact_address']}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'></td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['contact_address2']}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'></td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['contact_city']}, ${data['contact_state']} - ${data['contact_zip']}</td>
                          </tr>
                          <tr>
                            <td style='font-weight: 600; font-family= helvetica;'>Booth requested</td>
                            <td style='font-weight: 400; font-family= helvetica;'>${data['sponsor_booth']}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#000000;">Introduction</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:helvetica;font-size:16px;line-height:1;text-align:left;color:#000000;">${data['sponsor_introduction']}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`
}
