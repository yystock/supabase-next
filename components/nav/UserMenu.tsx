import { useSessionContext } from "@supabase/auth-helpers-react";

export default function UserMenu({ profile }: { profile: Profile | null }) {
  const { supabaseClient } = useSessionContext();
  return (
    <>
      <div className="flex flex-col">
        <h2>Welcome {profile?.username || "dawg"}.</h2>
        <button
          onClick={() => supabaseClient.auth.signOut()}
          className="md:inline-block px-4 py-2 text-xl font-display text-black hover:text-white bg-white hover:bg-purple-600 drop-shadow-[6px_6px_0_black] hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </>
  );
}
