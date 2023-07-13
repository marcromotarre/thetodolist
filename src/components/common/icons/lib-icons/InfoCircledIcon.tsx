const InfoCircledIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM19 21C19 19.3425 20.3425 18 22 18C23.6575 18 25 19.3425 25 21L25 33C25 34.6575 23.6575 36 22 36C20.3425 36 19 34.6575 19 33L19 21ZM22 9C20.3425 9 19 10.3425 19 12C19 13.6575 20.3425 15 22 15C23.6575 15 25 13.6575 25 12C25 10.3425 23.6575 9 22 9Z"
        fill={color ? color : circleColor}
      />
      <path
        d="M19 21C19 19.3425 20.3425 18 22 18C23.6575 18 25 19.3425 25 21L25 33C25 34.6575 23.6575 36 22 36C20.3425 36 19 34.6575 19 33L19 21Z"
        fill={color ? "transparent" : innerColor}
      />
      <path
        d="M19 12C19 10.3425 20.3425 9 22 9C23.6575 9 25 10.3425 25 12C25 13.6575 23.6575 15 22 15C20.3425 15 19 13.6575 19 12Z"
        fill={color ? "transparent" : innerColor}
      />
    </svg>
  );
};

export default InfoCircledIcon;
