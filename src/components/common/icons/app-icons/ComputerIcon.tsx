export default function ComputerIcon({
  size = 20,
  className = "",
}: ComponentProps) {
  const ASPECT_RATIO = 19 / 34;
  return (
    <svg
      className={className}
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 34 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3659 16.5H0.000244141V17.6167H33.3659V16.5Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.5746 16.5H33.3657V17.6167H27.2193L26.5746 16.5Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.5746 16.5H33.3657V17.6167H27.2193L26.5746 16.5Z"
        fill="#383838"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.586263 18.1707H32.7795C33.1019 18.1707 33.3657 17.9069 33.3657 17.5845H0C0 17.9069 0.263829 18.1707 0.586263 18.1707Z"
        fill="#424242"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5391 18.1707H32.7794C33.1018 18.1707 33.3656 17.9069 33.3656 17.5845L27.2007 17.5845L27.5391 18.1707Z"
        fill="#595959"
      />
      <path
        d="M18.193 16.9504H15.1727V17.1235H18.193V16.9504Z"
        fill="#121212"
      />
      <path
        d="M18.193 16.9718H15.1727V17.1449H18.193V16.9718Z"
        fill="#424242"
      />
      <path
        d="M31.1813 16.9499H30.9645V17.1667H31.1813V16.9499Z"
        fill="#E53935"
      />
      <path
        d="M31.759 16.9499H31.5421V17.1667H31.759V16.9499Z"
        fill="#43A047"
      />
      <path
        d="M32.3366 16.9499H32.1198V17.1667H32.3366V16.9499Z"
        fill="#1E88E5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.02917 18.1707H1.54283C1.54283 18.2592 1.47042 18.3316 1.38191 18.3316H1.1901C1.10158 18.3316 1.02917 18.2592 1.02917 18.1707Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8229 18.1707H32.3365C32.3365 18.2592 32.2641 18.3316 32.1756 18.3316H31.9838C31.8953 18.3316 31.8229 18.2592 31.8229 18.1707Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.94119 16.1569H28.4246C28.802 16.1569 29.1107 15.8482 29.1107 15.4709V0.686061C29.1107 0.308719 28.8017 0 28.4246 0H4.94119C4.56406 0 4.25513 0.308939 4.25513 0.686061V15.4709C4.25513 15.848 4.56385 16.1569 4.94119 16.1569Z"
        fill="#121212"
      />
      <path
        d="M28.0118 1.12024H5.35388V15.0474H28.0118V1.12024Z"
        fill="#424242"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3804 1.12024L25.4212 15.0474H28.0118V1.12024H17.3804Z"
        fill="#595959"
      />
      <path
        d="M16.5756 0.672897C16.6338 0.732089 16.7289 0.732925 16.7881 0.674765C16.8473 0.616604 16.8482 0.521471 16.79 0.462279C16.7318 0.403087 16.6367 0.402251 16.5775 0.460412C16.5183 0.518573 16.5175 0.613706 16.5756 0.672897Z"
        fill="#424242"
      />
      <path
        d="M16.5999 0.649117C16.6449 0.694933 16.7186 0.69558 16.7644 0.650562C16.8102 0.605544 16.8109 0.531909 16.7658 0.486094C16.7208 0.440278 16.6472 0.439631 16.6014 0.484649C16.5556 0.529666 16.5549 0.603301 16.5999 0.649117Z"
        fill="#595959"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7658 0.486089C16.8108 0.531898 16.8102 0.605539 16.7644 0.650551C16.7559 0.658883 16.7464 0.665653 16.7364 0.670859C16.704 0.653565 16.676 0.622365 16.6603 0.581824C16.6429 0.536656 16.6447 0.489738 16.6616 0.453233C16.6983 0.446457 16.7377 0.457448 16.7658 0.486089Z"
        fill="#636363"
      />
    </svg>
  );
}

export type ComponentProps = {
  size?: number;
  className?: string;
};
