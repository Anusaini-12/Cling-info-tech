import appImg from "../../assets/services/app.png";
import webImg from "../../assets/services/web.png";
import erpImg from "../../assets/services/ERP.png";

const servicesList = [
  {
    id: 1,
    title: "App Development",
    description:
      "Need custom app development services? We help you take advantage of the rapidly growing segment of mobile application development.",
    image: appImg,
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Don't let your website be just another URL on the web. We never use a pre-designed template. Every layout is developed from the ground up, meeting the exacting standards you demand.",
    image: webImg,
  },
  {
    id: 3,
    title: "ERPs",
    description:
      "We help you manage your business activities by integrating your back-office and front-office applications.",
    image: erpImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            What we do
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1.5">
            Services built around your idea
          </h2>
          <div className="w-10 h-1 bg-red-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Smaller Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {servicesList.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col bg-slate-50/50 rounded-2xl p-6 border border-neutral-200/80 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar grows on hover */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>

              {/* Big faded number */}
              <span
                aria-hidden="true"
                className="absolute top-3 right-5 text-5xl font-black text-neutral-100 group-hover:text-red-50/75 transition-colors select-none"
              >
                0{service.id}
              </span>

              {/* Smaller Image Box */}
              <div className="relative w-16 h-16 rounded-xl bg-white group-hover:bg-red-50 flex items-center justify-center mb-4 shadow-xs border border-slate-100 transition-colors duration-300">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1 font-medium">
                {service.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}