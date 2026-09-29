import { useState } from 'react';

export default function GlobalPresence() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const countries = [
    { name: 'India', code: 'in', region: 'Asia-Pacific' },
    { name: 'Saudi Arabia', code: 'sa', region: 'Middle East' },
    { name: 'South Africa', code: 'za', region: 'Africa' },
    { name: 'United States', code: 'us', region: 'North America' },
    { name: 'Oman', code: 'om', region: 'Middle East' },
    { name: 'UAE', code: 'ae', region: 'Middle East' },
    { name: 'Singapore', code: 'sg', region: 'Asia-Pacific' },
    { name: 'Ireland', code: 'ie', region: 'Europe' },
    { name: 'Mauritius', code: 'mu', region: 'Africa' },
    { name: 'Australia', code: 'au', region: 'Asia-Pacific' },
    { name: 'United Kingdom', code: 'gb', region: 'Europe' },
    { name: 'Spain', code: 'es', region: 'Europe' },
  ];

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            International Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Global Presence
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base pt-2">
            Expanding our global footprint across diverse markets and cultures
          </p>
        </div>

        {/* Global Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {countries.map((country, index) => {
            // On mobile, if showAllMobile is false, only show the first 4 items. On desktop (sm and up), show everything.
            const isHiddenOnMobile = !showAllMobile && index >= 6;

            return (
              <div
                key={country.code}
                className={`group bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-500/40 transition-all duration-300 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1 ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                {/* Flag Badge Container */}
                <div className="w-14 h-10 mb-3 rounded-md overflow-hidden shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                  <img
                    src={`https://flagcdn.com/w160/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Country Name */}
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                  {country.name}
                </h3>

                {/* Region Label */}
                <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                  {country.region}
                </span>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button (Visible only on mobile screens) */}
        <div className="mt-8 text-center block sm:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold tracking-wide shadow-sm hover:bg-slate-50 hover:border-red-500 hover:text-red-600 transition-all duration-200"
          >
            {showAllMobile ? (
              <>
                Show Less
                <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            ) : (
              <>
                Show More ({countries.length - 4} More)
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}