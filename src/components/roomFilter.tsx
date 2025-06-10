"use client";

import { DatePickerWithRange } from "@/components/datePickerWithRange";
import { Button, Input } from "@/components/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { DateRange } from "react-day-picker";

interface FilterValues {
  keyword: string;
  dateRange: { from: Date | undefined; to: Date | undefined };
  onFilter: (filters: any) => void;
}

const RoomFilter = ({ onFilter }: { onFilter: (filters: any) => void }) => {
  const [keyword, setKeyword] = useState("");
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });

  const handleSetDate = (date: DateRange) => {
    setDateRange({ from: date.from, to: date.to ?? undefined });
  };

  const handleFilter = () => {
    onFilter({ keyword, dateRange });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 md:flex md:items-end md:space-y-0 md:space-x-4 bg-background p-4 rounded-2xl shadow-sm"
    >
      <Input
        placeholder="Search by keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1"
      />
      <DatePickerWithRange date={dateRange} setDate={handleSetDate} />
      <Button onClick={handleFilter}>Apply Filters</Button>
    </motion.div>
  );
};

export { RoomFilter };
