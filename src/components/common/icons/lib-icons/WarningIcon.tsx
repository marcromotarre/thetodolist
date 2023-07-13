const WarningIcon = ({
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
  const ASPECT_RATIO = 0.88636363636;
  return (
    <svg
      className={className}
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 44 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 23.5112C25 25.1687 23.6575 26.5112 22 26.5112C20.3425 26.5112 19 25.1687 19 23.5112V11.5112C19 9.85373 20.3425 8.51123 22 8.51123C23.6575 8.51123 25 9.85373 25 11.5112V23.5112Z"
        fill={color ? "transparent" : innerColor}
      />
      <path
        d="M25 32.5112C25 34.1687 23.6575 35.5112 22 35.5112C20.3425 35.5112 19 34.1687 19 32.5112C19 30.8537 20.3425 29.5112 22 29.5112C23.6575 29.5112 25 30.8537 25 32.5112Z"
        fill={color ? "transparent" : innerColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.35537 38.8686C0.584386 38.8686 -1.36738 35.4877 1.01811 31.3564L17.3327 3.09924C19.7182 -1.03308 23.6217 -1.03308 26.0072 3.09924L42.3218 31.3564C44.7073 35.4888 42.7555 38.8686 37.9845 38.8686H5.35537ZM25 23.5112C25 25.1687 23.6575 26.5112 22 26.5112C20.3425 26.5112 19 25.1687 19 23.5112V11.5112C19 9.85373 20.3425 8.51123 22 8.51123C23.6575 8.51123 25 9.85373 25 11.5112V23.5112ZM22 35.5112C23.6575 35.5112 25 34.1687 25 32.5112C25 30.8537 23.6575 29.5112 22 29.5112C20.3425 29.5112 19 30.8537 19 32.5112C19 34.1687 20.3425 35.5112 22 35.5112Z"
        fill={color ? color : circleColor}
      />
    </svg>
  );
};

export default WarningIcon;
