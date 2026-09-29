import { useState } from "react";
import praveen from '../../assets/testimonials/praveen-shetty.png';
import swatee from '../../assets/testimonials/swatee-agrawal.png';
import elizabeth from '../../assets/testimonials/elizabeth-jean.png';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Praveen Shetty",
      role: "Valued Client",
      quote: "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch servic",
      avatar: praveen,
    },
    {
      id: 2,
      name: "Swatee Agrawal",
      role: "Founder - Piaah.com",
      quote: "Cling Info Tech' professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
      avatar: swatee,
    },
    {
      id: 3,
      name: "Elizabeth Jean Thomas",
      role: "Founder - Speech Ally",
      quote: "Choosing Cling Info Tech was one of the best decisions we made. Their team's creativity and strategic approach transformed our vision into reality. I'm grateful for their outstanding support and guidance throughout the process.",
      avatar: elizabeth,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Re-order testimonials list so the carousel loops infinitely across cards
  const visibleTestimonials = [
    ...testimonials.slice(startIndex),
    ...testimonials.slice(0, startIndex),
  ];

  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-2">
            Testimonials
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Your Voice, Our Pride! Dive into the heartfelt accounts of our valued patrons. From life-changing experiences to exceptional service, their stories illuminate the essence of our commitment. Join our family of satisfied customers and witness firsthand the transformative power of our offerings. Your satisfaction is our greatest achievement!
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-xs hover:shadow-md transition-all"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-xs hover:shadow-md transition-all"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Cards Grid: 1 card visible on mobile, 3 cards on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {visibleTestimonials.map((item, idx) => {
              // On mobile screens, hide everything except the active (first) card in the rearranged array
              const hideOnMobile = idx > 0 ? "hidden md:flex" : "flex";

              return (
                <div
                  key={item.id}
                  className={`relative bg-white rounded-3xl pt-12 pb-8 px-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-col justify-between text-center min-h-[380px] ${hideOnMobile}`}
                >
                  {/* Avatar at Top */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Vertical Card Body - Statement */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Card Footer - Name & Role */}
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-base font-bold text-slate-900">
                      {item.name}
                    </h3>
                    {item.role && (
                      <p className="text-xs font-semibold text-red-600 mt-0.5">
                        {item.role}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  startIndex === idx
                    ? 'w-8 bg-red-600'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}