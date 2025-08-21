import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

export async function main() {
  try {
    await migrate(db, { migrationsFolder: "src/db/migrations" });
    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Error running migrations: ", error);
    process.exit(1)
  }
}
main()