import { useState } from "react";
import { convertHour } from "../common/calendar/utils/date";

const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

export default function HourSelection({
  defaultHour = hours[0],
  onChange = () => {},
}: {
  onChange?: (hour: number) => void;
  defaultHour?: number;
}) {
  const [selectedHour, setSelectedHour] = useState<number>(defaultHour);
  return (
    <select
      onChange={(event) => {
        setSelectedHour(Number(event.target.value));
        onChange(Number(event.target.value));
      }}
      defaultValue={selectedHour}
      name="select"
    >
      {hours.map((hour) => (
        <option value={hour} key={`select-hour-${hour}`}>
          {convertHour(hour)}
        </option>
      ))}
    </select>
  );
}
