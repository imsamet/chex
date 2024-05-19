export type Icons =
  | "Check"
  | "Cross"
  | "Die1"
  | "Die2"
  | "Die3"
  | "Die4"
  | "Die5"
  | "Die6"
  | "En"
  | "Figma"
  | "Github"
  | "Left"
  | "Linkedin"
  | "Logo"
  | "Menu"
  | "Refresh"
  | "Right"
  | "Sms"
  | "Tr"
  | "Trush"
  | "Phone";

export type IconProps = {
  className?: string;
  name: Icons;
  width?: number;
  height?: number;
  color?: string;
};
