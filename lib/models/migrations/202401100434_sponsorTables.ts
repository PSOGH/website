import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('sponsor')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('sponsorship_level_code', 'varchar', (col) => col.notNull())
    .addColumn('sponsor_name', 'varchar', (col) => col.notNull())
    .addColumn('contact_name', 'varchar', (col) => col.notNull())
    .addColumn('contact_email', 'varchar', (col) => col.notNull())
    .addColumn('contact_phone', 'varchar', (col) => col.notNull())
    .addColumn('contact_address', 'varchar', (col) => col.notNull())
    .addColumn('contact_address2', 'varchar', (col) => col.notNull())
    .addColumn('contact_city', 'varchar', (col) => col.notNull())
    .addColumn('contact_state', 'varchar', (col) => col.notNull())
    .addColumn('contact_zip', 'varchar', (col) => col.notNull())
    .addColumn('sponsor_logo_file', 'varchar', (col) => col.notNull())
    .addColumn('sponsor_booth', 'boolean', (col) => col.notNull())
    .addColumn('sponsor_introduction', 'varchar', (col) => col.notNull())
    .execute();

  //   CREATE TABLE
  // "sponsor" (
  //   "id" serial PRIMARY KEY,
  //   "sponsorship_level_code" VARCHAR NOT NULL,
  //   "sponsor_name" VARCHAR NOT NULL,
  //   "contact_name" VARCHAR NOT NULL,
  //   "contact_email" VARCHAR NOT NULL,
  //   "contact_phone" VARCHAR NOT NULL,
  //   "contact_address" VARCHAR NOT NULL,
  //   "contact_address2" VARCHAR NOT NULL,
  //   "contact_city" VARCHAR NOT NULL,
  //   "contact_state" VARCHAR NOT NULL,
  //   "contact_zip" VARCHAR NOT NULL,
  //   "sponsor_logo_file" VARCHAR NOT NULL,
  //   "sponsor_booth" BOOLEAN NOT NULL,
  //   "sponsor_introduction" VARCHAR NOT NULL
  // )
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('sponsor').execute();
  // DROP TABLE "sponsor"
}
