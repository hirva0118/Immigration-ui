import React, { type ReactNode } from 'react'
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-bgGreen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
