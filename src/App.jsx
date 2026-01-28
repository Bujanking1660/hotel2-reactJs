import {
  Bed,
  Bath,
  Waves,
  Wifi,
  Music,
  Laptop,
  MapPin,
  Phone,
  Instagram,
} from "lucide-react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { HotelLocation } from "./components/HotelLocation";
import { Navbar } from "./components/Navbar";

function App() {
  const hotelProfile = {
    name: "Grand Viveana",
    city: "Bandung",
    tagline: "Speedity and Cleanliness",
    contact: "022-20568008",
    address: "Jl Pajajaran No. 73 Cicendo, Bandung 40172",
    mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.913508605342!2d107.5997232!3d-6.9010166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64234062f6d%3A0x6a0c5c6353d2d79d!2sGrand%20Viveana%20Hotel!5e0!3m2!1sid!2sid!4v1712345678910!5m2!1sid!2sid",
  };

  const amenities = [
    { icon: <Bed />, title: "7 Kamar Tidur", desc: "25 Tempat Tidur" },
    { icon: <Bath />, title: "8 Kamar Mandi", desc: "Water Heater" },
    { icon: <Waves />, title: "Kolam Private", desc: "Mountain View" },
    { icon: <Music />, title: "Karaoke", desc: "Smart TV / Netflix" },
    { icon: <Laptop />, title: "Kapasitas 40", desc: "Gathering Ready" },
    { icon: <Wifi />, title: "High Speed WiFi", desc: "Free Access" },
  ];

  const hotelPhotos = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551882547-ff43c63efe81?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-gray-900 selection:text-white">
      {/* Navigation */}
      <Navbar brandName={hotelProfile.name} />

      <Hero
        title={hotelProfile.name}
        city={hotelProfile.city}
        subtitle={hotelProfile.tagline}
        mainImg={hotelPhotos[0]}
      />

      <About
        brand={hotelProfile.name}
        city={hotelProfile.city}
        description={hotelProfile.description}
      />
      <Features items={amenities} />

      <Gallery photos={hotelPhotos} />
      <HotelLocation 
        address={hotelProfile.address} 
        mapUrl={hotelProfile.mapIframe}
      />

      {/* Footer / Contact */}
      <footer className="bg-gray-900 text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-md">
            <h3 className="text-4xl font-serif mb-6 italic">
              {hotelProfile.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {hotelProfile.address}
            </p>
            <div className="flex gap-4">
              <a
                href={hotelProfile.instagram}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`tel:${hotelProfile.contact}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600 mb-2">
              Designed for Excellence
            </span>
            <p className="text-xs text-gray-500 italic">
              Speedity and Cleanliness
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
