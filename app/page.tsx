import { getProfile, getSession } from "./supabase-server";

import NavBar from "@/components/nav/NavBar";
import APIcall from "@/components/APIcall";
import log from "@/lib/logger";

export default async function Home() {
  const session = await getSession();
  const profile = await getProfile();
  log.info("session", profile);
  return (
    <>
      <NavBar session={session} profile={profile} />
      <APIcall />
    </>
  );
}
