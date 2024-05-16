export type Icons =
  | "Check"
  | "Cross"
  | "En"
  | "Figma"
  | "Github"
  | "Left"
  | "Linkedin"
  | "Logo"
  | "Refresh"
  | "Right"
  | "Sms"
  | "Tr"
  | "Trush"
  | "Phone";

export type IconProps = {
  name: Icons;
  width?: number;
  height?: number;
  color?: string;
};
