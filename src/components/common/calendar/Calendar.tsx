import { useState } from "react";
import Button from "../button/Button";
import Typography from "../typography/Typography";
import { CalendarIcon, LeftIcon, RightIcon } from "../icons";

export default function Calendar({
  date = new Date(),
  completed = false,
  selection = "day",
  onClick = () => {},
}: {
  date?: Date;
  completed?: boolean;
  selection?: "day" | "week";
  onClick?: (date?: Date) => void;
}) {
  const currentDate = new Date();
  const [dateSelected, setSelectedDate] = useState(date);
  const [monthSelected, setMonthSelected] = useState(date.getMonth());
  const [yearSelected, setYearSelected] = useState(date.getFullYear());

  const datesThisMonth = getDaysInMonth(monthSelected, yearSelected);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function goToPreviousMonth() {
    if (monthSelected - 1 < 0) {
      setMonthSelected(11);
      setYearSelected(yearSelected - 1);
    } else {
      setMonthSelected(monthSelected - 1);
    }
  }

  function goToNextMonth() {
    if (monthSelected + 1 > 11) {
      setMonthSelected(0);
      setYearSelected(yearSelected + 1);
    } else {
      setMonthSelected(monthSelected + 1);
    }
  }

  function clickOnDay(date: Date) {
    setSelectedDate(date);
    onClick(date);
  }

  let days = [
    ...Array.from(
      {
        length:
          datesThisMonth[0].getDay() == 0 ? 6 : datesThisMonth[0].getDay() - 1,
      },
      (_, index) => {
        if (!completed) return null;
        const newDate = new Date(datesThisMonth[0]);
        newDate.setDate(
          newDate.getDate() -
            (datesThisMonth[0].getDay() == 0
              ? 7 - 1 - index
              : datesThisMonth[0].getDay() - 1 - index),
        );
        return newDate;
      },
    ),
    ...datesThisMonth,
  ];

  days = [
    ...days,
    ...Array.from({ length: 42 - days.length }, (_, index) => {
      if (!completed) return null;
      const lastDay = datesThisMonth[datesThisMonth.length - 1];
      const newDate = new Date(lastDay);
      newDate.setDate(newDate.getDate() + (index + 1));
      return lastDay.getDay() !== 0 && index <= 6 - lastDay.getDay()
        ? newDate
        : null;
    }),
  ];

  const weekD = weekDays(dateSelected);

  return (
    <div className="grid grid-cols-1 gap-y-4">
      <div className="flex justify-between">
        <Typography variant="h6">{`${months[monthSelected]} ${yearSelected}`}</Typography>
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
        {days.map((day, index) => {
          return (
            <>
              {day ? (
                <button
                  disabled={day.getMonth() !== monthSelected}
                  style={
                    (selection == "day" &&
                      dateSelected.getMonth() === monthSelected &&
                      dateSelected.getFullYear() === yearSelected &&
                      dateSelected.getDate() === day.getDate() &&
                      dateSelected.getMonth() === day.getMonth()) ||
                    (selection == "week" && isDayIncluded(weekD, day))
                      ? {
                          borderRadius: "100%",
                          backgroundColor:
                            dateSelected.getMonth() === day?.getMonth()
                              ? "#266EF1"
                              : "#CCC",
                          border: "1px solid #266EF1",
                          width: "100%",
                          color: "white",
                        }
                      : currentDate.getMonth() === monthSelected &&
                        currentDate.getFullYear() === yearSelected &&
                        currentDate.getDate() === day.getDate()
                      ? {
                          borderRadius: "100%",
                          border: "1px solid #266EF1",
                          width: "100%",
                          color: "#266EF1",
                        }
                      : {
                          width: "100%",
                          color:
                            day.getMonth() != monthSelected ? "#CCC" : "black",
                        }
                  }
                  onClick={() => clickOnDay(day)}
                  key={`calendar-day-${day.getDate()}-${monthSelected}`}
                  className="justify-self-center self-center aspect-square"
                >
                  {day.getDate()}
                </button>
              ) : (
                <div key={`calendar-day-${index}`}></div>
              )}
            </>
          );
        })}
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

const getWeek = (date: Date) => {
  const janFirst = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(
    ((date.getTime() - janFirst.getTime()) / 86400000 + janFirst.getDay()) / 7,
  );
};

const isSameWeek = (dateA: Date, dateB: Date) => {
  return getWeek(dateA) === getWeek(dateB);
};

function weekDays(date: Date): Date[] {
  let _date = new Date(date);
  var week = new Array();
  // Starting Monday not Sunday
  _date.setDate(
    _date.getDay() == 0
      ? _date.getDate() - 7 + 1
      : _date.getDate() - _date.getDay() + 1,
  );
  for (var i = 0; i < 7; i++) {
    week.push(new Date(_date));
    _date.setDate(_date.getDate() + 1);
  }
  return week;
}

function isDayIncluded(days: Date[], day: Date) {
  let found = false;
  let a = day;
  days.forEach((d) => {
    if (isSameDay(d, day)) {
      found = true;
    }
  });
  return found;
}

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth()
  );
}
