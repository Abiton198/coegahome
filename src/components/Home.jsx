
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

/*
 * ------------------------------------------------------------
 * COEGA HOME FOR THE AGED — LANDING PAGE
 * ------------------------------------------------------------
 *
 * Design direction:
 * - Warm, dignified and professional
 * - Designed specifically for an elderly-care environment
 * - Strong editorial typography
 * - Generous whitespace
 * - Large photography
 * - Clear levels of care
 *
 * Palette:
 * near-black  #121210
 * ivory       #F5F2EA
 * brass       #A9832E
 * stone       #5C594E
 * hairline    #D8D3C6
 *
 * Typography:
 * display → Instrument Serif
 * body    → Inter
 * utility → IBM Plex Mono
 *
 * IMPORTANT:
 * The images below use Pexels photography rather than
 * picsum.photos placeholders. Before production launch,
 * replace these with licensed photographs of the actual
 * Coega Home for the Aged facility, residents and staff.
 */

// ------------------------------------------------------------
// ARROW-UP-RIGHT ICON
// ------------------------------------------------------------

const FaArrowUpRight = ({ className = '' }) => (
  <FaArrowRight className={`-rotate-45 ${className}`} />
);

// ------------------------------------------------------------
// IMAGE HELPER
// ------------------------------------------------------------

const pexelsImage = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

// ------------------------------------------------------------
// HOMEPAGE IMAGES
// ------------------------------------------------------------

// Hero:
// Compassionate interaction between caregiver and elderly residents.
const heroImg = pexelsImage(18459198, 1800);

// Independent living:
// Warm elderly/family environment.
const suiteImg = pexelsImage(5638644, 1000);

// Assisted living:
// Caregiver providing personal support.
const assistImg = pexelsImage(29372727, 1000);

// Continuing care:
// Professional medical monitoring.
const careImg = pexelsImage(6129688, 1000);

// Dining:
// Food, community and everyday life.
const diningImg = pexelsImage(29372696, 1400);

// Community / family:
// Warm human connection.
const founderImg = pexelsImage(18429371, 600);

// ------------------------------------------------------------
// THE COEGA STANDARD
// ------------------------------------------------------------

const standard = [
  {
    value: '1:3',
    label: 'Caregiver to resident ratio',
  },
  {
    value: '<90s',
    label: 'Average emergency response time',
  },
  {
    value: '24/7',
    label: 'Physician-supervised nursing',
  },
  {
    value: '100%',
    label: 'Registered nursing staff, SANC-certified',
  },
];

// ------------------------------------------------------------
// LEVELS OF CARE
// ------------------------------------------------------------

const residences = [
  {
    img: suiteImg,
    tag: '01 — Independent Living',
    title: 'Live with independence',
    text:
      'Comfortable living spaces for residents who value their independence while knowing that caring support, community and assistance are always close by.',
  },

  {
    img: assistImg,
    tag: '02 — Assisted Living',
    title: 'Support when it matters',
    text:
      'Personalised assistance with everyday routines such as meals, mobility, medication and personal care — provided with patience, respect and dignity.',
  },

  {
    img: careImg,
    tag: '03 — Continuing Care',
    title: 'Professional care, around the clock',
    text:
      'For residents requiring a higher level of support, our care environment provides ongoing nursing supervision and compassionate attention throughout the day and night.',
  },
];

