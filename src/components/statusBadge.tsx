"use client";

import { cn } from "@/lib/utils";

export type Status = "PENDING" | "CONFIRMED" | "CANCELLED";

const statusStyles: Record<Status, string> = {
  PENDING: "bg-montrose-wine/20 text-montrose-wine",
  CONFIRMED: "bg-green-100 text-green-800",
  CANCELLED: "bg-montrose-red/20 text-montrose-red",
};

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full",
        statusStyles[status]
      )}
    >
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </span>
  );
};
