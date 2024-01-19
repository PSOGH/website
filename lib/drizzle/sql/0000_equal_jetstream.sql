CREATE TABLE IF NOT EXISTS "tblEntities" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityName" text,
	"entityType" numeric,
	"entityRole" numeric,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityAddresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityAddress" text,
	"entityAddress2" text,
	"city" text,
	"state" text,
	"zipCode" text,
	"entity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityEmails" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityEmail" text,
	"entity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityLogos" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityLogo" text,
	"entity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityPhoneNumbers" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityPhoneNumber" text,
	"entity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityRepresentatives" (
	"entity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityRoles" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityRoleName" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityTypes" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityTypeName" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEntityWebsites" (
	"id" serial PRIMARY KEY NOT NULL,
	"entityWebsite" text,
	"entity" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblEvents" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"date" timestamp,
	"location" text,
	"address" text,
	"address2" text,
	"city" text,
	"state" text,
	"zipCode" text,
	"locationMapLink" text,
	"logoURL" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblSponsors" (
	"id" serial PRIMARY KEY NOT NULL,
	"sponsor" numeric,
	"sponsorshipLevel" numeric NOT NULL,
	"name" text NOT NULL,
	"address" text NOT NULL,
	"address2" text,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zipCode" text NOT NULL,
	"logoURL" text NOT NULL,
	"requestBooth" boolean DEFAULT false,
	"introduction" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblSponsorshipLevels" (
	"id" serial PRIMARY KEY NOT NULL,
	"event" text NOT NULL,
	"code" text,
	"name" text,
	"amount" numeric
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tblSponsors" ADD CONSTRAINT "tblSponsors_sponsor_tblEntities_id_fk" FOREIGN KEY ("sponsor") REFERENCES "tblEntities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tblSponsors" ADD CONSTRAINT "tblSponsors_sponsorshipLevel_tblSponsorshipLevels_id_fk" FOREIGN KEY ("sponsorshipLevel") REFERENCES "tblSponsorshipLevels"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tblSponsorshipLevels" ADD CONSTRAINT "tblSponsorshipLevels_event_tblEvents_id_fk" FOREIGN KEY ("event") REFERENCES "tblEvents"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
