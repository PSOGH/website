import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('team')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('first_name', 'varchar', (col) => col.notNull())
    .addColumn('last_name', 'varchar', (col) => col.notNull())
    .addColumn('email', 'varchar', (col) => col.notNull())
    .addColumn('phone', 'varchar', (col) => col.notNull())
    .addColumn('lead_age', 'integer', (col) => col.notNull())
    .addColumn('lead_gender', 'varchar', (col) => col.notNull())
    .addColumn('submitted_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('team', 'varchar', (col) => col.unique().notNull())
    .addColumn('team_size', 'integer', (col) => col.notNull())
    .addColumn('event', 'varchar', (col) => col.notNull())
    .execute();

  //   CREATE TABLE
  // "team" (
  //   "id" serial PRIMARY KEY,
  //   "first_name" VARCHAR NOT NULL,
  //   "last_name" VARCHAR NOT NULL,
  //   "email" VARCHAR NOT NULL,
  //   "phone" VARCHAR NOT NULL,
  //   "lead_age" INTEGER NOT NULL,
  //   "lead_gender" VARCHAR NOT NULL,
  //   "submitted_at" TIMESTAMP DEFAULT NOW() NOT NULL,
  //   "team" VARCHAR NOT NULL UNIQUE,
  //   "team_size" INTEGER NOT NULL,
  //   "event" VARCHAR NOT NULL
  // )

  await db.schema
    .createTable('participant')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('TeamId', 'integer', (col) => col.references('team.id').onDelete('cascade').notNull())
    .addColumn('first_name', 'varchar', (col) => col.notNull())
    .addColumn('last_name', 'varchar', (col) => col.notNull())
    .addColumn('age', 'integer', (col) => col.notNull())
    .addColumn('gender', 'varchar', (col) => col.notNull())
    .execute();

  //   CREATE TABLE
  // "participant" (
  //   "id" serial PRIMARY KEY,
  //   "TeamId" INTEGER NOT NULL REFERENCES "team" ("id") ON DELETE CASCADE,
  //   "first_name" VARCHAR NOT NULL,
  //   "last_name" VARCHAR NOT NULL,
  //   "age" INTEGER NOT NULL,
  //   "gender" VARCHAR NOT NULL
  // )
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('participant').execute();
  // DROP TABLE "participant"
  await db.schema.dropTable('team').execute();
  // DROP TABLE "team"
}
