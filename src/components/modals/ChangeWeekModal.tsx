import { useState } from "react";
import Button from "../common/button/Button";
import Calendar from "../common/calendar/Calendar";
import Card from "../common/card/Card";
import { CalendarIcon } from "../common/icons";
import Modal from "../common/modal/Modal";
import Typography from "../common/typography/Typography";

// react hook forms
// errores de validacion
export default function ChangeWeekModal({
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
        <Modal.Header title="Select the Week"></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>Select the week you want to see</Typography>
            <Calendar completed selection="week" onClick={onClickDay} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

type ComponentProps = {
  onClose?: (date?: Date) => VoidFunction;
};
