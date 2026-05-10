import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import SpeciesCard from '../components/SpeciesCard';
import TestimonialCard from '../components/TestimonialCard';
import PhotoStrip from '../components/PhotoStrip';
import { speciesList, testimonials, siteConfig } from '../data/siteData';

const featuredSpecies = speciesList.filter((s) => s.featured);
const homeTestimonials = testimonials.slice(0, 3);

const stripImages = [
  { src: '/assets/strip-mountains-1.jpg', alt: 'Bighorn Mountains' },
  { src: '/assets/strip-camp.jpg', alt: 'Hunting Camp' },
  { src: '/assets/strip-elk-field.jpg', alt: 'Elk in meadow' },
  { src: '/assets/strip-river.jpg', alt: 'Mountain River' },
  { src: '/assets/strip-trail.jpg', alt: 'Horse trail' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Hero image fade
      tl.fromTo(
        imgRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
      );

      // Word-by-word headline
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      }

      // Eyebrow
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.2'
      );

      // Subline
      tl.fromTo(
        '.hero-subline',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );

      // CTAs
      tl.fromTo(
        '.hero-cta',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.15'
      );

      // Bottom elements
      tl.fromTo(
        '.hero-bottom',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.1'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = "Trophy Big Game Hunts in Wyoming's Bighorn Mountains".split(' ');

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[100dvh] overflow-hidden">
        <img
          ref={imgRef}
          src="/assets/hero-mountains.jpg"
          alt="Bighorn Mountains at golden hour"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,6,4,0.15) 0%, rgba(8,6,4,0.6) 55%, rgba(8,6,4,0.96) 100%)',
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-24 px-6 lg:px-8 max-w-[1280px] mx-auto">
          <div className="hero-eyebrow opacity-0">
            <SectionEyebrow text="Bighorn Mountains — Dayton, Wyoming" />
          </div>
          <h1
            ref={headlineRef}
            className="font-display text-[52px] md:text-[72px] lg:text-[96px] font-light text-warm-white leading-[1.05] tracking-[-0.02em] -ml-[2vw]"
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em] opacity-0">
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-subline opacity-0 font-body text-[16px] lg:text-[18px] text-warm-muted leading-[1.75] max-w-[560px] mt-6">
            Fully guided, fully outfitted. Elk, mule deer, moose, mountain lion
            and more — on some of Wyoming's most rugged terrain.
          </p>
          <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-block font-display text-[14px] tracking-[0.1em] font-variant-small-caps uppercase bg-amber text-black px-8 py-3.5 rounded-sm text-center hover:bg-amber-light hover:scale-[1.02] transition-all duration-300"
            >
              Book a Hunt
            </Link>
            <Link
              to="/hunts"
              className="inline-block font-display text-[14px] tracking-[0.1em] font-variant-small-caps uppercase border border-amber text-amber px-8 py-3.5 rounded-sm text-center hover:shadow-[0_0_0_2px_#C8922A] transition-all duration-300"
            >
              View Hunts &rarr;
            </Link>
          </div>

          {/* Bottom corners */}
          <div className="hero-bottom opacity-0 absolute bottom-8 left-6 lg:left-8 hidden lg:block">
            <span className="font-eyebrow text-amber text-[11px] tracking-[0.2em]">
              Scroll
            </span>
            <div className="w-9 h-[1px] bg-amber mt-2" />
          </div>
          <div className="hero-bottom opacity-0 absolute bottom-8 right-6 lg:right-8">
            <a
              href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
              className="font-eyebrow text-amber text-[11px] tracking-[0.15em] hover:text-warm-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Hunt Preview Section */}
      <section className="bg-black grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionEyebrow text="What We Hunt" />
            <h2 className="font-display text-[36px] lg:text-[52px] font-light text-warm-white leading-[1.1] tracking-[-0.01em]">
              Eleven Species. One Mountain Range.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {featuredSpecies.map((species, i) => (
              <ScrollReveal key={species.name} delay={i * 0.15}>
                <SpeciesCard
                  name={species.name}
                  image={species.image}
                  aspect="aspect-[4/5]"
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link
              to="/hunts"
              className="font-display text-[14px] text-amber hover:border-b border-amber transition-all duration-300"
            >
              See all 11 species &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Fully Outfitted Section */}
      <section className="bg-surface grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <SectionEyebrow text="The Experience" />
                <h2 className="font-display text-[32px] lg:text-[44px] font-light text-warm-white leading-[1.15] mt-4">
                  Everything Provided. Nothing Left to Chance.
                </h2>
                <p className="font-body text-[18px] text-warm-white leading-[1.75] mt-6">
                  Every hunt includes horses, camp, meals, field preparation,
                  and a guide who's spent decades on this specific land. You show
                  up. We handle the rest.
                </p>
                <Link
                  to="/hunt-camp"
                  className="font-display text-[14px] text-amber mt-6 inline-block hover:border-b border-amber transition-all duration-300"
                >
                  See what's included &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ul className="space-y-4 lg:pt-8">
                {[
                  'Fully guided days in the field',
                  'Horses and pack stock provided',
                  'Camp meals and lodging',
                  'Field preparation and care',
                  'License application assistance',
                  'Transportation from Dayton, WY',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-amber mt-1">&mdash;</span>
                    <span className="font-body text-[16px] text-warm-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ross Section */}
      <section className="bg-black grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="order-2 lg:order-1">
                <SectionEyebrow text="Meet the Outfitter" />
                <h2 className="font-display text-[40px] lg:text-[56px] font-light text-warm-white leading-[1.1] mt-4">
                  Ross Adney
                </h2>
                <p className="font-body text-[18px] text-warm-white leading-[1.75] mt-6">
                  Ross has guided hunters through the Bighorn Mountains for over
                  two decades. He knows every ridge, every draw, every trail.
                  When you hunt with Beaver Trap, you hunt with someone who
                  treats the land — and his clients — with the same respect.
                </p>
                <div className="border-l-[3px] border-amber pl-5 mt-8">
                  <p className="font-display italic text-[24px] text-amber leading-[1.3]">
                    &ldquo;A handshake is still a contract.&rdquo;
                  </p>
                  <p className="font-small-caps text-warm-muted mt-3 tracking-[0.1em]">
                    — Ross Adney
                  </p>
                </div>
                <Link
                  to="/outfitter"
                  className="font-display text-[14px] text-amber mt-6 inline-block hover:border-b border-amber transition-all duration-300"
                >
                  Meet Ross &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="order-1 lg:order-2">
              <div className="border-2 border-amber-line/50 overflow-hidden">
                <img
                  src="/assets/ross-portrait.jpg"
                  alt="Ross Adney, owner and guide"
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionEyebrow text="From the Field" />
            <h2 className="font-display text-[32px] lg:text-[44px] font-light text-warm-white leading-[1.15] mt-4 mb-12 lg:mb-16">
              Hunters Come Once. Most Come Back.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {homeTestimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  location={t.location}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <PhotoStrip images={stripImages} height="h-[400px]" linkTo="/photos" />

      {/* Final CTA */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center grain-overlay">
        <img
          src="/assets/cta-river.jpg"
          alt="Wyoming river valley"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#080604]/82" />
        <div className="relative z-10 text-center px-6 py-[80px]">
          <ScrollReveal>
            <SectionEyebrow text="2025 Season" className="!text-center" />
            <h2 className="font-display text-[40px] lg:text-[72px] font-light text-warm-white leading-[1.1] mt-4">
              Limited Tags Available.
            </h2>
            <p className="font-body text-[18px] text-warm-muted mt-4">
              Once they're gone, they're gone.
            </p>
            <Link
              to="/contact"
              className="inline-block font-display text-[14px] tracking-[0.1em] font-variant-small-caps uppercase bg-amber text-black px-8 py-3.5 rounded-sm mt-8 hover:bg-amber-light hover:scale-[1.02] transition-all duration-300"
            >
              Book a Hunt
            </Link>
            <p className="font-small-caps text-warm-muted mt-6 tracking-[0.1em]">
              Or call Ross directly:{' '}
              <a
                href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
                className="text-amber hover:text-warm-white transition-colors"
              >
                {siteConfig.phone}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
