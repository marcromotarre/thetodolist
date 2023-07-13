import { ReactElement } from "react";
import { ComputerIcon, PhoneIcon } from "../components/common/icons";

const CategoriesData: Categories = {
  computer: {
    icon: <ComputerIcon />,
    name: "computer",
    backgroundColor: "#EDEFF1",
  },
  call: {
    icon: <PhoneIcon size={15} />,
    name: "call",
    backgroundColor: "#EDEFF1",
  },
};

export default CategoriesData;

export type Categories = {
  [key in CategoryTypes]: Category;
};
export type CategoryTypes = "computer" | "call";

export type Category = {
  icon: ReactElement;
  name: string;
  backgroundColor: string;
};
