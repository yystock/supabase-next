import type { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;
  type Profile = Pick<DB["public"]["Tables"]["profiles"]["Row"], "id" | "avatar_url" | "username" | "full_name">;
}
