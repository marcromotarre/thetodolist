const ErrorCircledIcon = ({
  color,
  innerColor = "transparent",
  circleColor = "black",
  size = 20,
  className = "",
}: {
  color?: string;
  innerColor?: string;
  circleColor?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44ZM9.9519 14.5481L17.4038 22L9.9519 29.4519L14.5481 34.0481L22 26.5963L29.4519 34.0481L34.0481 29.4519L26.5961 22L34.0481 14.5481L29.4519 9.95195L22 17.4039L14.5481 9.95195L9.9519 14.5481Z"
        fill={color ? color : circleColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4038 22L9.9519 14.5481L14.5481 9.9519L22 17.4038L29.4519 9.9519L34.0481 14.5481L26.5962 22L34.0481 29.4519L29.4519 34.048L22 26.5963L14.5481 34.048L9.9519 29.4519L17.4038 22Z"
        fill={color ? "transparent" : innerColor}
      />
    </svg>
  );
};

export default ErrorCircledIcon;
