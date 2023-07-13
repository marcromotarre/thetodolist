import Button from "../common/button/Button";
import Calendar from "../common/calendar/Calendar";
import Card from "../common/card/Card";
import { CalendarIcon } from "../common/icons";
import Modal from "../common/modal/Modal";
import Typography from "../common/typography/Typography";

export default function AddNewActivityModal({
  onClose = () => {},
}: ComponentProps) {
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="Add new Activity"></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="flex justify-end">
              <Button variant="text" color="black" endIcon={<CalendarIcon />}>
                25 Feb
              </Button>
            </div>
            <Card style={{ width: "100%" }}>
              <Calendar />
            </Card>
            <Typography>Activity Name</Typography>
            <input></input>
            <Typography>Category</Typography>
            <div className="flex justify-around">
              <div className="flex flex-col items-center justify-center">
                <Typography>Start time</Typography>
                <select></select>
              </div>
              <div>
                <Typography>End time</Typography>
                <select></select>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

type ComponentProps = {
  onClose?: VoidFunction;
};
