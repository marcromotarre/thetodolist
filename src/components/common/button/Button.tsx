import { ReactElement, cloneElement, useState } from "react";
import Typography from "../typography/Typography";
import BUTTON_DATA from "./ButtonData";

const Button: React.FC<ComponentProps> = (props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const buttonData = BUTTON_DATA({ ...props, isHovering });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      disabled={props.disabled}
      data-testid="button"
      onClick={props.onClick}
      style={buttonData.button.style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={buttonData.button.className}
    >
      <div
        className={buttonData.buttonContent.className}
        data-testid="button-content"
      >
        {props.startIcon &&
          cloneElement(props.startIcon, {
            ...buttonData.buttonStartIcon.iconProps,
          })}
        {props.children && (
          <Typography
            className={buttonData.buttonText.className}
            variant="button"
            style={buttonData.buttonText.style}
          >
            {props.children}
          </Typography>
        )}
        {props.endIcon &&
          cloneElement(props.endIcon, {
            ...buttonData.buttonEndIcon.iconProps,
          })}
      </div>
    </button>
  );
};

export default Button;

export type ComponentProps = {
  children?: string;
  variant?: "outlined" | "text" | "contained";
  shape?: "default" | "rect" | "rounded";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  color?: "error" | "default" | "success" | string;
  secondaryColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

Button.defaultProps = {
  variant: "contained",
  color: "default",
  secondaryColor: "white",
  size: "medium",
  shape: "default",
  disabled: false,
};
