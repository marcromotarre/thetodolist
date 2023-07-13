import { useState } from "react";
import Button from "../common/button/Button";
import Calendar from "../common/calendar/Calendar";
import Card from "../common/card/Card";
import { CalendarIcon } from "../common/icons";
import Modal from "../common/modal/Modal";
import Typography from "../common/typography/Typography";

// react hook forms
// errores de validacion
export default function AddNewActivityModal({
  onClose = () => {},
}: ComponentProps) {
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="Add new Activity"></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2">
            {!isCalendarOpened && (
              <div className="flex justify-end">
                <Button
                  variant="text"
                  color="black"
                  onClick={() => setIsCalendarOpened(true)}
                  endIcon={<CalendarIcon />}
                >
                  25 Feb
                </Button>
              </div>
            )}
            {isCalendarOpened && (
              <Card style={{ width: "100%" }}>
                <Calendar />
              </Card>
            )}
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
        <Modal.Footer>
          <div className="flex justify-end">
            <Button size="small">Create</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

type ComponentProps = {
  onClose?: VoidFunction;
};
