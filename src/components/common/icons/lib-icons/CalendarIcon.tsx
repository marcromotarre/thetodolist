export default function CalendarIcon({
  color = "black",
  size = 20,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 6V3H16V4H14V3H6V4H4V3H2V6H18ZM18 8H2V18H18V8ZM16 1H18C19.1046 1 20 1.89543 20 3V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V3C0 1.89543 0.89543 1 2 1H4V0H6V1H14V0H16V1ZM7 12H5V10H7V12ZM11 12H9V10H11V12ZM15 12H13V10H15V12ZM7 16H5V14H7V16ZM11 16H9V14H11V16Z"
        fill={color}
      />
    </svg>
  );
}
