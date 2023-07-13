import { expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import Button from "../Button";
import { RectangleIcon } from "../../icons";
import {
  TEXT_SIZE_LARGE,
  TEXT_SIZE_MEDIUM,
  TEXT_SIZE_SMALL,
} from "../ButtonData";

test("should render the component", () => {
  const button = render(<Button>Text Button</Button>);
  button.unmount();
});

test("Button contains a <button /> HTML Tag", () => {
  const button = render(
    <Button onClick={() => {}} variant="text">
      Text Button
    </Button>
  );
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML).to.exist;
  button.unmount();
});

test("Button is clickable", () => {
  const mockCallback = vi.fn();
  const button = render(<Button onClick={mockCallback}>Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(mockCallback.mock.calls).toHaveLength(0);
  fireEvent.click(buttonHTML);
  expect(mockCallback.mock.calls).toHaveLength(1);
  button.unmount();
});

test("Button is hoverable", () => {
  const button = render(<Button variant="text">Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  fireEvent.mouseEnter(buttonHTML);
  expect(buttonHTML.getAttribute("style")).equals("background-color: white;");
  fireEvent.mouseLeave(buttonHTML);
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  button.unmount();
});

test("Button text", async () => {
  const button = render(<Button variant="text">Text Button</Button>);
  const buttonText = await button.findByTestId("typography-span");
  expect(buttonText.innerText).toBe("Text Button");
  button.unmount();
});

test("Button without text", () => {
  const button = render(<Button startIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("typography-span")).toBeFalsy();
  button.unmount();
});

test("Start Icon Button", async () => {
  const button = render(<Button startIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});

test("End Icon Button", async () => {
  const button = render(<Button endIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});

test("Start Icon Button with text", async () => {
  const button = render(
    <Button startIcon={<RectangleIcon />}>Icon Text Button</Button>
  );
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(2);
  const buttonIcon = buttonContent.children[0];
  const buttonText = buttonContent.children[1];
  expect(buttonText.innerText).toBe("Icon Text Button");
  expect(buttonIcon.tagName).toBe("SVG");
  button.unmount();
});

test("End Icon Button with text", async () => {
  const button = render(
    <Button endIcon={<RectangleIcon />}>Icon Text Button</Button>
  );
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(2);
  const buttonText = buttonContent.children[0];
  const buttonIcon = buttonContent.children[1];
  expect(buttonText.innerText).toBe("Icon Text Button");
  expect(buttonIcon.tagName).toBe("SVG");
  button.unmount();
});

test("Button text variant", () => {
  const button = render(<Button variant="text">Icon Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  button.unmount();
});

test("Button outlined variant", () => {
  const button = render(<Button variant="outlined">Icon Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  button.unmount();
});

test("Button small size", async () => {
  const button = render(
    <Button size="small" startIcon={<RectangleIcon />}>
      Icon Text Button
    </Button>
  );
  const buttonText = await button.findByTestId("typography-span");
  expect(buttonText.getAttribute("style")).includes(TEXT_SIZE_SMALL);
  const buttonContent = await button.findByTestId("button-content");
  const buttonIcon = buttonContent.children[0];
  expect(buttonIcon.getAttribute("width")).equals("15");
  button.unmount();
});

test("Button medium size", async () => {
  const button = render(
    <Button size="medium" startIcon={<RectangleIcon />}>
      Icon Text Button
    </Button>
  );
  const buttonText = await button.findByTestId("typography-span");
  expect(buttonText.getAttribute("style")).includes(TEXT_SIZE_MEDIUM);
  const buttonContent = await button.findByTestId("button-content");
  const buttonIcon = buttonContent.children[0];
  expect(buttonIcon.getAttribute("width")).equals("20");
  button.unmount();
});

test("Button large size", async () => {
  const button = render(
    <Button size="large" startIcon={<RectangleIcon />}>
      Icon Text Button
    </Button>
  );
  const buttonText = await button.findByTestId("typography-span");
  expect(buttonText.getAttribute("style")).includes(TEXT_SIZE_LARGE);
  const buttonContent = await button.findByTestId("button-content");
  const buttonIcon = buttonContent.children[0];
  expect(buttonIcon.getAttribute("width")).equals("25");
  button.unmount();
});

test("Button colored", async () => {
  const button = render(
    <Button startIcon={<RectangleIcon />} color="error" secondaryColor="yellow">
      Icon Text Button
    </Button>
  );
  const buttonHTML = await button.findByTestId("button");

  expect(buttonHTML.getAttribute("style")).equals("background-color: #d32f2f;");
  button.unmount();
});
