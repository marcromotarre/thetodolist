export type FontType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

export type TypographyDataType = {
  h1: { component: string; className: string };
  h2: { component: string; className: string };
  h3: { component: string; className: string };
  h4: { component: string; className: string };
  h5: { component: string; className: string };
  h6: { component: string; className: string };
  subtitle1: { component: string; className: string };
  subtitle2: { component: string; className: string };
  body1: { component: string; className: string };
  body2: { component: string; className: string };
  button: { component: string; className: string };
  caption: { component: string; className: string };
  overline: { component: string; className: string };
  paragraph: { component: string; className: string };
};
