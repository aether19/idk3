import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import PhotoStrip from '../components/PhotoStrip';
import { campDetails } from '../data/siteData';

const campStripImages = [
  { src: '/assets/campstrip-1.jpg', alt: 'Campfire at dusk' },
  { src: '/assets/campstrip-2.jpg', alt: 'Horse at dawn' },
  { src: '/assets/campstrip-3.jpg', alt: 'Camp breakfast' },
  { src: '/assets/campstrip-4.jpg', alt: 'Riding mountain trail' },
];

export default function HuntCamp() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src="/assets/camppage-hero.jpg"
          alt="Mountain hunting camp at dawn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,6,4,0.15) 0%, rgba(8,6,4,0.65) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 w-full">
          <ScrollReveal>
            <SectionEyebrow text="Base Camp" />
            <h1 className="font-display text-[32px] lg:text-[56px] font-light text-warm-white leading-[1.15] max-w-[800px]">
              Where You Sleep. What You Eat. How You Hunt.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Camp Description */}
      <section className="bg-black grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <p className="font-body text-[18px] text-warm-white leading-[1.75]">
                Beaver Trap runs a fully outfitted camp deep in the Bighorns.
                Comfortable wall tents, wood stoves, hot meals, and the kind of
                setup that lets you focus on the hunt — not logistics. Horses and
                pack stock handle the terrain so you save your legs for when it
                counts.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                <div className="border-2 border-amber-line/50 overflow-hidden">
                  <img
                    src="/assets/camp-tent.jpg"
                    alt="Wall tent interior"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="border-2 border-amber-line/50 overflow-hidden">
                  <img
                    src="/assets/camp-horses.jpg"
                    alt="Pack horses at camp"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Camp Details Grid */}
      <section className="bg-surface grain-overlay py-[80px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {campDetails.map((detail, i) => (
              <ScrollReveal key={detail.label} delay={i * 0.1}>
                <div className="border-t border-amber-line/50 p-8 lg:p-10">
                  <span className="font-eyebrow text-amber tracking-[0.2em]">
                    {detail.label}
                  </span>
                  <p className="font-body text-[16px] text-warm-white leading-[1.75] mt-3">
                    {detail.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <PhotoStrip images={campStripImages} height="h-[350px]" />

      {/* CTA */}
      <section className="bg-black py-[80px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Link
              to="/contact"
              className="inline-block font-display text-[14px] tracking-[0.1em] font-variant-small-caps uppercase bg-amber text-black px-8 py-3.5 rounded-sm hover:bg-amber-light hover:scale-[1.02] transition-all duration-300"
            >
              Plan Your Hunt
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
