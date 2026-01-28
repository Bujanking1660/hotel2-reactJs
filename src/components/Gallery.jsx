export const Gallery = ({ photos }) => (
  <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-serif text-gray-900">Experience the Ambience</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
      {/* Photo 1 - Hero Size */}
      <div className="col-span-2 row-span-2 rounded-4xl overflow-hidden shadow-2xl">
        <img src={photos[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Main View" />
      </div>
      {/* Other Photos */}
      {photos.slice(1, 7).map((photo, index) => (
        <div key={index} className={`${index === 2 ? 'col-span-2' : ''} rounded-3xl overflow-hidden shadow-lg group`}>
          <img src={photo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  </section>
);