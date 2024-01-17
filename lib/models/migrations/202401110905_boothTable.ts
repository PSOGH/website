import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('booth')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('business_name', 'varchar', (col) => col.notNull())
    .addColumn('business_owner', 'varchar', (col) => col.notNull())
    .addColumn('contact_email', 'varchar', (col) => col.notNull())
    .addColumn('contact_phone', 'varchar', (col) => col.notNull())
    .addColumn('booth_logo_file', 'varchar', (col) => col.notNull())
    .addColumn('booth_type', 'varchar', (col) => col.notNull())
    .addColumn('booth_introduction', 'varchar', (col) => col.notNull())
    .execute();

  //   CREATE TABLE
  // "booth" (
  //   "id" serial PRIMARY KEY,
  //   "business_name" VARCHAR NOT NULL,
  //   "business_owner" VARCHAR NOT NULL,
  //   "contact_email" VARCHAR NOT NULL,
  //   "contact_phone" VARCHAR NOT NULL,
  //   "booth_logo_file" VARCHAR NOT NULL,
  //   "booth_type" VARCHAR NOT NULL,
  //   "booth_introduction" VARCHAR NOT NULL
  // )
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('booth').execute();
  // DROP TABLE "booth"
}
