import Typography from "../components/common/typography/Typography";
import Styles from "../types/style";
import TasksData from "../data/tasks.json";
import { useState } from "react";
import categories, { CategoryTypes } from "../data/categories";
import Alert from "../components/common/alert/Alert";
import Button from "../components/common/button/Button";
import { BackIcon, CalendarIcon, PlusIcon } from "../components/common/icons";
import AddNewActivityModal from "../components/modals/AddNewActivityModal";

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
  category: CategoryTypes;
};

type TaskJsonType = {
  start: string;
  end: string;
  title: string;
  category: CategoryTypes;
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
  const [isAddActivityModalOpened, setIsAddActivityModalOpened] =
    useState(false);
  const week = dates(new Date());
  const tasks = getTasksData(TasksData);

  const todayTasks = tasks.filter(
    (task: TaskType) =>
      new Date(task.start).toDateString() === selectedDay.toDateString(),
  );

  return (
    <div className="grid grid-cols-1 gap-y-2 grid-rows-[50px_60px_calc(100vh_-_150px)]">
      <div className="flex justify-between items-center">
        <Button color="black" variant="text" startIcon={<BackIcon />}></Button>
        <Typography variant="h4">February</Typography>
        <Button
          color="black"
          variant="text"
          startIcon={<CalendarIcon />}
        ></Button>
      </div>
      <div className="flex justify-between">
        {week.map((weekDay) => (
          <CalendarDay
            onClick={(date: Date) => setSelectedDay(date)}
            key={`calendar-day-${weekdayString[weekDay.getDay()]}`}
            date={weekDay}
            selected={selectedDay.toDateString() === weekDay.toDateString()}
          />
        ))}
      </div>
      <div className="overflow-y-scroll">
        <Alert severity="info">You have 2 tasks pending to be completed</Alert>
        <div
          className="grid grid-cols-[auto_50px] gap-x-2"
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
                  gridArea: `task-${startHour} /task-${startHour} / task-${
                    endHour - 1
                  } / task-${endHour - 1}`,
                }}
              >
                <Task {...task} style={{ width: "100%", height: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-4 object-center left-[25%]">
        <Button
          onClick={() => setIsAddActivityModalOpened(true)}
          startIcon={<PlusIcon />}
        >
          Add new Activity
        </Button>
      </div>
      {isAddActivityModalOpened && (
        <AddNewActivityModal
          onClose={() => setIsAddActivityModalOpened(false)}
        />
      )}
    </div>
  );
}

function CalendarDay({
  date,
  selected = false,
  onClick = () => {},
}: {
  selected?: boolean;
  date: Date;
  onClick: (date: Date) => void;
}) {
  return (
    <button
      onClick={() => onClick(date)}
      style={{
        backgroundColor: selected ? "#266EF1" : "transparent",
        color: selected ? "white" : "black",
      }}
      className="flex justify-center items-center flex-wrap flex-col p-2 rounded-md min-w-[40px]"
    >
      <Typography className="capitalize">
        {weekdayString[date.getDay()].slice(0, 3)}
      </Typography>
      <Typography>{`${date.getDate()}`}</Typography>
    </button>
  );
}

function Task({
  title,
  category,
  style = {},
}: {
  title: string;
  category?: CategoryTypes;
  style?: Styles;
}) {
  return (
    <div style={style} className="bg-white rounded-md p-2">
      <div className="flex items-center">
        {category && (
          <div
            style={{ backgroundColor: categories[category].backgroundColor }}
            className="p-2 w-fit h-fit rounded-md mr-2"
          >
            {categories[category].icon}
          </div>
        )}

        <Typography variant="body1">{title}</Typography>
      </div>
    </div>
  );
}
