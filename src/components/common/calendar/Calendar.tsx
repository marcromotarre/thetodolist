import { useState } from "react";
import Button from "../button/Button";
import Typography from "../typography/Typography";
import { CalendarIcon, LeftIcon, RightIcon } from "../icons";

export default function Calendar() {
  const [daySelected, setDaySelected] = useState(13);
  const [monthSelected, setMonthSelected] = useState(6);
  const [yearSelected, setYearSelected] = useState(2023);

  const datesThisMonth = getDaysInMonth(monthSelected, yearSelected);

  function goToPreviousMonth() {
    if (monthSelected - 1 < 1) {
      setMonthSelected(12);
      setYearSelected(yearSelected - 1);
    } else setMonthSelected(monthSelected - 1);
  }

  function goToNextMonth() {
    setMonthSelected(monthSelected + 1);
  }

  const days = [
    ...Array.from({ length: datesThisMonth[0].getDay() - 1 }, (_, i) => null),
    ...datesThisMonth,
  ];

  console.log(days);
  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="flex justify-between">
        <Typography variant="h6">{`${monthSelected} ${yearSelected}`}</Typography>
        <div className="grid grid-cols-[30px_30px] gap-x-2">
          <button onClick={() => goToPreviousMonth()}>
            <LeftIcon size={12} color="#555555" />
          </button>
          <button onClick={() => goToNextMonth()}>
            <RightIcon size={12} color="#555555" />
          </button>
        </div>
      </div>
      <div
        style={{ gridAutoRows: "1fr", gridAutoColumns: "1fr" }}
        className="grid grid-cols-7 grid-rows-6  justify-center items-center gap-y-2 gap-x-2 w-[100%]"
      >
        <Typography className="justify-self-center self-center aspect-square">
          M
        </Typography>
        <Typography className="justify-self-center self-center aspect-square">
          T
        </Typography>
        <Typography className="justify-self-center self-center aspect-square">
          W
        </Typography>
        <Typography className="justify-self-center self-center aspect-square">
          T
        </Typography>
        <Typography className="justify-self-center self-center aspect-square">
          F
        </Typography>
        <Typography className="justify-self-center self-center aspect-square">
          S
        </Typography>
        <Typography className="justify-self-center self-center aspect-square">
          S
        </Typography>
        {days.map((day) => (
          <>
            {day ? (
              <button className="justify-self-center self-center aspect-square">
                {day.getDate()}
              </button>
            ) : (
              <div></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

/**
 * @param {number} The month number, 0 based
 * @param {number} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
function getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
