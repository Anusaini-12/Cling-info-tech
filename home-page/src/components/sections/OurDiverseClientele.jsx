import verifiedProperty from '../../assets/clients/verified-property.png';
import MAT from '../../assets/clients/MAT.png';
import sevenSeas from '../../assets/clients/seven-seas.png';
import SRS from '../../assets/clients/SRS.png';
import sunshine from '../../assets/clients/sunshine.png';
import jumpie from '../../assets/clients/jumpie.png';
import DIS from '../../assets/clients/DIS.png';
import IndianRacingFest from '../../assets/clients/Indian-racing-fest.svg';
import seymour from '../../assets/clients/seymour.png';
import OIH from '../../assets/clients/OIH.png';
import orloNow from '../../assets/clients/orlo-now.png';
import solidarity from '../../assets/clients/solidarity.png';
import cp67 from '../../assets/clients/cp67.png';
import capitalCurve from '../../assets/clients/capital-curve.png';
import fdxGroup from '../../assets/clients/fdx-group.jpeg';
import kalco from '../../assets/clients/kalco.png';
import bhojras from '../../assets/clients/bhojras.png';
import wings from '../../assets/clients/wings-rehabilitation.png';
import airdropJa from '../../assets/clients/airdrop-ja.webp';
import nkArchitects from '../../assets/clients/nk-architects.jpeg';
import vestiary from '../../assets/clients/vestiary.jpeg';
import skuad from '../../assets/clients/skuad.jpeg';
import piaah from '../../assets/clients/piaah.jpeg';
import forescribe from '../../assets/clients/forescribe.jpeg';
import apptrove from '../../assets/clients/apptrove.jpeg';
import beatroute from '../../assets/clients/beatroute.png';
import phonologix from '../../assets/clients/phonologix-therapy.png';
import kiteDigiceutix from '../../assets/clients/kite-digiceutix.png';
import epayLater from '../../assets/clients/epay-later.png';
import astroReader from '../../assets/clients/astro-reader.jpeg';
import sagitta from '../../assets/clients/sagitta.jpeg';
import viralHai from '../../assets/clients/viral-hai.jpeg';
import matrix from '../../assets/clients/matrix-solutions.jpeg';
import parashar from '../../assets/clients/parashar.png';
import vakeelAtHome from '../../assets/clients/vakeel-at-home.png';
import papertio from '../../assets/clients/papertio.png';
import matchMe from '../../assets/clients/matchme-global.jpeg';
import mintHr from '../../assets/clients/mint-hr.png';

// Complete client dataset
const clients = [
  { name: 'Verified Property', logo: verifiedProperty },
  { name: 'MAT Commercial', logo: MAT },
  { name: 'Seven Seas Lines', logo: sevenSeas },
  { name: 'SRS', logo: SRS },
  { name: 'Sunshine Immigration', logo: sunshine },
  { name: 'Jumpie', logo: jumpie, url: 'https://jumpie.in/' },
  { name: 'DIS', logo: DIS },
  { name: 'Indian Racing Festival', logo: IndianRacingFest },
  { name: 'Seymour', logo: seymour },
  { name: 'Omsons India Handicrafts', logo: OIH },
  { name: 'Orlo Now', logo: orloNow, url: 'https://www.orlonow.in/' },
  { name: 'Solidarity Advisors', logo: solidarity, url: 'https://www.solidarity.in/' },
  { name: 'CP67', logo: cp67, url: 'https://cp67.in/' },
  { name: 'Capital Curve', logo: capitalCurve, url: 'https://www.capitalcurv.com/' },
  { name: 'FDX Group', logo: fdxGroup, url: 'https://www.fdxnetwork.com/' },
  { name: 'Kalco', logo: kalco, url: 'http://kalcoindia.com/' },
  { name: 'Bhojras', logo: bhojras },
  { name: 'Wings Rehabilitation Center', logo: wings, url: 'https://wingsrehabilitationcenter.com' },
  { name: 'Airdrop JA', logo: airdropJa, url: 'https://airdropja.com' },
  { name: 'NK Architects', logo: nkArchitects, url: 'https://nkarchitects.co.in' },
  { name: 'Vestiary', logo: vestiary, url: 'https://vestiary.in' },
  { name: 'Skuad', logo: skuad, url: 'https://www.skuad.io' },
  { name: 'Piaah', logo: piaah, url: 'https://piaah.com' },
  { name: 'Forescribe', logo: forescribe, url: 'https://www.forescribe.ai' },
  { name: 'Apptrove', logo: apptrove, url: 'https://apptrove.com' },
  { name: 'BeatRoute', logo: beatroute, url: 'https://beatroute.io/' },
  { name: 'Phonologix Therapy', logo: phonologix, url: 'https://phonologixtherapy.com/' },
  { name: 'Kite Digiceutix', logo: kiteDigiceutix, url: 'https://kitedigiceutix.com/' },
  { name: 'ePayLater', logo: epayLater, url: 'https://www.epaylater.in' },
  { name: 'Astro Reader', logo: astroReader },
  { name: 'Sagitta', logo: sagitta },
  { name: 'Viral Hai', logo: viralHai },
  { name: 'Matrix Solutions', logo: matrix },
  { name: 'Parashar', logo: parashar, url: 'https://www.prcpl.com/' },
  { name: 'Vakeel at Home', logo: vakeelAtHome },
  { name: 'Papertio', logo: papertio },
  { name: 'MatchMe Global', logo: matchMe, url: 'https://www.matchmeglobal.com' },
  { name: 'Mint HR', logo: mintHr },
];

// Split dataset into two rows for the 2-line marquee
const halfLength = Math.ceil(clients.length / 2);
const row1Clients = clients.slice(0, halfLength);
const row2Clients = clients.slice(halfLength);

export default function OurDiverseClientele() {
  // Card renderer helper
  const renderMarqueeRow = (items, animationClass) => (
    <div className={`flex w-max ${animationClass} hover:[animation-play-state:paused] gap-5 py-2`}>
      {[...items, ...items].map((client, index) => {
        const isCopy = index >= items.length;

        const CardBody = (
          <div
            className={`group relative flex items-center justify-center p-3 sm:p-4 w-44 sm:w-52 h-20 sm:h-24 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 ${
              client.url
                ? 'hover:border-red-500 hover:-translate-y-0.5 cursor-pointer'
                : 'cursor-default opacity-95'
            }`}
          >
            {/* Real color logo without grayscale */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              loading="lazy"
              className="max-h-12 sm:max-h-14 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Link indicator icon */}
            {client.url && (
              <span className="absolute top-2 right-2 text-slate-300 group-hover:text-red-500 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            )}
          </div>
        );

        return client.url ? (
          <a
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${client.name}`}
            className="shrink-0"
            aria-hidden={isCopy || undefined}
            tabIndex={isCopy ? -1 : undefined}
          >
            {CardBody}
          </a>
        ) : (
          <div key={index} className="shrink-0" aria-hidden={isCopy || undefined}>
            {CardBody}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-12 bg-red-50/40 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-6">
        <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
          Trusted Partners
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          Our Diverse Clientele
        </h2>
        <div className="w-12 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col gap-2">
        {/* Soft edge gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-red-50/90 via-red-50/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-red-50/90 via-red-50/60 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Leftward Scroll */}
        {renderMarqueeRow(row1Clients, 'animate-marquee')}

        {/* Row 2: Rightward Scroll */}
        {renderMarqueeRow(row2Clients, 'animate-marquee-reverse')}
      </div>

      {/* Marquee Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 55s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 55s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee, .animate-marquee-reverse { animation: none; }
        }
      `}</style>
    </section>
  );
}