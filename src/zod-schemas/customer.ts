import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";
import { z } from "zod";

// Create schemas with better type inference
export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.min(1, "First name is required"),
    lastName: (schema) => schema.min(1, "Last name is required"),
    address1: (schema) => schema.min(1, "Address is required"),
    city: (schema) => schema.min(1, "City is required"),
    state: (schema) => schema.min(2, "State must be exactly 2 letters"),
    email: (schema) => schema.email("Invalid email address").min(1, "Email is required"),
    zip: (schema) => schema.regex(/^\d{5}(-\d{4})?$/, "Invalid zip code use 5 or 9 digits").min(1, "Zip code is required"),
    phone: (schema) => schema.regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format. Use XXX-XXX-XXXX"),
}) satisfies z.ZodSchema;

export const selectCustomerSchema = createSelectSchema(customers);

// Export types with proper inference
export type InsertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type SelectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;