import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Alert from "../Alert";
import { RectangleIcon } from "../../icons";

test("it should render the component", () => {
  const alert = render(<Alert>Message</Alert>);
  alert.unmount();
});

test("Alert renders plain text message", async () => {
  const alert = render(<Alert>Alert Message</Alert>);
  const alertText = await alert.findByTestId("alert-text");
  expect(alertText.innerText).toBe("Alert Message");
  alert.unmount();
});

test("Alert renders children", async () => {
  const alert = render(
    <Alert>
      <>
        <p>
          <span>Alert</span>Message
        </p>
      </>
    </Alert>
  );
  const alertChildren = await alert.findByTestId("alert-children");
  expect(alertChildren.children[0].tagName).toBe("P");
  expect(alertChildren.children[0].children[0].tagName).toBe("SPAN");
  alert.unmount();
});

test("Alert renders the icon", async () => {
  const alert = render(<Alert>Alert Message</Alert>);
  const alertContent = await alert.findByTestId("alert-content");
  expect(alertContent.children[0].tagName).toBe("SVG");
  alert.unmount();
});

test("Alert with icon prop to false does not render the icon", async () => {
  const alert = render(<Alert icon={false}>Message</Alert>);
  const alertContent = await alert.findByTestId("alert-content");
  expect(alertContent.children[0].tagName).not.toBe("div");
  alert.unmount();
});

test("Alert with new icon as prop overrides icon", async () => {
  const alert = render(<Alert icon={<RectangleIcon />}>Message</Alert>);
  const alertContent = await alert.findByTestId("alert-content");
  expect(alertContent.children[0].getAttribute("data-testid")).equals(
    "rectangle-icon"
  );
  alert.unmount();
});
