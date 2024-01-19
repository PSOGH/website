CREATE TABLE IF NOT EXISTS "tblboothLevels" (
	"id" serial PRIMARY KEY NOT NULL,
	"event" text NOT NULL,
	"code" text,
	"name" text,
	"amount" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblBooths" (
	"id" serial PRIMARY KEY NOT NULL,
	"booth" numeric,
	"boothLevel" numeric,
	"name" text NOT NULL,
	"logoURL" text NOT NULL,
	"introduction" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblPayableAccounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"event" numeric,
	"amount" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblPaymentMethods" (
	"id" serial PRIMARY KEY NOT NULL,
	"paymentMethodName" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblPayments" (
	"id" serial PRIMARY KEY NOT NULL,
	"paymentMethod" numeric,
	"amount" numeric,
	"paymentDetail" text,
	"timestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tblRecievableAccounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"sponsorship" numeric,
	"booth" numeric,
	"amount" numeric
);
