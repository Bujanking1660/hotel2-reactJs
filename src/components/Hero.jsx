export const Hero = ({ title, city, subtitle, mainImg }) => (
  <header className="relative w-full h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={mainImg} className="w-full h-full object-cover scale-105" alt={title} />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
    </div>
    
    <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
      <span className="text-[10px] md:text-xs tracking-[0.6em] font-black uppercase text-white/80 mb-4 block">
        Welcome to {city}
      </span>
      <h1 className="text-6xl md:text-9xl font-serif text-white leading-none tracking-tighter mb-6">
        {title} <br /> <span className="italic font-light opacity-90">{city}</span>
      </h1>
      <p className="max-w-xl mx-auto text-sm md:text-base text-white/70 font-light tracking-widest uppercase">
        {subtitle}
      </p>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
      <div className="w-px h-16 bg-linear-to-b from-white/0 to-white"></div>
      <span className="text-[8px] text-white uppercase tracking-[0.3em]">Scroll</span>
    </div>
  </header>
);