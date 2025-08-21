import {db} from "@/db";
import { customers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCustomer(id: number) {
 const customer = await db.select()
 .from(customers)
 .where(eq(customers.id, id)) 
 return customer[0] || null; // Return the first customer or null if not found
}