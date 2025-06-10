"use client";

import { DayPicker, DateRange } from "react-day-picker"; // Use DayPicker from react-day-picker
// import "react-day-picker/style.css";
import { format } from "date-fns"; // For formatting the selected date

interface DatePickerWithRangeProps {
  date: DateRange | undefined; // This can hold the from/to range or a single date
  setDate: (date: DateRange) => void; // This will update the selected date range
}

const DatePickerWithRange = ({ date, setDate }: DatePickerWithRangeProps) => {
  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      // If the selected date is not undefined, update the date range
      setDate({ from: newDate, to: newDate }); // You can customize from/to if you want a range
    }
  };

  return (
    <div className="w-full max-w-xs">
      <DayPicker
        mode="single" // Single date selection mode
        selected={date?.from} // Use the `from` date from the range for single selection
        onSelect={handleDateSelect} // Handle date selection
        footer={
          date?.from ? `Selected: ${format(date.from, "PPP")}` : "Pick a date." // Display selected date
        }
      />
    </div>
  );
};

export { DatePickerWithRange };
