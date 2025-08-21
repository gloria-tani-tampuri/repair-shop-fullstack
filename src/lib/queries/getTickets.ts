import {db} from "@/db";
import { tickets } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getTicket(id: number) {
 const ticket = await db.select()
 .from(tickets)
 .where(eq(tickets.id, id)) 
 return ticket[0] || null; // Return the first customer or null if not found
}