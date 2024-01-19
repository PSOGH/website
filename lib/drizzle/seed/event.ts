import { registerEvents } from "../controllers/event";
import { db, schema } from "../db";

export async function seed_event_data() {
  await db.delete(schema.events);
  await registerEvents([
    {
      name: 'Grand Vaisakhi Mela 2023',
      description: 'Gajda Wajda Punjab | Grand Vaisakhi Mela 2023',
      date: new Date('2023-04-23'),
      location: 'GSH Event Center',
      address: '9550 W Bellfort Ave.',
      address2: '',
      city: 'Houston',
      state: 'TX',
      zipCode: '77031',
      locationMapLink: 'https://maps.app.goo.gl/GBBsvfdFb6KKHguE8',
      logoURL: 'logo.png',
      id: 1,
    },
    {
      name: 'Grand Vaisakhi Mela 2024',
      description: 'Gajda Wajda Punjab | Grand Vaisakhi Mela 2024',
      date: new Date('2024-04-20'),
      location: 'Dunham Theatre',
      address: '7502 Fondren Rd',
      address2: '',
      city: 'Houston',
      state: 'TX',
      zipCode: '77074',
      locationMapLink: 'https://maps.app.goo.gl/GBBsvfdFb6KKHguE8',
      logoURL: 'logo.png',
      id: 2,
    },
  ]);
}
