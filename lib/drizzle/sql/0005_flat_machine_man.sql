ALTER TABLE "tblboothLevels" ALTER COLUMN "amount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblBooths" ALTER COLUMN "booth" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblBooths" ALTER COLUMN "boothLevel" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntities" ALTER COLUMN "entityType" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntities" ALTER COLUMN "entityRole" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntityAddresses" ALTER COLUMN "entity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntityEmails" ALTER COLUMN "entity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntityLogos" ALTER COLUMN "entity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntityPhoneNumbers" ALTER COLUMN "entity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntityRepresentatives" ALTER COLUMN "entity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblEntityWebsites" ALTER COLUMN "entity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblPayableAccounts" ALTER COLUMN "event" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblPayableAccounts" ALTER COLUMN "amount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblPaymentMethods" ALTER COLUMN "paymentMethodName" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblPayments" ALTER COLUMN "paymentMethod" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblPayments" ALTER COLUMN "amount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblRecievableAccounts" ALTER COLUMN "sponsorship" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblRecievableAccounts" ALTER COLUMN "booth" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblRecievableAccounts" ALTER COLUMN "amount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblSponsors" ALTER COLUMN "sponsor" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblSponsors" ALTER COLUMN "sponsorshipLevel" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblSponsorshipLevels" ALTER COLUMN "event" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblSponsorshipLevels" ALTER COLUMN "amount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP COLUMN IF EXISTS "address2";--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP COLUMN IF EXISTS "state";--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP COLUMN IF EXISTS "zipCode";--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP COLUMN IF EXISTS "logoURL";