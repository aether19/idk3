import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionEyebrow from '../components/SectionEyebrow';
import { galleryImages } from '../data/siteData';

export default function Photos() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-black min-h-[30vh] flex items-end">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
          <ScrollReveal>
            <SectionEyebrow text="From the Field" />
            <h1 className="font-display text-[36px] lg:text-[64px] font-light text-warm-white leading-[1.15]">
              The Bighorns Through the Lens.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="bg-black grain-overlay pb-[80px] lg:pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-[10px]">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={0.05 * (i % 3)} className="break-inside-avoid mb-[10px]">
                <div
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber transition-colors duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="font-display italic text-[16px] text-warm-white">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Caption */}
      <section className="bg-black pb-[80px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="border-t border-amber-line/50 pt-10">
            <ScrollReveal>
              <p className="font-display italic text-[16px] text-warm-muted">
                All photos taken in the Bighorn Mountains of Wyoming.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-amber font-display text-[24px] hover:text-warm-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
