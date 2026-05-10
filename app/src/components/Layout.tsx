import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Navigation from './Navigation';
import Footer from './Footer';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-[100dvh] bg-black">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
