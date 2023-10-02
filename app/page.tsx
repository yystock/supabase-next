import NavBar from "@/components/nav/NavBar";

import { getProfile, getSession } from "./supabase-server";

export default async function Home() {
  const session = await getSession();
  const profile = await getProfile();
  return <NavBar session={session} profile={profile} />;
}
