import Typography from "../components/common/Typography";
import Styles from "../types/style";

const hours = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const AREAS = hours.reduce((acc, curr) => {
  return (acc += `'task-${curr} hour-${curr}' `);
}, "");

function convertHour(hour: number) {
  if (hour < 10) return `0${hour}:00`;
  return `${hour}:00`;
}

export default function TasksPage() {
  return (
    <div className="grid grid-cols-1 gap-y-2">
      <div className="flex justify-center items-center">
        <Typography variant="h4">February</Typography>
      </div>
      <div></div>
      <div
        className="grid grid-cols-[auto_50px] overflow-y-scroll"
        style={{
          gridTemplateAreas: AREAS,
          gridTemplateRows: `repeat(${hours.length}, 80px)`,
        }}
      >
        {hours.map((hour) => (
          <div
            key={`tasks_time_${hour}`}
            style={{ gridArea: `hour-${hour}` }}
            className="bg-red-600 w-full h-full"
          >
            <Typography variant="body1">{convertHour(hour)}</Typography>
          </div>
        ))}

        <div
          className="p-2"
          style={{ gridArea: "task-2 /task-2 / task-3 / task-3" }}
        >
          <Task style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
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
