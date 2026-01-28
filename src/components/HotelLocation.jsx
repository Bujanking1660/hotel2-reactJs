import { MapPin, Navigation } from 'lucide-react';

export const HotelLocation = ({ address, mapUrl }) => {
  return (
    <section id="location" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Sisi Kiri: Informasi Alamat */}
        <div className="order-2 lg:order-1">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">
            The Neighborhood
          </span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 italic text-gray-900 leading-tight">
            Prime <br /> Location
          </h2>
          
          <div className="flex items-start gap-4 mb-10">
            <div className="mt-1 text-gray-900">
              <MapPin size={24} />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {address}
            </p>
          </div>

          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
          >
            <Navigation size={16} className="group-hover:rotate-12 transition-transform" />
            Open in Google Maps
          </a>
        </div>

        {/* Sisi Kanan: Peta Iframe */}
        <div className="order-1 lg:order-2 h-112.5 md:h-150 w-full rounded-[3rem] overflow-hidden shadow-2xl border-12 border-white relative bg-gray-100">
          <iframe
            title="Hotel Map Location"
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1]"
          ></iframe>
        </div>

      </div>
    </section>
  );
};