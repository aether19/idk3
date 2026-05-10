import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/siteData';

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black min-h-[40vh] flex items-end">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
          <ScrollReveal>
            <SectionEyebrow text="Client Reviews" />
            <h1 className="font-display text-[40px] lg:text-[64px] font-light text-warm-white leading-[1.15]">
              Hunters Come Once. Most Come Back.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-black grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {testimonials.map((t, i) => (
              <ScrollReveal
                key={i}
                delay={i % 2 === 0 ? 0 : 0.2}
              >
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  location={t.location}
                  hunt={t.hunt}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-black pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-body text-[18px] text-warm-white">
              Hunted with Ross? Share your experience.
            </p>
            <a
              href="https://google.com/search?q=beaver+trap+outfitters+review"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[14px] text-amber mt-3 inline-block hover:border-b border-amber transition-all duration-300"
            >
              Review Us on Google &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
