CREATE TABLE "device_partition_membership" (
	"device_id" uuid NOT NULL,
	"node_id" uuid NOT NULL,
	"assigned_by" text,
	"assigned_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "device_partition_membership_device_id_node_id_pk" PRIMARY KEY("device_id","node_id")
);
--> statement-breakpoint
CREATE TABLE "partition_dimension" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" text DEFAULT 'default' NOT NULL,
	"key" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"allow_multiple" boolean DEFAULT false NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "partition_node" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dimension_id" uuid NOT NULL,
	"parent_id" uuid,
	"name" text NOT NULL,
	"description" text,
	"metadata" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP INDEX "device_location_idx";--> statement-breakpoint
ALTER TABLE "device_partition_membership" ADD CONSTRAINT "device_partition_membership_device_id_device_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."device"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_partition_membership" ADD CONSTRAINT "device_partition_membership_node_id_partition_node_id_fk" FOREIGN KEY ("node_id") REFERENCES "public"."partition_node"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "device_partition_membership" ADD CONSTRAINT "device_partition_membership_assigned_by_user_id_fk" FOREIGN KEY ("assigned_by") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "partition_dimension" ADD CONSTRAINT "partition_dimension_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "partition_node" ADD CONSTRAINT "partition_node_dimension_id_partition_dimension_id_fk" FOREIGN KEY ("dimension_id") REFERENCES "public"."partition_dimension"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "partition_node" ADD CONSTRAINT "partition_node_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "partition_node" ADD CONSTRAINT "partition_node_parent_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."partition_node"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "device_partition_membership_node_idx" ON "device_partition_membership" USING btree ("node_id");--> statement-breakpoint
CREATE INDEX "device_partition_membership_device_idx" ON "device_partition_membership" USING btree ("device_id");--> statement-breakpoint
CREATE UNIQUE INDEX "partition_dimension_school_key_unique" ON "partition_dimension" USING btree ("school_id","key");--> statement-breakpoint
CREATE INDEX "partition_dimension_school_name_idx" ON "partition_dimension" USING btree ("school_id","name");--> statement-breakpoint
CREATE INDEX "partition_node_dimension_parent_idx" ON "partition_node" USING btree ("dimension_id","parent_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "partition_node_sibling_name_unique" ON "partition_node" USING btree ("dimension_id",coalesce("parent_id", '00000000-0000-0000-0000-000000000000'::uuid),"name");--> statement-breakpoint
CREATE INDEX "device_school_updated_at_idx" ON "device" USING btree ("school_id","updated_at");--> statement-breakpoint
ALTER TABLE "device" DROP COLUMN "campus";--> statement-breakpoint
ALTER TABLE "device" DROP COLUMN "building";--> statement-breakpoint
ALTER TABLE "device" DROP COLUMN "floor";--> statement-breakpoint
ALTER TABLE "device" DROP COLUMN "room";