import { ReactNode } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

type Props = {
  children: ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
