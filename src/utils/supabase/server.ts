// utils/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createServerSupabase() {
  // must await cookies() in Next 15 :contentReference[oaicite:0]{index=0}
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // new signature wants getAll + setAll :contentReference[oaicite:1]{index=1}
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            // in RSC cookieStore.set takes an object overload
            cookieStore.set({ name, value, ...options });
          });
        },
      },
    }
  );
}
