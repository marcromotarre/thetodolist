export default function PhoneIcon({
  size = 20,
  className = "",
  color = "black",
}: ComponentProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.22222 6.92889C4.50222 9.44444 6.56 11.5022 9.08 12.7822L11.0356 10.8222C11.28 10.5778 11.6311 10.5067 11.9378 10.6044C12.9333 10.9333 14.0044 11.1111 15.1111 11.1111C15.6044 11.1111 16 11.5067 16 12V15.1111C16 15.6044 15.6044 16 15.1111 16C6.76444 16 0 9.23556 0 0.888889C0 0.395556 0.4 0 0.888889 0H4C4.49333 0 4.88889 0.395556 4.88889 0.888889C4.88889 1.99556 5.06667 3.06667 5.39556 4.06222C5.49333 4.36889 5.42222 4.72 5.17778 4.96444L3.22222 6.92889Z"
        fill={color}
      />
    </svg>
  );
}

export type ComponentProps = {
  color?: string;
  size?: number;
  className?: string;
};
