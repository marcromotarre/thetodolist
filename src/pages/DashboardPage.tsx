import Typography from "../components/common/typography/Typography";
import Button from "../components/common/button/Button";
import { CalendarIcon, PlusIcon } from "../components/common/icons";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-y-2 p-2">
      <div className="absolute right-2 top-2">
        <Button
          onClick={() => {
            navigate("/tasks");
          }}
          color="white"
          secondaryColor="black"
          endIcon={<CalendarIcon />}
        >
          25 Feb
        </Button>
      </div>
      <Typography variant="h1">Hi, Marc</Typography>
      <Typography variant="body1">10 tasks pending</Typography>
    </div>
  );
}
