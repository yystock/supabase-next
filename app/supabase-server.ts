import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createServerSupabaseClient = () => createServerComponentClient<Database>({ cookies });

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getProfile() {
  const supabase = createServerSupabaseClient();
  const session = await getSession();
  const user = session?.user;
  if (!user) return null;
  try {
    const { data: profile } = await supabase.from("profiles").select(`id, full_name, username, avatar_url`).eq("id", user.id).single();
    return profile;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
