ALTER TABLE "tblBooths" ADD COLUMN "recievableAccounts" integer;--> statement-breakpoint
ALTER TABLE "tblPayments" ADD COLUMN "recievable" integer;--> statement-breakpoint
ALTER TABLE "tblPayments" ADD COLUMN "payable" integer;--> statement-breakpoint
ALTER TABLE "tblSponsors" ADD COLUMN "recievableAccounts" integer;--> statement-breakpoint
ALTER TABLE "tblPayableAccounts" DROP COLUMN IF EXISTS "event";--> statement-breakpoint
ALTER TABLE "tblRecievableAccounts" DROP COLUMN IF EXISTS "sponsorship";--> statement-breakpoint
ALTER TABLE "tblRecievableAccounts" DROP COLUMN IF EXISTS "booth";