import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";
import AccountForm from "@/components/account/AccountForm";

export const dynamic = "force-dynamic";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  return <AccountForm session={session} />;
}
