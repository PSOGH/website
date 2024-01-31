'use server'
import * as z from 'zod'
import { sponsorFormSchema } from './form_schema'
import getEmails from './generate_email';
import { addSponsor } from '@/lib/drizzle/controllers/sponsor';
import { addEntity } from '@/lib/drizzle/controllers/entity';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_KEY
  }
});

export async function submitSponsor(data: z.infer<typeof sponsorFormSchema>) {
  // Self Sponsoring
  if(data.sponsor_type == 1) {
    try {
      const entity = await addEntity(
        data.contact_name,
        2,
        3,
        [data.contact_email],
        [data.contact_phone],
        [],
        (data.sponsor_logo_file && data.sponsor_logo_filename) ? [[data.sponsor_logo_file, data.sponsor_logo_filename]] : ([] as string[][]),
        // [[data.sponsor_logo_file, data.sponsor_logo_filename]],
        [{
          address: data.contact_address,
          address2: data.contact_address2 || '',
          city: data.contact_city,
          state: data.contact_state,
          zipCode: data.contact_zip,
        }],
        []
      )

      const sponsor = await addSponsor({
        name: data.sponsor_name,
        introduction: data.sponsor_introduction,
        sponsor: entity,
        sponsorshipLevel: data.sponsorship_level_code,
        requestBooth: data.sponsor_booth,
      });

      const { thankYou, notify } = await getEmails(data)
      console.log(thankYou)
      console.log(notify)

      const mailOptions = {
        from: process.env.EMAIL_ID,
        to: data.contact_email,
        subject: 'Thank you for sponsoring PSOGH!',
        html: thankYou
      };

      const emailInfo = await transporter.sendMail(mailOptions);
      console.log('emailInfo: ' + JSON.stringify(emailInfo));
      data['sponsor_logo_file'] = ''

      const mailOptions2 = {
        from: process.env.EMAIL_ID,
        to: process.env.SPONSOR_EMAIL_IDS,
        // to: 's.gagan.preet@gmail.com',
        subject: 'A New Sponsorship Pledge has been recieved!',
        html: notify
      };

      const emailInfo2 = await transporter.sendMail(mailOptions2);
      console.log('emailInfo2: ' + JSON.stringify(emailInfo2));

      if ('error' in emailInfo2) {
        console.log(emailInfo2.error);
        return {
          'message': 'There was an error sending email about your pledge submission. Your pledge has been registered. Please PSOGH member to get your pledge email.',
          'error': (typeof emailInfo2.error == typeof 'string') ? emailInfo2.error : JSON.stringify(emailInfo2.error),
        }
      } else {
        console.log('Thank you email sent: ' + JSON.stringify(emailInfo2));
      }

      return {
        message: 'Thank you for your interest in sponsoring our event! We will be in touch soon.',
        sponsor: entity
      };
    } catch (error) {
      return {
        'message': 'There was an error submitting your Sponsor Information. Please try again later or contact a PSOGH member.',
        'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
      }
    }
  }
  if(data.sponsor_type == 2) {
    try {
      const entity = await addEntity(
        data.contact_name,
        1,
        3,
        [data.contact_email],
        [data.contact_phone],
        [],
        [],
        [{
          address: data.contact_address,
          address2: data.contact_address2 || '',
          city: data.contact_city,
          state: data.contact_state,
          zipCode: data.contact_zip,
        }],
        []
      )
      const sponsorEntity = await addEntity(
        data.sponsor_name,
        2,
        3,
        [],
        [],
        [],
        (data.sponsor_logo_file && data.sponsor_logo_filename) ? [[data.sponsor_logo_file, data.sponsor_logo_filename]] : ([] as string[][]),
        [],
        [entity]
      )
      const sponsor = await addSponsor({
        name: data.sponsor_name,
        introduction: data.sponsor_introduction,
        sponsor: sponsorEntity,
        sponsorshipLevel: data.sponsorship_level_code,
        requestBooth: data.sponsor_booth,
      });

      const { thankYou, notify } = await getEmails(data)
      console.log(thankYou)
      console.log(notify)
      
      const mailOptions = {
        from: process.env.EMAIL_ID,
        to: data.contact_email,
        subject: 'Thank you for sponsoring PSOGH!',
        html: thankYou
      };

      const emailInfo = await transporter.sendMail(mailOptions);
      console.log('emailInfo: ' + JSON.stringify(emailInfo));
      data['sponsor_logo_file'] = ''

      const mailOptions2 = {
        from: process.env.EMAIL_ID,
        to: process.env.SPONSOR_EMAIL_IDS,
        // to: 's.gagan.preet@gmail.com',
        subject: 'A New Sponsorship Pledge has been recieved!',
        html: notify
      };

      const emailInfo2 = await transporter.sendMail(mailOptions2);
      console.log('emailInfo2: ' + JSON.stringify(emailInfo2));

      if ('error' in emailInfo2) {
        console.log(emailInfo2.error);
        return {
          'message': 'There was an error sending email about your pledge submission. Your pledge has been registered. Please PSOGH member to get your pledge email.',
          'error': (typeof emailInfo2.error == typeof 'string') ? emailInfo2.error : JSON.stringify(emailInfo2.error),
        }
      } else {
        console.log('Thank you email sent: ' + JSON.stringify(emailInfo2));
      }

      return {
        message: 'Thank you for your interest in sponsoring our event! We will be in touch soon.',
        sponsor: sponsor
      };
    } catch (error) {
      return {
        'message': 'There was an error submitting your Sponsor Information. Please try again later or contact a PSOGH member.',
        'error': (typeof error == typeof 'string') ? error : JSON.stringify(error),
      }
    }
  }
}
