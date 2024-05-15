import { ReactNode } from "react";
import { Navigation } from "./navigation";

type Props = {
  children: ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};
