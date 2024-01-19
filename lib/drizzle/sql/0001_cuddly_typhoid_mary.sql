ALTER TABLE "tblSponsors" DROP CONSTRAINT "tblSponsors_sponsor_tblEntities_id_fk";
--> statement-breakpoint
ALTER TABLE "tblSponsors" DROP CONSTRAINT "tblSponsors_sponsorshipLevel_tblSponsorshipLevels_id_fk";
--> statement-breakpoint
ALTER TABLE "tblSponsorshipLevels" DROP CONSTRAINT "tblSponsorshipLevels_event_tblEvents_id_fk";
--> statement-breakpoint
ALTER TABLE "tblSponsors" ALTER COLUMN "sponsorshipLevel" DROP NOT NULL;