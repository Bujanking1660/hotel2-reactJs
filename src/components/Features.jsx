export const Features = ({ items }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all duration-500 mb-6">
              {item.icon}
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-2 text-gray-900">{item.title}</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);