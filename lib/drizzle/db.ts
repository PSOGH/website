import { drizzle } from 'drizzle-orm/vercel-postgres';
import { type Logger } from "drizzle-orm/logger";
import { sql } from '@vercel/postgres';

import * as booth from './models/booth';
import * as entity from './models/entity';
import * as event from './models/event';
import * as payment from './models/payment';
import * as sponsor from './models/sponsor';

class QueryLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    // console.debug("___QUERY___");
    // console.debug(query);
    // console.debug(params);
    // console.debug("___END_QUERY___");
  }
}

export const schema = { ...booth, ...entity, ...event, ...payment, ...sponsor };
export const db = drizzle(sql, { schema: schema, logger: new QueryLogger()});
