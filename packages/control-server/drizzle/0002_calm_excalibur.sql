CREATE TYPE "public"."device_lifecycle_status" AS ENUM('active', 'revoked');--> statement-breakpoint
CREATE TABLE "audit_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"actor_user_id" text,
	"action" text NOT NULL,
	"resource_type" text NOT NULL,
	"resource_id" text,
	"request_id" uuid NOT NULL,
	"metadata" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "device" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" text DEFAULT 'default' NOT NULL,
	"display_name" text NOT NULL,
	"lifecycle_status" "device_lifecycle_status" DEFAULT 'active' NOT NULL,
	"platform" text,
	"architecture" text,
	"app_version" text,
	"protocol_version" text,
	"campus" text,
	"building" text,
	"floor" text,
	"room" text,
	"labels" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"last_seen_at" timestamp with time zone,
	"last_reported_state" jsonb,
	"enrolled_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam_config" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" text DEFAULT 'default' NOT NULL,
	"name" text NOT NULL,
	"latest_version" integer DEFAULT 0 NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam_config_version" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"exam_config_id" uuid NOT NULL,
	"version" integer NOT NULL,
	"content" jsonb NOT NULL,
	"content_hash" text NOT NULL,
	"validation_issues" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_actor_user_id_user_id_fk" FOREIGN KEY ("actor_user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_config" ADD CONSTRAINT "exam_config_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_config_version" ADD CONSTRAINT "exam_config_version_exam_config_id_exam_config_id_fk" FOREIGN KEY ("exam_config_id") REFERENCES "public"."exam_config"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_config_version" ADD CONSTRAINT "exam_config_version_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "audit_log_actor_user_id_idx" ON "audit_log" USING btree ("actor_user_id");--> statement-breakpoint
CREATE INDEX "audit_log_resource_idx" ON "audit_log" USING btree ("resource_type","resource_id");--> statement-breakpoint
CREATE INDEX "audit_log_created_at_idx" ON "audit_log" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "device_school_status_idx" ON "device" USING btree ("school_id","lifecycle_status");--> statement-breakpoint
CREATE INDEX "device_last_seen_at_idx" ON "device" USING btree ("last_seen_at");--> statement-breakpoint
CREATE INDEX "device_location_idx" ON "device" USING btree ("school_id","campus","building","room");--> statement-breakpoint
CREATE INDEX "exam_config_school_updated_at_idx" ON "exam_config" USING btree ("school_id","updated_at");--> statement-breakpoint
CREATE UNIQUE INDEX "exam_config_version_number_unique" ON "exam_config_version" USING btree ("exam_config_id","version");--> statement-breakpoint
CREATE INDEX "exam_config_version_hash_idx" ON "exam_config_version" USING btree ("content_hash");