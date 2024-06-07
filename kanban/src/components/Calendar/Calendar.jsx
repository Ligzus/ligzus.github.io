import { useState } from "react";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { CalendarCustom } from "./Calendar.styled";

export default function Calendar({ date, setSelected }) {
  const [selected, setInternalSelected] = useState(date ? new Date(date) : undefined);

  const handleSelect = (date) => {
    setInternalSelected(date);
    setSelected(date ? date.toISOString() : "");
  };

  return (
    <CalendarCustom 
      locale={ru} 
      mode="single" 
      selected={selected} 
      onSelect={handleSelect} 
    />
  );
}
