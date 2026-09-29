import { useState } from "react";
import { Play } from "lucide-react";

const techFocusList = [
  {
    id: 1,
    tag: "3D Animation",
    title: "Cling Logo animation",
    poster:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    video: "", 
  },
  {
    id: 2,
    tag: "3D Animation",
    title: "Advertisement video",
    poster:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    video: "",
  },
  {
    id: 3,
    tag: "AI",
    title: "Surveillance model",
    description: "Identifies suspicious activity in the video.",
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    video: "",
  },
];

export default function CurrentTechFocus() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section id="tech-focus" className="py-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Innovation lab
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1.5">
            Current Tech Focus
          </h2>
          <div className="w-10 h-1 bg-red-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Smaller Compact Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start lg:items-stretch lg:pb-8">
          {techFocusList.map((item) => {
            const isPlaying = playingId === item.id && item.video;
            return (
              <article
                key={item.id}
                className={`group flex flex-col bg-white rounded-2xl p-4 border border-neutral-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/40 hover:-translate-y-1 transition-all duration-300 h-full ${
                  item.id === 2 ? "lg:mt-8" : ""
                }`}
              >
                {/* Smaller Media Box */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 mb-3.5 shadow-xs">
                  {isPlaying ? (
                    <video
                      src={item.video}
                      poster={item.poster}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingId(item.id)}
                      aria-label={`Play ${item.title}`}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={item.poster}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute inset-0 bg-neutral-950/35 group-hover:bg-neutral-950/15 transition-colors"></span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </span>
                      </span>
                    </button>
                  )}
                </div>

                {/* Compact Text Section */}
                <div className="px-1 pb-1 flex-1">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mt-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-neutral-600 leading-relaxed mt-1 font-medium">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}