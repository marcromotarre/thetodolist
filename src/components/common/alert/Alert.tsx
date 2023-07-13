import { ReactElement, cloneElement } from "react";
import ALERT_CONSTS from "./constants";
import Typography from "../typography/Typography";

const Alert = ({
  children,
  severity = "success",
  variant = "default",
  icon = true,
}: {
  children?: string | ReactElement;
  severity?: "error" | "warning" | "info" | "success";
  color?: "error" | "warning" | "info" | "success";
  variant?: "filled" | "outlined" | "default";
  icon?: boolean | ReactElement;
}) => {
  const {
    borderColor,
    inColor,
    textColor,
    iconColor,
    icon: componentIcon,
  } = ALERT_CONSTS[severity];
  return (
    <div
      data-testid="alert"
      style={{
        borderColor: borderColor[variant],
        backgroundColor: inColor[variant],
      }}
      className="grid w-auto rounded-md border p-3"
    >
      <div
        data-testid="alert-content"
        className={`grid w-fit ${
          icon ? "grid-cols-[50px_auto]" : "grid-cols-1"
        } items-center justify-center`}
      >
        {icon
          ? icon === true
            ? cloneElement(componentIcon, {
                size: 30,
                color: iconColor[variant],
              })
            : cloneElement(icon, { size: 30, color: iconColor[variant] })
          : null}
        <div data-testid="alert-children" style={{ color: textColor[variant] }}>
          {typeof children === "string" ? (
            <Typography
              data-testid="alert-text"
              style={{ color: textColor[variant] }}
            >
              {children}
            </Typography>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
