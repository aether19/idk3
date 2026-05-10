import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import SpeciesCard from '../components/SpeciesCard';
import { speciesList, siteConfig } from '../data/siteData';

export default function Hunts() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src="/assets/hunts-hero-elk.jpg"
          alt="Bull elk in alpine field"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,6,4,0.2) 0%, rgba(8,6,4,0.7) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 w-full">
          <ScrollReveal>
            <SectionEyebrow text="Wyoming Big Game" />
            <h1 className="font-display text-[44px] lg:text-[72px] font-light text-warm-white leading-[1.1]">
              Eleven Species. One Outfitter.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-black py-20">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-body text-[18px] text-warm-white leading-[1.75]">
              From trophy bull elk to mountain lion, Beaver Trap Outfitters runs
              fully guided hunts across some of the most productive terrain in the
              Bighorn Mountains. Every hunt is tailored to the species, the season,
              and the hunter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Species Grid */}
      <section className="bg-black grain-overlay pb-[120px] lg:pb-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speciesList.map((species, i) => (
              <ScrollReveal key={species.name} delay={(i % 3) * 0.12}>
                <SpeciesCard
                  name={species.name}
                  latin={species.latin}
                  description={species.description}
                  season={species.season}
                  image={species.image}
                  aspect="aspect-[3/4]"
                  showDetails
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-amber py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-display text-[18px] text-black">
              Ready to book your hunt? Call Ross directly.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
              className="font-display text-[28px] lg:text-[36px] font-light text-black mt-2 block hover:underline"
            >
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              className="font-small-caps text-black text-[14px] mt-2 inline-block hover:opacity-70 transition-opacity"
            >
              or send an inquiry &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
