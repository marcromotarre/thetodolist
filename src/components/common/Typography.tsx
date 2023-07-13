import { ReactElement, createElement } from "react";
import Styles from "../../types/style";
import TYPOGRAPHY_DATA from "./TypographyData";
import { FontType } from "./types/TypographyType";

const Typography = ({
  variant = "body1",
  children,
  paragraph,
  gutterBottom,
  component,
  className = "",
  style = {},
}: ComponentProps) => {
  const element = paragraph
    ? TYPOGRAPHY_DATA.paragraph.component
    : component
    ? TYPOGRAPHY_DATA[component].component
    : TYPOGRAPHY_DATA[variant].component;
  return createElement(
    element,
    {
      className: `${className} ${TYPOGRAPHY_DATA[variant].className} ${
        gutterBottom ? GUTTER_BOTTOM : ""
      }`,
      "data-testid": `typography-${element}`,
      style,
    },
    children,
  );
};

export default Typography;

const GUTTER_BOTTOM = "mb-3";

type ComponentProps = {
  component?: FontType;
  className?: string;
  variant?: FontType;
  children: ReactElement | string;
  paragraph?: boolean;
  gutterBottom?: boolean;
  style?: Styles;
  fontSize?: string;
};

Typography.defaultProps = {
  variant: "body1",
  paragraph: false,
  gutterBottom: false,
};
