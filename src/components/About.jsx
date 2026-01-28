export const About = ({ brand, city, description }) => (
  <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      {/* Kolom Kiri: Judul Besar */}
      <div className="lg:w-1/3">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">
          The Essence
        </span>
        <h2 className="text-5xl md:text-7xl font-serif leading-none italic text-gray-900">
          About <br /> {brand}
        </h2>
      </div>

      {/* Kolom Kanan: Deskripsi & Detail */}
      <div className="lg:w-2/3">
        <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-12">
          {description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-4">Prime Location</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Terletak strategis di jantung kota {city}, memberikan akses mudah ke berbagai pusat bisnis dan wisata kuliner terbaik.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-4">Our Commitment</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Kami melayani Anda dengan prinsip **Speedity and Cleanliness**, memastikan setiap aspek masa inap Anda nyaman dan higienis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);