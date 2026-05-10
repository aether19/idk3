import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import { speciesList, siteConfig } from '../data/siteData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    species: '',
    season: '',
    partySize: '',
    referral: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-transparent border-0 border-b border-amber-line/50 font-body text-[16px] text-warm-white py-3 px-0 placeholder:text-warm-muted/60 focus:outline-none focus:border-amber transition-colors duration-300';

  return (
    <div>
      {/* Hero */}
      <section className="bg-black min-h-[40vh] flex items-end">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
          <ScrollReveal>
            <SectionEyebrow text="Get in Touch" />
            <h1 className="font-display text-[40px] lg:text-[64px] font-light text-warm-white leading-[1.15]">
              Book Your Hunt.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-black pb-16">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-body text-[18px] text-warm-white leading-[1.75]">
              Ross personally reviews every inquiry and responds within 24 hours.
              Fill out the form below or call him directly at{' '}
              <a
                href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
                className="text-amber hover:text-warm-white transition-colors"
              >
                {siteConfig.phone}
              </a>
              . Tags are limited each season — don't wait.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-black grain-overlay pb-[80px] lg:pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {submitted ? (
            <ScrollReveal className="text-center py-20">
              <h2 className="font-display text-[36px] font-light text-warm-white mb-4">
                Inquiry Received
              </h2>
              <p className="font-body text-[18px] text-warm-muted">
                Thank you. Ross will review your message and respond within 24 hours.
              </p>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
              {/* Left — Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <ScrollReveal delay={0}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </ScrollReveal>

                <ScrollReveal delay={0.06}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <select
                    name="species"
                    value={formData.species}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Species of Interest</option>
                    {speciesList.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </ScrollReveal>

                <ScrollReveal delay={0.24}>
                  <select
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Preferred Season</option>
                    <option value="Fall">Fall</option>
                    <option value="Spring">Spring</option>
                    <option value="Either">Either</option>
                  </select>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <select
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Party Size</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </ScrollReveal>

                <ScrollReveal delay={0.36}>
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="Google">Google</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Repeat Client">Repeat Client</option>
                    <option value="Other">Other</option>
                  </select>
                </ScrollReveal>

                <ScrollReveal delay={0.42}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your ideal hunt..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </ScrollReveal>

                <ScrollReveal delay={0.48}>
                  <button
                    type="submit"
                    className="w-full font-display text-[14px] tracking-[0.1em] font-variant-small-caps uppercase bg-amber text-black py-4 rounded-sm hover:bg-amber-light hover:scale-[1.02] transition-all duration-300 mt-4"
                  >
                    Send Inquiry
                  </button>
                </ScrollReveal>
              </form>

              {/* Right — Contact Info */}
              <ScrollReveal delay={0.2}>
                <div className="lg:pl-8">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
                    className="font-display text-[28px] lg:text-[36px] font-light text-amber block hover:text-warm-white transition-colors duration-300"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href="mailto:info@beavertrapoutfitters.com"
                    className="font-small-caps text-amber text-[14px] mt-2 inline-block hover:text-warm-white transition-colors duration-300"
                  >
                    Email Us
                  </a>
                  <p className="font-small-caps text-warm-muted mt-4 tracking-[0.1em]">
                    {siteConfig.location}
                  </p>

                  <div className="border-l-2 border-amber pl-4 mt-8">
                    <p className="font-display italic text-[20px] text-amber">
                      &ldquo;A handshake is still a contract.&rdquo;
                    </p>
                  </div>

                  <div className="border-2 border-amber-line/50 overflow-hidden mt-8">
                    <img
                      src="/assets/contact-photo.jpg"
                      alt="Bighorn Mountains at dusk"
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-black pb-[80px] lg:pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="border-t border-amber-line/50 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
              <ScrollReveal delay={0}>
                <span className="font-eyebrow text-amber text-[11px] tracking-[0.2em] text-center">
                  Personal Response Within 24 Hours
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <span className="text-amber hidden md:inline">&bull;</span>
                <span className="font-eyebrow text-amber text-[11px] tracking-[0.2em] text-center">
                  Wyoming Licensed Outfitter
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <span className="text-amber hidden md:inline">&bull;</span>
                <span className="font-eyebrow text-amber text-[11px] tracking-[0.2em] text-center">
                  All Hunts Fully Outfitted
                </span>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
