export default function LeftIcon({
  color = "black",
  size = 20,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const ASPECT_RATIO = 24 / 15;
  return (
    <svg
      className={className}
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.83 21.17L5.66 12L14.83 2.83L12 0L0 12L12 24L14.83 21.17Z"
        fill={color}
      />
    </svg>
  );
}
