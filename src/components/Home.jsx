import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

// FaArrowRight rotated -45deg reads as a diagonal "up-right" arrow —
// react-icons' free Font Awesome 6 set doesn't ship a plain arrow-up-right
// icon (only arrow-up-right-from-square, a different glyph), so this avoids
// pulling in an icon that doesn't exist in the package.
const FaArrowUpRight = ({ className = '' }) => (
  <FaArrowRight className={`-rotate-45 ${className}`} />
);

/**
 * COEGA HOME FOR THE AGED — landing page
 * ---------------------------------------
 * Design direction (deliberately distinct from Vonzet's blue card-grid and
 * Coega Peace Homes's warm pine/sand estate look):
 *
 *  - Palette: near-black charcoal (#121210), ivory (#F5F2EA),
 *    brushed brass (#A9832E), stone grey (#5C594E), hairline grey (#D8D3C6)
 *  - Type:   display → 'Instrument Serif'  (high-contrast, editorial, elite)
 *            body    → 'Inter'             (neutral, precise, professional)
 *            utility → 'IBM Plex Mono'     (used for the spec numbers —
 *                                            reads like a data sheet, not a brochure)
 *  - Layout language: sharp edges, hairline rules, generous negative space,
 *    numbered sections (00 / 01 / 02…), asymmetric splits instead of card
 *    grids — closer to a private members' club or architecture firm site
 *    than a typical care-home template.
 *  - Signature element: "The Coega Standard" — a spec-sheet style strip of
 *    measurable commitments (ratios, response times, credentials) in mono
 *    type. Where Coega Peace Homes's signature leaned warm and domestic (a daily
 *    timeline), this one leans clinical-precise and confidence-building —
 *    the kind of thing an "elite" positioning has to earn with numbers.
 *
 * NOTE ON IMAGES
 * All sources are neutral placeholders (picsum.photos, seeded so they don't
 * shuffle on reload). Nothing here relies on stock photography that could be
 * copyrighted. Replace every `src` with real, licensed photography of the
 * actual property before launch.
 */

const heroImg    = 'https://picsum.photos/seed/coega-hero/1600/1000';
const suiteImg   = 'https://picsum.photos/seed/coega-suite/900/1100';
const assistImg  = 'https://picsum.photos/seed/coega-assist/900/1100';
const careImg    = 'https://picsum.photos/seed/coega-care/900/1100';
const diningImg  = 'https://picsum.photos/seed/coega-dining/1200/800';
const founderImg = 'https://picsum.photos/seed/coega-founder/500/500';

const standard = [
  { value: '1:3', label: 'Caregiver to resident ratio' },
  { value: '<90s', label: 'Average emergency response time' },
  { value: '24/7', label: 'Physician-supervised nursing' },
  { value: '100%', label: 'Registered nursing staff, SANC-certified' },
];

