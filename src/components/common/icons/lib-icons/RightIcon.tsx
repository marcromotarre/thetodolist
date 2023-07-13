export default function Right({
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
        d="M-4.20183e-05 2.83L9.16996 12L-4.36216e-05 21.17L2.82996 24L14.83 12L2.82996 -1.04907e-06L-4.20183e-05 2.83Z"
        fill={color}
      />
    </svg>
  );
}
