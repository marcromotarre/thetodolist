import Typography from "../components/common/Typography";
import Styles from "../types/style";
import TasksData from "../data/tasks.json";
import { useState } from "react";

const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const AREAS = hours.reduce((acc, curr) => {
  return (acc += `'task-${curr} hour-${curr}' `);
}, "");

var weekdayString = new Array(7);
weekdayString[0] = "Sunday";
weekdayString[1] = "Monday";
weekdayString[2] = "Tuesday";
weekdayString[3] = "Wednesday";
weekdayString[4] = "Thursday";
weekdayString[5] = "Friday";
weekdayString[6] = "Saturday";

function convertHour(hour: number) {
  if (hour < 10) return `0${hour}:00`;
  return `${hour}:00`;
}

function dates(current: Date): Date[] {
  var week = new Array();
  // Starting Monday not Sunday
  current.setDate(current.getDate() - current.getDay() + 1);
  for (var i = 0; i < 7; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return week;
}

type TaskType = {
  start: Date;
  end: Date;
  title: string;
  category: string;
};

type TaskJsonType = {
  start: string;
  end: string;
  title: string;
  category: string;
};

function getTasksData(tasksJsonData: TaskJsonType[]): TaskType[] {
  return tasksJsonData.map((task) => ({
    ...task,
    start: new Date(Date.parse(task.start)),
    end: new Date(Date.parse(task.end)),
  }));
}

export default function TasksPage() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const week = dates(new Date());
  const tasks = getTasksData(TasksData);

  const todayTasks = tasks.filter(
    (task: TaskType) =>
      new Date(task.start).toDateString() === selectedDay.toDateString(),
  );

  return (
    <div className="grid grid-cols-1 gap-y-2">
      <div className="flex justify-center items-center">
        <Typography variant="h4">February</Typography>
      </div>
      <div className="flex justify-between">
        {week.map((weekDay) => (
          <CalendarDay
            key={`calendar-day-${weekdayString[weekDay.getDay()]}`}
            weekDay={weekdayString[weekDay.getDay()]}
            dayNumber={weekDay.getDate()}
          />
        ))}
      </div>
      <div
        className="grid grid-cols-[auto_50px]"
        style={{
          gridTemplateAreas: AREAS,
          gridTemplateRows: `repeat(${hours.length}, 80px)`,
        }}
      >
        {hours.map((hour) => (
          <div
            key={`tasks_time_${hour}`}
            style={{ gridArea: `hour-${hour}` }}
            className="w-full h-full"
          >
            <Typography variant="body1">{convertHour(hour)}</Typography>
          </div>
        ))}

        {todayTasks.map((task) => {
          const startHour = task.start.getHours();
          const endHour = task.end.getHours();
          return (
            <div
              key={`${task.title}_${startHour}_${endHour}`}
              className="p-2"
              style={{
                gridArea: `task-${startHour} /task-${startHour} / task-${endHour} / task-${endHour}`,
              }}
            >
              <Task style={{ width: "100%", height: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CalendarDay({
  weekDay,
  dayNumber,
}: {
  weekDay: string;
  dayNumber: number;
}) {
  console.log(weekDay);
  return (
    <div className="flex justify-center items-center flex-wrap flex-col">
      <Typography className="capitalize">{weekDay.slice(0, 3)}</Typography>
      <Typography>{`${dayNumber}`}</Typography>
    </div>
  );
}

function Task({ style = {} }: { style?: Styles }) {
  return (
    <div style={style} className="bg-white rounded-md">
      <Typography>Computer</Typography>
    </div>
  );
}
