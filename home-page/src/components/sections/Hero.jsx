import { Code, Users, Lightbulb, Coffee } from "lucide-react";
import heroImage from "../../assets/hero.webp";

export default function HeroWithStats() {
  const stats = [
    { id: 1, number: "32387122", label: "Number of lines of code", icon: Code },
    { id: 2, number: "350+", label: "Happy clients", icon: Users },
    { id: 3, number: "390+", label: "Projects Completed", icon: Lightbulb },
    { id: 4, number: "1500+", label: "Coffee With Clients", icon: Coffee },
  ];

  return (
    <div className="relative bg-slate-950">
      {/* Hero Section */}
      <section className="relative text-white pt-16 pb-28 lg:pt-24 lg:pb-40 overflow-hidden">
        {/* Layer 1: Hero image, right half, fading into the dark background */}
        <div
          className="absolute inset-y-0 right-0 z-0 w-full lg:w-[85%]
               opacity-30 lg:opacity-100
               lg:[mask-image:linear-gradient(to_right,transparent,black_5%)]"
        >
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover [object-position:center_25%]"
          />
        </div>

        {/* Layer 2: Content-focused Dark Gradient Mask */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/90 lg:via-slate-950/75 to-transparent"></div>

        {/* Layer 3: Soft Decorative Glow */}
        <div className="absolute -top-32 -left-32 w-112 h-112 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl lg:max-w-3xl space-y-5">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Global Enterprise Solutions
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Making Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-400 to-red-600">
                Ideas Happen!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed">
              We are an end-to-end IT Solutions providing major services such as
              website development, mobile application development, digital
              marketing, custom web portal, IT team for your next idea, ERP
              development, for all your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overlapping Stats Bar with Lucide Icons (2 cols on mobile, 4 cols on desktop) */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-20 sm:-mt-26 pb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y-0 text-center">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                >
                  {/* Icon Badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  {/* Number (with responsive breaking for long code strings) */}
                  <div className="text-base sm:text-xl font-bold text-slate-900 tracking-tight break-all">
                    {stat.number}
                  </div>
                  {/* Label */}
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}