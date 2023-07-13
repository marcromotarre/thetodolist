import Styles from "../../types/style";
import { ComponentProps } from "./Button";

export const DEFAULT_BUTTON_COLOR = "rgb(96 165 250)";
export const SUCCESS_BUTTON_COLOR = "#2e7d32";
export const ERROR_BUTTON_COLOR = "#d32f2f";

export const ICON_SIZE_SMALL = "15";
export const ICON_SIZE_MEDIUM = "20";
export const ICON_SIZE_LARGE = "25";

export const TEXT_SIZE_SMALL = "0.7rem";
export const TEXT_SIZE_MEDIUM = "0.875rem";
export const TEXT_SIZE_LARGE = "1.25rem";

const BUTTON_COLORS: Colors = {
  success: SUCCESS_BUTTON_COLOR,
  error: ERROR_BUTTON_COLOR,
  default: DEFAULT_BUTTON_COLOR,
};

const BUTTON_TEXT_STYLE = (buttonProps: ButtonProps) => ({
  backgroundColor: buttonProps.isHovering ? "white" : "transparent",
});

const BUTTON_CONTAINED_STYLE = (buttonProps: ButtonProps) => ({
  backgroundColor: buttonProps.color,
});

const BUTTON_OUTLINED_STYLE = (buttonProps: ButtonProps) => ({
  backgroundColor: buttonProps.isHovering ? "white" : "transparent",
  border: buttonProps.color ? `1px solid ${buttonProps.color}` : "",
});

const BUTTON_STYLE = (buttonProps: ButtonProps) => {
  const style = {
    text: BUTTON_TEXT_STYLE(buttonProps),
    contained: BUTTON_CONTAINED_STYLE(buttonProps),
    outlined: BUTTON_OUTLINED_STYLE(buttonProps),
  };
  return buttonProps.variant ? style[buttonProps.variant] : {};
};

const BUTTON_CLASSNAME = (buttonProps: ButtonProps) => {
  const sharedClassNames = `flex h-fit w-max items-center justify-center bg-transparent hover:bg-white hover:brightness-95`;
  const classNameBySize = {
    small: "p-2",
    medium: "p-3",
    large: "p-4",
  };

  const classNameByShape = {
    default: "rounded-md",
    rounded: "rounded-full",
    rect: "",
  };

  return `${sharedClassNames} ${
    buttonProps.size ? classNameBySize[buttonProps.size] : ""
  } ${buttonProps.shape ? classNameByShape[buttonProps.shape] : ""}`;
};

const BUTTON_CONTENT_STYLE = (buttonProps: ButtonProps) => {
  const style = {
    text: { color: buttonProps.color },
    contained: { color: buttonProps.secondaryColor },
    outlined: { color: buttonProps.color },
  };
  return buttonProps.variant ? style[buttonProps.variant] : {};
};

const BUTTON_ICON_COLOR = (buttonProps: ButtonProps) => {
  const style = {
    text: buttonProps.color,
    contained: buttonProps.secondaryColor,
    outlined: buttonProps.color,
  };
  return buttonProps.variant ? style[buttonProps.variant] : "";
};

const BUTTON_ICON_SIZE = (buttonProps: ButtonProps) => {
  const style = {
    small: ICON_SIZE_SMALL,
    medium: ICON_SIZE_MEDIUM,
    large: ICON_SIZE_LARGE,
  };
  return buttonProps.size ? style[buttonProps.size] : "";
};

const BUTTON_TEXT_SIZE = (buttonProps: ButtonProps) => {
  const style = {
    small: TEXT_SIZE_SMALL,
    medium: TEXT_SIZE_MEDIUM,
    large: TEXT_SIZE_LARGE,
  };
  return buttonProps.size ? style[buttonProps.size] : "";
};

interface ButtonProps extends ComponentProps {
  isHovering?: boolean;
}

type ButtonConfiguration = {
  button: {
    className: string;
    style: Styles;
  };
  buttonContent: {
    className: string;
    style: Styles;
  };
  buttonText: {
    className: string;
    style: Styles;
  };
  buttonStartIcon: {
    className: string;
    iconProps: {
      color?: string;
      size?: string;
    };
  };
  buttonEndIcon: {
    className: string;
    iconProps: {
      color?: string;
      size?: string;
    };
  };
};
type Colors = { [k: string]: string };

const BUTTON_DATA = (buttonProps: ButtonProps): ButtonConfiguration => {
  const buttonColor =
    buttonProps.color && BUTTON_COLORS[buttonProps.color]
      ? BUTTON_COLORS[buttonProps.color]
      : buttonProps.color;

  const modifiedButtonProps = { ...buttonProps, color: buttonColor };

  return {
    button: {
      className: BUTTON_CLASSNAME(modifiedButtonProps),
      style: BUTTON_STYLE(modifiedButtonProps),
    },
    buttonContent: {
      className: "flex items-center justify-center",
      style: BUTTON_CONTENT_STYLE(modifiedButtonProps),
    },
    buttonStartIcon: {
      className: "",
      iconProps: {
        color: BUTTON_ICON_COLOR(modifiedButtonProps),
        size: BUTTON_ICON_SIZE(modifiedButtonProps),
      },
    },
    buttonEndIcon: {
      className: "",
      iconProps: {
        color: BUTTON_ICON_COLOR(modifiedButtonProps),
        size: BUTTON_ICON_SIZE(modifiedButtonProps),
      },
    },
    buttonText: {
      className: "ml-2 mr-2",
      style: {
        color: BUTTON_ICON_COLOR(modifiedButtonProps),
        fontSize: BUTTON_TEXT_SIZE(modifiedButtonProps),
      },
    },
  };
};
export default BUTTON_DATA;
