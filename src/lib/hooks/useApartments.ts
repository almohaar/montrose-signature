// lib/hooks/useApartments.ts
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/types/supabase";

type Apartment = Database["public"]["Tables"]["apartments"]["Row"];

export function useApartments() {
  const supabase = createClient();
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApartments = async () => {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("apartments")
        .select("*")
        .eq("isActive", true)
        .eq("isDeleted", false)
        .order("createdAt", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setApartments(data || []);
      }

      setIsLoading(false);
    };

    fetchApartments();
  }, []);

  return { apartments, isLoading, error };
}
