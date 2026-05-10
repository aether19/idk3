import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';

export default function Outfitter() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img
          src="/assets/outfitter-hero.jpg"
          alt="Bighorn Mountains panorama"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,6,4,0.2) 0%, rgba(8,6,4,0.75) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 w-full">
          <ScrollReveal>
            <SectionEyebrow text="The Guide" />
            <h1 className="font-display text-[48px] lg:text-[80px] font-light text-warm-white leading-[1.05]">
              Ross Adney.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Bio */}
      <section className="bg-black grain-overlay py-[120px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
            {/* Left Column — Bio */}
            <div>
              <ScrollReveal>
                <p className="font-body text-[17px] text-warm-white leading-[1.75]">
                  Ross Adney grew up in the shadow of the Bighorns. He learned
                  this land before he could read a topo map — from horseback, on
                  foot, in every season. Two decades of guiding hunters through
                  some of the most demanding terrain in North America has given
                  him a knowledge of these mountains that no amount of technology
                  can replicate.
                </p>
              </ScrollReveal>

              {/* Pull Quote 1 */}
              <ScrollReveal x={-20} duration={0.7}>
                <div className="border-l-[3px] border-amber pl-6 my-8">
                  <p className="font-display italic text-[22px] lg:text-[28px] text-amber leading-[1.3]">
                    &ldquo;I limit my seasons on purpose. Every hunter deserves
                    my full attention.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="font-body text-[17px] text-warm-white leading-[1.75]">
                  Every hunt is personal to Ross. He limits his seasons
                  deliberately — not to maximize revenue, but to make sure every
                  client gets his full attention. If you book with Beaver Trap,
                  you're hunting with the man himself.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <p className="font-body text-[17px] text-warm-white leading-[1.75] mt-6">
                  The horses, the camp, the guides — all of it runs the way Ross
                  insists it runs. No cutting corners. No shortcuts. The kind of
                  outfit where a handshake means something.
                </p>
              </ScrollReveal>

              {/* Pull Quote 2 */}
              <ScrollReveal x={-20} duration={0.7}>
                <div className="border-l-[3px] border-amber pl-6 my-8">
                  <p className="font-display italic text-[22px] lg:text-[28px] text-amber leading-[1.3]">
                    &ldquo;A handshake is still a contract.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              {/* Mobile: Photos between paragraphs */}
              <div className="lg:hidden mt-10 space-y-4">
                <div className="border-2 border-amber-line/50 overflow-hidden">
                  <img
                    src="/assets/ross-horse.jpg"
                    alt="Ross with his horse"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="border-2 border-amber-line/50 overflow-hidden">
                  <img
                    src="/assets/ross-camp.jpg"
                    alt="Ross at camp"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column — Photos & Credentials */}
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="border-2 border-amber-line/50 overflow-hidden">
                  <img
                    src="/assets/ross-horse.jpg"
                    alt="Ross with his horse"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="border-2 border-amber-line/50 overflow-hidden">
                  <img
                    src="/assets/ross-camp.jpg"
                    alt="Ross at camp"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Credentials */}
                <div className="border-t border-amber-line/50 pt-6 space-y-3">
                  <p className="font-eyebrow text-amber tracking-[0.2em]">
                    Wyoming Licensed Outfitter
                  </p>
                  <p className="font-eyebrow text-warm-muted tracking-[0.2em]">
                    Bighorn Mountains Territory
                  </p>
                  <p className="font-eyebrow text-warm-muted tracking-[0.2em]">
                    Fully Insured
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-y border-amber-line/50 py-[60px] lg:py-[80px]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-display italic text-[24px] lg:text-[36px] text-amber leading-[1.3]">
              &ldquo;I don't just guide hunts. I protect these mountains so
              they're here for the next generation.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
