import { useState } from "react";
import Button from "../components/common/button/Button";
import Typography from "../components/common/typography/Typography";
import { CalendarIcon } from "../components/common/icons";
import { getMonthString } from "../components/common/calendar/utils/date";
import SetCalendarDateModal from "../components/modals/SetCalendarDateModal";
import HourSelection from "../components/app/HourSelection";
import { useNavigate } from "react-router-dom";
import { usePageNavigationContext } from "../providers/PageNavigationProvider";
import { useTasksContext } from "../providers/TasksProvider";

export default function CreateTaskPage() {
  const { lastPage, goBack, reset } = usePageNavigationContext();
  const { createTask } = useTasksContext();
  const navigate = useNavigate();

  const [isCalendarModalOpened, setIsCalendarModalOpened] = useState(false);
  const currentDate = new Date();

  const [taskDate, setTaskDate] = useState(new Date());
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskStartTime, setTaskStartTime] = useState(
    currentDate.getHours() + 1,
  );
  const [taskEndTime, setTaskEndTime] = useState(currentDate.getHours() + 2);
  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-y-2">
      <div className="flex justify-end">
        <Button
          variant="text"
          color="black"
          onClick={() => setIsCalendarModalOpened(true)}
          endIcon={<CalendarIcon />}
        >
          {`${taskDate.getDate()} ${getMonthString(taskDate.getMonth())}${
            taskDate.getFullYear() !== new Date().getFullYear()
              ? ` ${taskDate.getFullYear()}`
              : ""
          }`}
        </Button>
      </div>
      {isCalendarModalOpened && (
        <SetCalendarDateModal
          defaultDate={taskDate}
          onClose={(date) => {
            if (date) {
              setTaskDate(date);
            }
            setIsCalendarModalOpened(false);
          }}
        />
      )}
      <Typography>Activity Name</Typography>
      <input
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
      ></input>
      <Typography>Category</Typography>
      <div className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <Typography>Start time</Typography>
          <HourSelection
            onChange={(hour) => setTaskStartTime(hour)}
            defaultHour={taskStartTime}
          />
        </div>
        <div>
          <Typography>End time</Typography>
          <HourSelection
            onChange={(hour) => setTaskEndTime(hour)}
            defaultHour={taskEndTime}
          />
        </div>
      </div>
      <div className="fixed bottom-4 object-center left-[40%]">
        <Button
          onClick={() => {
            // create task
            createTask({
              title: taskTitle,
              category: "computer",
              start: new Date(
                taskDate.getFullYear(),
                taskDate.getMonth(),
                taskDate.getDate(),
                taskStartTime,
              ),
              end: new Date(
                taskDate.getFullYear(),
                taskDate.getMonth(),
                taskDate.getDate(),
                taskEndTime,
              ),
            });
            const _lastPage = lastPage;
            goBack();
            if (_lastPage) {
              navigate(_lastPage);
            } else {
              reset();
              navigate("/");
            }
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
}
