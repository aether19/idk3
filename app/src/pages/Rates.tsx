import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import { speciesList, inclusions, notInclusions, siteConfig } from '../data/siteData';

export default function Rates() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black min-h-[40vh] flex items-end">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
          <ScrollReveal>
            <SectionEyebrow text="Pricing" />
            <h1 className="font-display text-[40px] lg:text-[64px] font-light text-warm-white leading-[1.15]">
              What a Hunt Costs.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-black pb-16">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-body text-[18px] text-warm-white leading-[1.75]">
              All hunts are fully outfitted and include horses, meals, camp, field
              prep, and a dedicated guide. Rates vary by species and party size.
              Call Ross directly for a custom quote — he responds within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Rates Table */}
      <section className="bg-black grain-overlay pb-[120px] lg:pb-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="border-t border-amber-line/50">
            {speciesList.map((species, i) => (
              <ScrollReveal key={species.name} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-5 border-b border-amber-line/50">
                  <span className="font-display text-[20px] text-warm-white">
                    {species.name}
                  </span>
                  <span className="font-body text-[16px] text-warm-muted mt-1 sm:mt-0">
                    {species.rate}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="bg-surface grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div>
                <SectionEyebrow text="What's Included" />
                <ul className="space-y-3 mt-6">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-amber">&mdash;</span>
                      <span className="font-body text-[16px] text-warm-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <span className="font-eyebrow text-warm-muted block mb-4">
                  Not Included
                </span>
                <ul className="space-y-3 mt-6">
                  {notInclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-warm-muted">&mdash;</span>
                      <span className="font-body text-[16px] text-warm-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deposit Note */}
      <section className="bg-black grain-overlay pb-[120px] lg:pb-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal x={-10}>
            <div className="border-l-[3px] border-amber bg-amber/5 px-8 py-6">
              <p className="font-body text-[16px] text-warm-white leading-[1.75]">
                A 50% deposit secures your dates. Balance due 30 days before hunt.
                All deposits are non-refundable but transferable to the following
                season.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-display text-[20px] text-warm-white mb-6">
              Ready to book? Call{' '}
              <a
                href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
                className="text-amber hover:text-warm-white transition-colors"
              >
                {siteConfig.phone}
              </a>
            </p>
            <Link
              to="/contact"
              className="inline-block font-display text-[14px] tracking-[0.1em] font-variant-small-caps uppercase bg-amber text-black px-8 py-3.5 rounded-sm hover:bg-amber-light hover:scale-[1.02] transition-all duration-300"
            >
              Send an Inquiry
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
