import { useState } from "react";
import Button from "../button/Button";
import Typography from "../typography/Typography";

export default function Calendar() {
  const [daySelected, setDaySelected] = useState(2023);
  const [monthSelected, setMonthSelected] = useState(6);
  const [yearSelected, setYearSelected] = useState(2023);

  const datesThisMonth = getDaysInMonth(monthSelected, yearSelected);

  const days = [
    ...Array.from({ length: datesThisMonth[0].getDay() - 1 }, (_, i) => null),
    ...datesThisMonth,
  ];

  console.log(days);
  return (
    <div>
      <div className="grid grid-cols-7 grid-rows-6  justify-center items-center gap-y-2 gap-x-2 w-[100%]">
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>M</Typography>
        </div>
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>T</Typography>
        </div>
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>W</Typography>
        </div>
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>T</Typography>
        </div>
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>F</Typography>
        </div>
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>S</Typography>
        </div>
        <div className="justify-self-center self-center aspect-square w-[100%]">
          <Typography>S</Typography>
        </div>
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
