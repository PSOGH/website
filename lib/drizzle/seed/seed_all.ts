
import * as dotenv from "dotenv";

dotenv.config({path: './.env.development.local'});
dotenv.config({path: './.env.stage.local'});
dotenv.config({path: './.env.production.local'});
console.log(process.env.POSTGRES_URL);

const connectionString = `${process.env.POSTGRES_URL || ""}?sslmode=require`
console.log(connectionString);

import { seed_entity_data } from './entity';
import { seed_event_data } from './event';
import { seed_sponsor_data } from "./sponsor";
import { seed_payment_data } from "./payment";

seed_entity_data().then(() => {
  console.log('Entity data seeded');
}).catch((err) => {
  console.log(err);
  process.exit(1);
});

seed_event_data().then(() => {
  console.log('Event data seeded');
}).catch((err) => {
  console.log(err);
  process.exit(1);
});

seed_sponsor_data().then(() => {
  console.log('Sponsorship Levels seeded');
}).catch((err) => {
  console.log(err);
  process.exit(1);
});

seed_payment_data().then(() => {
  console.log('Payment Methods seeded');
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
