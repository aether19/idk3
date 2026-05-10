import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { navLinks, siteConfig } from '../data/siteData';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = location.pathname === '/';
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#080604]/98 border-b border-amber-line/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-[20px] font-normal text-warm-white tracking-normal hover:text-amber transition-colors duration-300"
            >
              {siteConfig.name}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-nav transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-amber'
                      : 'text-warm-white hover:text-amber'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="font-nav text-amber border border-amber rounded-sm px-6 py-2.5 hover:shadow-[0_0_0_2px_#C8922A] transition-all duration-300"
              >
                Book a Hunt
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[6px] p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-[2px] bg-amber" />
              <span className="block w-6 h-[2px] bg-amber" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#080604]/98 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 relative">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-6 h-[2px] bg-amber rotate-45 absolute" />
            <span className="block w-6 h-[2px] bg-amber -rotate-45 absolute" />
          </button>

          <Link
            to="/"
            className="font-display text-[20px] text-warm-white mb-4"
            onClick={() => setMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-[36px] font-light transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-amber'
                  : 'text-warm-white hover:text-amber'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="font-nav text-amber border border-amber rounded-sm px-8 py-3 mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Book a Hunt
          </Link>
        </div>
      </div>
    </>
  );
}
