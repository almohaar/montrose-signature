// components/ServicesPreview.tsx
"use client";
import { services } from "@/lib/mock-data";
import { ServiceCard } from "@/components/cards";

export function ServicesPreview() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}
