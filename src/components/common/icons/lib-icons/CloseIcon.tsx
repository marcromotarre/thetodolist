export default function CloseIcon({
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
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="1.41418"
        width="2"
        height="22"
        rx="1"
        transform="rotate(-45 0 1.41418)"
        className={className}
        fill={color}
      />
      <rect
        x="15.5563"
        width="2"
        height="22"
        rx="1"
        transform="rotate(45 15.5563 0)"
        className={className}
        fill={color}
      />
    </svg>
  );
}
