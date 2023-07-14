import Typography from "../components/common/typography/Typography";
import Styles from "../types/style";
import { useState } from "react";
import categories, { CategoryTypes } from "../data/categories";
import Alert from "../components/common/alert/Alert";
import Button from "../components/common/button/Button";
import { BackIcon, CalendarIcon, PlusIcon } from "../components/common/icons";
import AddNewActivityModal from "../components/modals/AddNewActivityModal";
import ChangeWeekModal from "../components/modals/ChangeWeekModal";
import { usePageNavigationContext } from "../providers/PageNavigationProvider";
import { useNavigate } from "react-router-dom";
import { convertHour, months } from "../components/common/calendar/utils/date";
import { useTasksContext } from "../providers/TasksProvider";

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

export default function TasksPage() {
  const { lastPage, goBack, go, reset } = usePageNavigationContext();
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [isAddActivityModalOpened, setIsAddActivityModalOpened] =
    useState(false);

  const [isChangeWeekModalOpened, setIsChangeWeekModalOpened] = useState(false);
  const week = weekDays(selectedDay);

  const { tasks } = useTasksContext();

  const todayTasks = tasks.filter(
    (task) =>
      new Date(task.start).toDateString() === selectedDay.toDateString(),
  );

  function goBackNavigation() {
    if (lastPage) {
      const _lastPage = lastPage;
      goBack();
      navigate(_lastPage);
    } else {
      reset();
      navigate("/");
    }
  }

  return (
    <div className="grid grid-cols-1 gap-y-2 grid-rows-[50px_60px_calc(100vh_-_150px)]">
      <div className="flex justify-between items-center">
        <Button
          onClick={() => goBackNavigation()}
          color="black"
          variant="text"
          startIcon={<BackIcon />}
        ></Button>
        <Typography variant="h4">{months[selectedDay.getMonth()]}</Typography>
        <Button
          onClick={() => setIsChangeWeekModalOpened(true)}
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
      <div className="overflow-y-scroll grid grid-cols-1 gap-y-2">
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
          onClick={() => {
            go("/tasks");
            navigate("/task/create");
          }}
          startIcon={<PlusIcon />}
        >
          Add new Activity
        </Button>
      </div>

      {isChangeWeekModalOpened && (
        <ChangeWeekModal
          onClose={(date) => {
            if (date) {
              setSelectedDay(date);
            }
            setIsChangeWeekModalOpened(false);
          }}
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
