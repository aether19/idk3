import { Link } from 'react-router';
import { siteConfig, speciesList } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-line/50 grain-overlay">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link
              to="/"
              className="font-display text-[20px] font-normal text-warm-white"
            >
              {siteConfig.name}
            </Link>
            <p className="font-body text-[14px] text-warm-muted leading-relaxed mt-4 max-w-[280px]">
              Trophy big game hunting in Wyoming's Bighorn Mountains
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-small-caps text-warm-muted hover:text-amber transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-small-caps text-warm-muted hover:text-amber transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Column 2: Hunts */}
          <div>
            <h4 className="font-eyebrow text-amber mb-6">Hunts</h4>
            <ul className="space-y-2">
              {speciesList.map((s) => (
                <li key={s.name}>
                  <Link
                    to="/hunts"
                    className="font-small-caps text-warm-muted hover:text-amber transition-colors duration-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-eyebrow text-amber mb-6">Contact</h4>
            <div className="space-y-2">
              <p className="font-small-caps text-warm-muted">
                {siteConfig.name}
              </p>
              <p className="font-small-caps text-warm-muted">
                {siteConfig.location}
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
                className="font-small-caps text-warm-muted hover:text-amber transition-colors duration-300 block"
              >
                {siteConfig.phone}
              </a>
              <Link
                to="/contact"
                className="font-small-caps text-warm-muted hover:text-amber transition-colors duration-300"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-line/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-small-caps text-[11px] tracking-[0.1em] text-warm-muted">
            {siteConfig.license}
          </span>
          <span className="font-small-caps text-[11px] tracking-[0.1em] text-warm-muted">
            &copy; {siteConfig.year} {siteConfig.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
