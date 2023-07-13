import { ReactElement } from "react";
import Styles from "../../types/style";

const Card = ({ children, type = "type1", style = {} }: ComponentProps) => {
  return (
    <div style={style} className={`w-fit rounded-md p-6 ${shadows[type]}`}>
      {children}
    </div>
  );
};

export default Card;

type ComponentProps = {
  children: ReactElement | ReactElement[];
  style?: Styles;
  type?: "type1" | "type2" | "type3";
};

const shadows = {
  type1:
    "shadow-[rgba(50,_50,_93,_0.25)_0px_2px_5px_-1px,_rgba(0,_0,_0,_0.3)_0px_1px_3px_-1px]",
  type2:
    "shadow-[rgba(0,_0,_0,_0.07)_0px_1px_2px,_rgba(0,_0,_0,_0.07)_0px_2px_4px,_rgba(0,_0,_0,_0.07)_0px_4px_8px,_rgba(0,_0,_0,_0.07)_0px_8px_16px,_rgba(0,_0,_0,_0.07)_0px_16px_32px,_rgba(0,_0,_0,_0.07)_0px_32px_64px]",
  type3: "shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]",
};