const residences = [
  {
    img: suiteImg,
    tag: '01 — Private Residences',
    title: 'The Residences',
    text: 'Fully self-contained suites for residents who want ownership over every part of their day — their own kitchen, their own door, their own hours — with the estate\'s full support one call away.',
  },
  {
    img: assistImg,
    tag: '02 — Assisted Suites',
    title: 'Assisted Living',
    text: 'A discreet layer of daily support — medication, mobility, meals — built around residents who want less to manage, not less independence.',
  },
  {
    img: careImg,
    tag: '03 — Continuing Care',
    title: 'Continuing Care',
    text: 'A dedicated, physician-led wing for residents requiring continuous clinical care, staffed around the clock by a permanent nursing team.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#F5F2EA] text-[#1B1A17]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Instrument Serif', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="relative bg-[#121210] min-h-screen flex flex-col">
        <img
          src={heroImg}
          alt="The grounds of Coega Home for the Aged"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121210] via-[#121210]/60 to-[#121210]/20" />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-6 sm:px-10 pt-32 pb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#A9832E]" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
                Coega Home for the Aged
              </span>
            </div>
            <h1 className="font-display text-[#F5F2EA] text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-8">
              An elevated standard of care, by design.
            </h1>
            <p className="text-[#C9C5B8] text-lg leading-relaxed max-w-lg">
              Coega was conceived for families who refuse to compromise —
              on medical rigor, on privacy, or on the quiet dignity of
              growing older well.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-16">
            <button
              onClick={() => navigate('/confirmation')}
              className="group inline-flex items-center gap-2 bg-[#F5F2EA] text-[#121210] font-medium px-8 py-4 hover:bg-[#A9832E] hover:text-[#121210] transition"
            >
              Request a private tour
              <FaArrowUpRight className="text-sm transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => navigate('/confirmation')}
              className="text-[#F5F2EA] font-medium underline underline-offset-8 decoration-[#5C594E] hover:decoration-[#A9832E] transition"
            >
              View the residences
            </button>
          </div>
        </div>
      </section>

      {/* ---------- THE COEGA STANDARD (signature spec strip) ---------- */}
      <section className="bg-[#121210] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">00</span>
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#8B8880] uppercase">
              The Coega Standard
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {standard.map(({ value, label }) => (
              <div key={label} className="border-t border-white/10 pt-6">
                <p className="font-mono text-3xl sm:text-4xl text-[#F5F2EA] mb-2">{value}</p>
                <p className="text-[#8B8880] text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RESIDENCES (asymmetric splits) ---------- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-28">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">Levels of care</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Three tiers, one estate.</h2>
          </div>
          <p className="text-[#5C594E] max-w-sm leading-relaxed">
            Residents move between tiers as needs change — without ever
            changing address, staff, or community.
          </p>
        </div>

        <div className="space-y-24">
          {residences.map(({ img, tag, title, text }, i) => (
            <div
              key={title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="overflow-hidden">
                <img src={img} alt={title} className="w-full h-[420px] object-cover" />
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">{tag}</span>
                <h3 className="font-display text-3xl sm:text-4xl mt-4 mb-5">{title}</h3>
                <p className="text-[#5C594E] leading-relaxed max-w-md mb-7">{text}</p>
                <button
                  onClick={() => navigate('/confirmation')}
                  className="inline-flex items-center gap-2 font-medium border-b border-[#121210] pb-1 hover:border-[#A9832E] hover:text-[#A9832E] transition"
                >
                  Enquire about this tier
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- DINING / FACILITIES STRIP ---------- */}
      <section className="relative bg-[#121210]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[420px] lg:h-auto">
            <img src={diningImg} alt="Dining at Coega" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20">
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase mb-6">
              On the estate
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F2EA] mb-8 max-w-md">
              Every detail considered, nothing left ordinary.
            </h2>
            <ul className="space-y-5">
              {[
                'Chef-led dining room with a seasonal, physician-reviewed menu',
                'Private consulting suite for visiting specialists',
                'Landscaped gardens designed for safe, independent walking',
                'A dedicated concierge for family communication and logistics',
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start border-t border-white/10 pt-5">
                  <span className="font-mono text-[#A9832E] text-sm">＋</span>
                  <span className="text-[#C9C5B8] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-28">
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <img
            src={founderImg}
            alt="Family member of a Coega resident"
            className="w-20 h-20 object-cover flex-shrink-0 grayscale"
          />
          <div>
            <FaQuoteLeft className="text-[#D8D3C6] text-2xl mb-6" />
            <p className="font-display text-2xl sm:text-3xl leading-snug mb-6 text-[#1B1A17]">
              We looked at seven facilities before Coega. It was the only
              one where the medical director knew my father's chart before
              we'd finished the tour.
            </p>
            <p className="font-mono text-sm text-[#5C594E]">
              — Son of a resident, The Residences
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#121210] py-28 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
            By appointment only
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#F5F2EA] mt-6 mb-8">
            See Coega for yourself.
          </h2>
          <p className="text-[#8B8880] max-w-lg mx-auto mb-10 leading-relaxed">
            Tours are private and unhurried — allow an hour to walk the
            estate, meet the clinical team, and ask every question on your
            list.
          </p>
          <button
            onClick={() => navigate('/confirmation')}
            className="inline-flex items-center gap-2 bg-[#F5F2EA] text-[#121210] font-medium px-9 py-4 hover:bg-[#A9832E] transition"
          >
            Request a private tour
            <FaArrowUpRight className="text-sm" />
          </button>
        </div>
      </section>
    </div>
  );
}