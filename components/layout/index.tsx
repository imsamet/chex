import { ReactNode } from 'react';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { Loading } from '../loading';

type Props = {
  children: ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Loading />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
