import { format, isSameDay } from "date-fns";

function formatDateRange(start: string | Date, end: string | Date) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isSameDay(startDate, endDate)) {
    return format(startDate, "dd MMM yyyy");
  }

  return `${format(startDate, "dd MMM")} – ${format(endDate, "dd MMM yyyy")}`;
}

export { formatDateRange };

