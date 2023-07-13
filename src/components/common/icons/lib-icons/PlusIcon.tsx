export default function InfoIcon({
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
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" width="2" height="18" fill={color} />
      <rect
        x="18"
        y="8"
        width="2"
        height="18"
        transform="rotate(90 18 8)"
        fill={color}
      />
    </svg>
  );
}
