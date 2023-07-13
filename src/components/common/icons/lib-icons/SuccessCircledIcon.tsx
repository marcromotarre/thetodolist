const SuccessCircledIcon = ({
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
      className={className}
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 32C18.1667 32 17.3333 31.6667 16.6667 31L10 24.3333C8.66667 23 8.66667 21 10 19.6667C11.3333 18.3333 13.5 18.3333 14.6667 19.6667L19 24L30 13C31.3333 11.6667 33.3333 11.6667 34.6667 13C36 14.3333 36 16.3333 34.6667 17.6667L21.3333 31C20.6667 31.6667 19.8333 32 19 32Z"
        fill={color ? "transparent" : innerColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44ZM16.6667 31C17.3333 31.6667 18.1667 32 19 32C19.8333 32 20.6667 31.6667 21.3333 31L34.6667 17.6667C36 16.3333 36 14.3333 34.6667 13C33.3333 11.6667 31.3333 11.6667 30 13L19 24L14.6667 19.6667C13.5 18.3333 11.3333 18.3333 10 19.6667C8.66667 21 8.66667 23 10 24.3333L16.6667 31Z"
        fill={color ? color : circleColor}
      />
    </svg>
  );
};

export default SuccessCircledIcon;
