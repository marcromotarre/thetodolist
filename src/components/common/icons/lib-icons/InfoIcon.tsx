const InfoIcon = ({
  color = "black",
  size = 20,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M35.9985 17.759C35.8619 7.81963 27.6983 -0.127022 17.759 0.00153813C7.81963 0.130099 -0.127022 8.30173 0.00153813 18.2411C0.138134 28.1804 8.30173 36.1271 18.2411 35.9985C28.1804 35.8619 36.1351 27.6983 35.9985 17.759ZM18 6.42153C19.4222 6.42153 20.5712 7.57054 20.5712 8.99274C20.5712 10.4149 19.4222 11.564 18 11.564C16.5778 11.564 15.4288 10.4149 15.4288 8.99274C15.4288 7.57054 16.5778 6.42153 18 6.42153ZM21.5354 29.1687H14.4646V28.2849H16.2323V15.4288H14.4646V14.4646H19.7677V28.2849H21.5354V29.1687Z"
        fill={color}
      />
    </svg>
  );
};

export default InfoIcon;
