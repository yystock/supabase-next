import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import AccountForm from "@/components/account/AccountForm";
import { createServerSupabaseClient } from "@/app/supabase-server";

export const dynamic = "force-dynamic";

export default async function Account() {
  const supabase = createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error("No session found");
  }
  return <AccountForm session={session} />;
}
