CREATE TABLE "proctor_call" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" text DEFAULT 'default' NOT NULL,
	"device_id" uuid NOT NULL,
	"room_number" text,
	"message" text,
	"occurred_at" timestamp with time zone NOT NULL,
	"received_at" timestamp with time zone DEFAULT now() NOT NULL,
	"acknowledged_at" timestamp with time zone,
	"acknowledged_by" text
);
--> statement-breakpoint
ALTER TABLE "proctor_call" ADD CONSTRAINT "proctor_call_device_id_device_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."device"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "proctor_call" ADD CONSTRAINT "proctor_call_acknowledged_by_user_id_fk" FOREIGN KEY ("acknowledged_by") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "proctor_call_school_acknowledged_occurred_idx" ON "proctor_call" USING btree ("school_id","acknowledged_at","occurred_at");--> statement-breakpoint
CREATE INDEX "proctor_call_device_occurred_idx" ON "proctor_call" USING btree ("device_id","occurred_at");--> statement-breakpoint
ALTER TABLE "exam_config" DROP COLUMN "announcement";