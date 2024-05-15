export type Icons =
  | "Check"
  | "Cross"
  | "Figma"
  | "Github"
  | "Left"
  | "Linkedin"
  | "Logo"
  | "Refresh"
  | "Right"
  | "Sms"
  | "Trush"
  | "Phone";

export type IconProps = {
  name: Icons;
  width?: number;
  height?: number;
  color?: string;
};
