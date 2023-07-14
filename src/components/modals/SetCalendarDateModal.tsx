import Calendar from "../common/calendar/Calendar";
import Modal from "../common/modal/Modal";
import Typography from "../common/typography/Typography";

export default function SetCalendarDateModal({
  defaultDate = new Date(),
  onClose = () => {},
}: ComponentProps) {
  function onClickDay(date?: Date) {
    if (date) {
      onClose(date);
    } else onClose();
  }
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header title="Select a Date"></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>Select a Day for the Activity</Typography>
            <Calendar date={defaultDate} onClick={onClickDay} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

type ComponentProps = {
  defaultDate?: Date;
  onClose?: (date?: Date) => void;
};
