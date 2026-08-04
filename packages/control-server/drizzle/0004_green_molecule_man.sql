CREATE TYPE "public"."command_target_status" AS ENUM('pending', 'delivered', 'acknowledged', 'succeeded', 'failed', 'expired');--> statement-breakpoint
CREATE TYPE "public"."device_error_severity" AS ENUM('warning', 'error', 'fatal');--> statement-breakpoint
CREATE TABLE "control_command" (
	"id" uuid PRIMARY KEY NOT NULL,
	"school_id" text DEFAULT 'default' NOT NULL,
	"command_type" text NOT NULL,
	"command" jsonb NOT NULL,
	"issued_by" text NOT NULL,
	"issued_at" timestamp with time zone NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"cancelled_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "control_command_target" (
	"command_id" uuid NOT NULL,
	"device_id" uuid NOT NULL,
	"status" "command_target_status" DEFAULT 'pending' NOT NULL,
	"delivered_at" timestamp with time zone,
	"acknowledged_at" timestamp with time zone,
	"completed_at" timestamp with time zone,
	"error_code" text,
	"error_message" text,
	"result_state" jsonb,
	CONSTRAINT "control_command_target_command_id_device_id_pk" PRIMARY KEY("command_id","device_id")
);
--> statement-breakpoint
CREATE TABLE "device_error_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"device_id" uuid NOT NULL,
	"severity" "device_error_severity" NOT NULL,
	"source" text NOT NULL,
	"code" text,
	"message" text NOT NULL,
	"stack" text,
	"context" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"occurred_at" timestamp with time zone NOT NULL,
	"received_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "device_credential" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"device_id" uuid NOT NULL,
	"credential_hash" text NOT NULL,
	"version" integer DEFAULT 1 NOT NULL,
	"issued_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_used_at" timestamp with time zone,
	"revoked_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "device_enrollment_code" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" text DEFAULT 'default' NOT NULL,
	"code_hash" text NOT NULL,
	"display_name" text,
	"partition_node_ids" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"max_uses" integer DEFAULT 1 NOT NULL,
	"used_count" integer DEFAULT 0 NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"revoked_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "control_command" ADD CONSTRAINT "control_command_issued_by_user_id_fk" FOREIGN KEY ("issued_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "control_command_target" ADD CONSTRAINT "control_command_target_command_id_control_command_id_fk" FOREIGN KEY ("command_id") REFERENCES "public"."control_command"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "control_command_target" ADD CONSTRAINT "control_command_target_device_id_device_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."device"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_error_log" ADD CONSTRAINT "device_error_log_device_id_device_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."device"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_credential" ADD CONSTRAINT "device_credential_device_id_device_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."device"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_enrollment_code" ADD CONSTRAINT "device_enrollment_code_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "control_command_school_issued_idx" ON "control_command" USING btree ("school_id","issued_at");--> statement-breakpoint
CREATE INDEX "control_command_expiry_idx" ON "control_command" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "control_command_target_device_status_idx" ON "control_command_target" USING btree ("device_id","status");--> statement-breakpoint
CREATE INDEX "control_command_target_command_status_idx" ON "control_command_target" USING btree ("command_id","status");--> statement-breakpoint
CREATE INDEX "device_error_log_device_occurred_idx" ON "device_error_log" USING btree ("device_id","occurred_at");--> statement-breakpoint
CREATE INDEX "device_error_log_severity_occurred_idx" ON "device_error_log" USING btree ("severity","occurred_at");--> statement-breakpoint
CREATE UNIQUE INDEX "device_credential_device_unique" ON "device_credential" USING btree ("device_id");--> statement-breakpoint
CREATE UNIQUE INDEX "device_credential_hash_unique" ON "device_credential" USING btree ("credential_hash");--> statement-breakpoint
CREATE UNIQUE INDEX "device_enrollment_code_hash_unique" ON "device_enrollment_code" USING btree ("code_hash");--> statement-breakpoint
CREATE INDEX "device_enrollment_code_school_created_idx" ON "device_enrollment_code" USING btree ("school_id","created_at");--> statement-breakpoint
CREATE INDEX "device_enrollment_code_expires_idx" ON "device_enrollment_code" USING btree ("expires_at");