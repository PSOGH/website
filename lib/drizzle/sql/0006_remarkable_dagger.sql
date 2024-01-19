ALTER TABLE "tblEntityRepresentatives" RENAME COLUMN "entity" TO "primaryEntity";--> statement-breakpoint
ALTER TABLE "tblEntityRepresentatives" ADD COLUMN "representativeEntity" integer;