import { TypographyDataType } from "./types/TypographyType";

const TYPOGRAPHY_DATA: TypographyDataType = {
  h1: {
    component: "h1",
    className: `sm:text-5xl md:text-6xl lg:text-6xl font-normal`,
  },
  h2: {
    component: "h2",
    className: `sm:text-4xl md:text-5xl lg:text-5xl font-normal`,
  },

  h3: {
    component: "h3",
    className: `sm:text-3xl md:text-4xl lg:text-4xl font-normal`,
  },

  h4: {
    component: "h4",
    className: `sm:text-2xl md:text-3xl lg:text-3xl font-normal`,
  },

  h5: {
    component: "h5",
    className: `sm:text-xl md:text-2xl lg:text-2xl font-normal`,
  },
  h6: {
    component: "h6",
    className: `sm:text-lg md:text-xl lg:text-xl font-normal`,
  },
  subtitle1: {
    component: "h6",
    className: `sm:text-sm md:text-base lg:text-base font-normal`,
  },
  subtitle2: {
    component: "h6",
    className: `text-sm`,
  },
  body1: {
    component: "p",
    className: `sm:text-sm md:text-base lg:text-base font-light`,
  },
  body2: {
    component: "p",
    className: `sm:text-xs md:text-sm lg:text-sm font-normal`,
  },
  button: {
    component: "span",
    className: `sm:text-xs md:text-sm lg:text-sm uppercase font-medium`,
  },
  caption: {
    component: "span",
    className: `sm:text-xs md:text-sm lg:text-sm font-normal`,
  },
  overline: {
    component: "span",
    className: `sm:text-xs md:text-sm lg:text-sm font-normal`,
  },
  paragraph: {
    component: "p",
    className: `sm:text-sm md:text-base lg:text-base font-light`,
  },
};

export default TYPOGRAPHY_DATA;