// ------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#F5F2EA] text-[#1B1A17]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ----------------------------------------------------
          TYPOGRAPHY
      ----------------------------------------------------- */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .font-display {
          font-family: 'Instrument Serif', serif;
        }

        .font-mono {
          font-family: 'IBM Plex Mono', monospace;
        }
      `}</style>

      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative bg-[#121210] min-h-screen flex flex-col overflow-hidden">

        <img
          src={heroImg}
          alt="Caregiver spending time with elderly residents"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#121210] via-[#121210]/65 to-[#121210]/20" />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-6 sm:px-10 pt-32 pb-14">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-8">

              <span className="w-8 h-px bg-[#A9832E]" />

              <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
                Coega Home for the Aged
              </span>

            </div>

            <h1 className="font-display text-[#F5F2EA] text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-8">
              A place to grow older with dignity, care and peace.
            </h1>

            <p className="text-[#C9C5B8] text-lg leading-relaxed max-w-lg">
              Coega Home for the Aged provides compassionate care,
              meaningful companionship and professional support in a
              safe, welcoming environment where every resident is
              treated with dignity.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-6 mt-16">

            <button
              onClick={() => navigate('/confirmation')}
              className="group inline-flex items-center gap-2 bg-[#F5F2EA] text-[#121210] font-medium px-8 py-4 hover:bg-[#A9832E] hover:text-[#121210] transition"
            >
              Request a private tour

              <FaArrowUpRight
                className="text-sm transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
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

      {/* ====================================================
          THE COEGA STANDARD
      ==================================================== */}

      <section className="bg-[#121210] border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">

          <div className="flex items-center gap-3 mb-12">

            <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
              00
            </span>

            <span className="font-mono text-[11px] tracking-[0.3em] text-[#8B8880] uppercase">
              The Coega Standard
            </span>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

            {standard.map(({ value, label }) => (

              <div
                key={label}
                className="border-t border-white/10 pt-6"
              >

                <p className="font-mono text-3xl sm:text-4xl text-[#F5F2EA] mb-2">
                  {value}
                </p>

                <p className="text-[#8B8880] text-sm leading-snug">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ====================================================
          LEVELS OF CARE
      ==================================================== */}

      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-28">

        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">

          <div>

            <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
              Levels of care
            </span>

            <h2 className="font-display text-4xl sm:text-5xl mt-4">
              Three levels, one caring community.
            </h2>

          </div>

          <p className="text-[#5C594E] max-w-sm leading-relaxed">
            Residents can receive the level of support that best suits
            their needs, while remaining connected to the same caring
            community.
          </p>

        </div>

        <div className="space-y-24">

          {residences.map(
            ({ img, tag, title, text }, i) => (

              <div
                key={title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  i % 2 === 1
                    ? 'lg:[&>*:first-child]:order-2'
                    : ''
                }`}
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={img}
                    alt={title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  />

                </div>

                {/* CONTENT */}

                <div>

                  <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
                    {tag}
                  </span>

                  <h3 className="font-display text-3xl sm:text-4xl mt-4 mb-5">
                    {title}
                  </h3>

                  <p className="text-[#5C594E] leading-relaxed max-w-md mb-7">
                    {text}
                  </p>

                  <button
                    onClick={() => navigate('/confirmation')}
                    className="inline-flex items-center gap-2 font-medium border-b border-[#121210] pb-1 hover:border-[#A9832E] hover:text-[#A9832E] transition"
                  >
                    Enquire about this level

                    <FaArrowRight className="text-xs" />
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </section>

      {/* ====================================================
          LIFE AT COEGA / DINING
      ==================================================== */}

      <section className="relative bg-[#121210]">

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="h-[420px] lg:h-auto">

            <img
              src={diningImg}
              alt="Residents enjoying food and community"
              className="w-full h-full object-cover"
            />

          </div>

          {/* CONTENT */}

          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20">

            <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase mb-6">
              Life at Coega
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-[#F5F2EA] mb-8 max-w-md">
              Care is more than medicine. It is how every day feels.
            </h2>

            <ul className="space-y-5">

              {[
                'Nutritious, home-style meals prepared with residents’ needs in mind',
                'Comfortable spaces for conversation, relaxation and connection',
                'Safe gardens and outdoor areas for fresh air and gentle movement',
                'Meaningful activities that encourage social connection and participation',
              ].map((item) => (

                <li
                  key={item}
                  className="flex gap-4 items-start border-t border-white/10 pt-5"
                >

                  <span className="font-mono text-[#A9832E] text-sm">
                    ＋
                  </span>

                  <span className="text-[#C9C5B8] leading-relaxed">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* ====================================================
          CARE PHILOSOPHY
      ==================================================== */}

      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-28">

        <div className="flex flex-col sm:flex-row gap-10 items-start">

          <img
            src={founderImg}
            alt="Elderly resident enjoying companionship"
            className="w-20 h-20 object-cover flex-shrink-0 grayscale"
          />

          <div>

            <FaQuoteLeft className="text-[#D8D3C6] text-2xl mb-6" />

            <p className="font-display text-2xl sm:text-3xl leading-snug mb-6 text-[#1B1A17]">
              Every resident deserves to feel safe, valued and
              cared for — while every family deserves the peace
              of mind that their loved one is in good hands.
            </p>

            <p className="font-mono text-sm text-[#5C594E]">
              — The Coega Home for the Aged care philosophy
            </p>

          </div>

        </div>

      </section>

      {/* ====================================================
          FINAL CTA
      ==================================================== */}

      <section className="bg-[#121210] py-28 px-6 sm:px-10">

        <div className="max-w-3xl mx-auto text-center">

          <span className="font-mono text-[11px] tracking-[0.3em] text-[#A9832E] uppercase">
            Come and see us
          </span>

          <h2 className="font-display text-4xl sm:text-5xl text-[#F5F2EA] mt-6 mb-8">
            See Coega for yourself.
          </h2>

          <p className="text-[#8B8880] max-w-lg mx-auto mb-10 leading-relaxed">
            Take the time to see the environment, meet the people
            who provide care and discover which level of support
            is right for your loved one.
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
