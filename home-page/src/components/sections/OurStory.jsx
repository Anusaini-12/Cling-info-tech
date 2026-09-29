import { useState } from "react";

export default function OurStory() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "story",
      num: "01",
      title: "Our Story",
      subtitle: "Identity",
      text: "We are a company with multifarious IT services like ERPs, Websites, App Development, Support, Innovations, Projects, and Ideas. Innovations at its best is what we believe in. We understand not only customers well, but also the industry at large. We majorly focus on enhancing skills and personal growth while delivering top-tier online solutions across all devices.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "vision",
      num: "02",
      title: "Our Vision",
      subtitle: "Future Roadmap",
      text: "At Cling, our goal is to deliver premier web design, development, and marketing solutions to our clients, fostering their profitable online growth while expanding our roster of satisfied clients. We are dedicated to enhancing various facets of our business, such as work quality, customer service excellence, and dynamic innovation.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      id: "mission",
      num: "03",
      title: "Our Mission",
      subtitle: "Agile Execution",
      text: "We recognize the significance of staying at the forefront in today's swiftly changing digital environment. That's why we consistently allocate resources to enhance our personnel, refine our processes, and embrace cutting-edge technologies to respond effectively to evolving customer needs.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "journey",
      num: "04",
      title: "Our Journey",
      subtitle: "2018 — Present",
      milestones: [
        {
          year: "2018",
          text: "Foundational growth & establishing core identity.",
        },
        { year: "2020", text: "Service diversification & quality commitment." },
        {
          year: "2021",
          text: "Rapid client base expansion & new tech adoption.",
        },
        {
          year: "2022",
          text: "Matured organization tackling ambitious global projects.",
        },
      ],
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  const current = steps[activeStep];

  return (
    <section
      id="our-story"
      className="py-12 bg-white border-y border-slate-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Us
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Circular Headings Navigation Track */}
        <div className="relative flex items-center justify-between mb-10 max-w-xl mx-auto px-4">
          {/* Connecting Line behind Circles */}
          <div className="absolute top-7 left-10 right-10 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          <div
            className="absolute top-7 left-10 h-1 bg-red-600 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 82}%` }}
          ></div>

          {/* Circle Nodes */}
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Perfect Circle Button */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 border-2 ${
                    isActive
                      ? "bg-red-600 text-white border-red-600 shadow-sm scale-105 ring-2 ring-red-100"
                      : "bg-white text-slate-600 border-slate-300 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-black tracking-tight">
                    {step.num}
                  </span>
                </div>

                {/* Title Label Below Circle */}
                <span
                  className={`mt-2 text-[11px] sm:text-xs font-bold transition-colors ${
                    isActive
                      ? "text-red-600 font-extrabold"
                      : "text-slate-500 group-hover:text-slate-900"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Content Card */}
        <div className="bg-slate-50 rounded-2xl p-3 sm:p-8 border border-slate-200/80 relative overflow-hidden transition-all duration-300 min-h-[180px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                {current.icon}
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                {current.title}
              </h3>
            </div>

            <span className="text-[12px] font-bold text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase">
              {current.subtitle}
            </span>
          </div>

          {/* Conditional Layout for Journey Milestones vs standard text */}
          {current.milestones ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {current.milestones.map((m) => (
                <div
                  key={m.year}
                  className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-2xs"
                >
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md inline-block mb-1.5">
                    {m.year}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              {current.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
