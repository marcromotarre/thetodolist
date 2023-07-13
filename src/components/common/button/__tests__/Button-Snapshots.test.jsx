import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import Button from "../Button";
import { RectangleIcon } from "../../icons";

test("renders correct text button", async () => {
  const { asFragment } = render(<Button>TextButton</Button>);
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct icon button", async () => {
  const { asFragment } = render(<Button startIcon={<RectangleIcon />} />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct startIcon text button", async () => {
  const { asFragment } = render(
    <Button startIcon={<RectangleIcon />}>TextButton</Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct endIcon text button", async () => {
  const { asFragment } = render(
    <Button endIcon={<RectangleIcon />}>TextButton</Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct small button", async () => {
  const { asFragment } = render(
    <Button size="small" startIcon={<RectangleIcon />}>
      Small Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct medium button", async () => {
  const { asFragment } = render(
    <Button size="medium" startIcon={<RectangleIcon />}>
      Medium Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct large button", async () => {
  const { asFragment } = render(
    <Button size="large" startIcon={<RectangleIcon />}>
      Large Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct text variant button", async () => {
  const { asFragment } = render(
    <Button variant="text" startIcon={<RectangleIcon />}>
      Large Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct text contained button", async () => {
  const { asFragment } = render(
    <Button variant="contained" startIcon={<RectangleIcon />}>
      Contained Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct text outlined button", async () => {
  const { asFragment } = render(
    <Button variant="outlined" startIcon={<RectangleIcon />}>
      Contained Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct color button", async () => {
  const { asFragment } = render(
    <Button color="red" secondaryColor="black" startIcon={<RectangleIcon />}>
      Contained Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
