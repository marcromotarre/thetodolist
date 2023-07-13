import { ReactElement } from "react";

const Title = ({ title, icon }: { icon?: ReactElement; title: string }) => {
  return (
    <div
      className={`grid ${
        icon ? "grid-cols-[max-content_auto]" : "grid-cols-1"
      } items-center justify-center gap-x-2`}
    >
      <div>{icon && icon}</div>
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default Title;
