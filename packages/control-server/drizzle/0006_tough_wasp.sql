CREATE TABLE "device_policy" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"priority" integer DEFAULT 100 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"settings" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "device_policy_device" (
	"policy_id" uuid NOT NULL,
	"device_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "device_policy_partition" (
	"policy_id" uuid NOT NULL,
	"partition_node_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "display_username" text;--> statement-breakpoint
ALTER TABLE "exam_config" ADD COLUMN "status" text DEFAULT 'draft' NOT NULL;--> statement-breakpoint
ALTER TABLE "exam_config" ADD COLUMN "announcement" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "exam_config" ADD COLUMN "assigned_device_ids" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "exam_config" ADD COLUMN "assigned_partition_node_ids" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "exam_config" ADD COLUMN "deleted_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "device_policy" ADD CONSTRAINT "device_policy_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_policy_device" ADD CONSTRAINT "device_policy_device_policy_id_device_policy_id_fk" FOREIGN KEY ("policy_id") REFERENCES "public"."device_policy"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_policy_device" ADD CONSTRAINT "device_policy_device_device_id_device_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."device"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_policy_partition" ADD CONSTRAINT "device_policy_partition_policy_id_device_policy_id_fk" FOREIGN KEY ("policy_id") REFERENCES "public"."device_policy"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_policy_partition" ADD CONSTRAINT "device_policy_partition_partition_node_id_partition_node_id_fk" FOREIGN KEY ("partition_node_id") REFERENCES "public"."partition_node"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "device_policy_name_unique" ON "device_policy" USING btree ("name");--> statement-breakpoint
CREATE INDEX "device_policy_priority_idx" ON "device_policy" USING btree ("enabled","priority");--> statement-breakpoint
CREATE UNIQUE INDEX "device_policy_device_unique" ON "device_policy_device" USING btree ("policy_id","device_id");--> statement-breakpoint
CREATE UNIQUE INDEX "device_policy_partition_unique" ON "device_policy_partition" USING btree ("policy_id","partition_node_id");--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");