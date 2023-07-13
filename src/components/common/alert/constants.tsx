import {
  ErrorCircledIcon,
  InfoCircledIcon,
  SuccessCircledIcon,
  WarningIcon,
} from "../icons";

export const SUCCESS_DARK_COLOR = "#4E9635";
export const SUCCESS_LIGHT_COLOR = "#EDF6EA";

export const INFO_DARK_COLOR = "#2045FB";
export const INFO_LIGHT_COLOR = "#F4F7FF";

export const ERROR_DARK_COLOR = "#E22B04";
export const ERROR_LIGHT_COLOR = "#FDE9E7";

export const WARNING_DARK_COLOR = "#EFA434";
export const WARNING_LIGHT_COLOR = "#FEF8E6";

export default {
  error: {
    icon: <ErrorCircledIcon />,
    textColor: {
      default: ERROR_DARK_COLOR,
      outlined: ERROR_DARK_COLOR,
      filled: "white",
    },
    inColor: {
      default: ERROR_LIGHT_COLOR,
      outlined: "transparent",
      filled: ERROR_DARK_COLOR,
    },
    borderColor: {
      default: "#DDBAB3",
      outlined: ERROR_DARK_COLOR,
      filled: "transparent",
    },
    iconColor: {
      default: ERROR_DARK_COLOR,
      outlined: ERROR_DARK_COLOR,
      filled: "white",
    },
  },
  warning: {
    icon: <WarningIcon />,
    textColor: {
      default: WARNING_DARK_COLOR,
      outlined: WARNING_DARK_COLOR,
      filled: "white",
    },
    inColor: {
      default: WARNING_LIGHT_COLOR,
      outlined: "transparent",
      filled: WARNING_DARK_COLOR,
    },
    borderColor: {
      default: "#EEE2CB",
      outlined: WARNING_DARK_COLOR,
      filled: "transparent",
    },
    iconColor: {
      default: WARNING_DARK_COLOR,
      outlined: WARNING_DARK_COLOR,
      filled: "white",
    },
  },
  success: {
    icon: <SuccessCircledIcon />,
    textColor: {
      default: SUCCESS_DARK_COLOR,
      outlined: SUCCESS_DARK_COLOR,
      filled: "white",
    },
    inColor: {
      default: SUCCESS_LIGHT_COLOR,
      outlined: "transparent",
      filled: SUCCESS_DARK_COLOR,
    },
    borderColor: {
      default: "#DDBAB3",
      outlined: SUCCESS_DARK_COLOR,
      filled: "transparent",
    },
    iconColor: {
      default: SUCCESS_DARK_COLOR,
      outlined: SUCCESS_DARK_COLOR,
      filled: "white",
    },
  },
  info: {
    icon: <InfoCircledIcon />,
    textColor: {
      default: INFO_DARK_COLOR,
      outlined: INFO_DARK_COLOR,
      filled: "white",
    },
    inColor: {
      default: INFO_LIGHT_COLOR,
      outlined: "transparent",
      filled: INFO_DARK_COLOR,
    },
    borderColor: {
      default: "#C0C4E0",
      outlined: INFO_DARK_COLOR,
      filled: "transparent",
    },
    iconColor: {
      default: INFO_DARK_COLOR,
      outlined: INFO_DARK_COLOR,
      filled: "white",
    },
  },
};
