export default function StatsBar() {
  const stats = [
    { id: 1, number: '20+', label: 'Years of Experience' },
    { id: 2, number: '40+', label: 'Global Entities' },
    { id: 3, number: '12+', label: 'Countries Served' },
    { id: 4, number: '100+', label: 'Global Projects' },
  ];

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-20">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className={`${index > 0 ? 'pt-6 md:pt-0' : ''}`}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600 tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}