import ramesh from '../../assets/team/ramesh-singh.png';
import ashi from '../../assets/team/ashi-gupta.png';
import akshay from '../../assets/team/akshay-gupta.png';

export default function Leadership() {
  const leaders = [
    {
      name: 'Ramesh Singh',
      role: 'Co-founder & Director',
      img: ramesh,
    },
    {
      name: 'Ashi Gupta',
      role: 'Managing Director',
      img: ashi,
    },
    {
      name: 'Akshay Gupta',
      role: 'CEO',
      img: akshay,
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Meet Our Leadership Team
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl px-4 py-6 border border-slate-200/80 shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col items-center text-center"
            >
              {/* Subtle Animated Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

              {/* Avatar Container with Hover Scale & Shadow */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="relative w-35 h-35 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 group-hover:border-red-500 transition-all duration-300"
                />
              </div>

              {/* Leader Info */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-200">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  {leader.role}
                </p>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="w-8 h-0.5 bg-slate-200 group-hover:w-16 group-hover:bg-red-600 transition-all duration-300 rounded-full mt-5" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}