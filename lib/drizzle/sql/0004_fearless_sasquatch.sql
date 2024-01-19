CREATE TABLE IF NOT EXISTS "tblEventImagesAndReels" (
	"id" serial PRIMARY KEY NOT NULL,
	"event" text,
	"imageURL" text,
	"videoURL" text,
	"highlightVideoURL" text
);
