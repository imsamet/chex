import { Icons } from "@/components/icons/_model";

interface Router {
  href: string;
  label: string;
}
interface Social {
  href: string;
  icon: Icons;
}
export const router: Router[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/game",
    label: "Game",
  },
  {
    href: "/score",
    label: "Score",
  },
];
export const social: Social[] = [
  {
    icon: "Phone",
    href: "tel:+905078340555",
  },
  {
    icon: "Linkedin",
    href: "https://www.linkedin.com/in/imsametcetin/",
  },
  {
    icon: "Github",
    href: "https://github.com/imsamet",
  },
  {
    icon: "Figma",
    href: "https://www.figma.com/design/Oerh8AAQykw9dcszlVSWbV/Chex?m=auto&t=MzUtDyQwZwIpHrxq-6",
  },
  {
    icon: "Sms",
    href: "mailto:imsametcetin@gmail.com",
  },
];
