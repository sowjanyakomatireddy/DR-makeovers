import React from 'react';

const BookOnline: React.FC = () => {
  // Using specific high-quality images for the services
  const manicureImg = "https://images.unsplash.com/photo-1610992015768-e4d0d3c01579?q=80&w=2070&auto=format&fit=crop";
  // Updated Coloring image: Woman with foils/hair dye application
  const coloringImg = "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2070&auto=format&fit=crop";

  const categories = [
    { name: "Hair Styling", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" },
    { name: "Coloring", img: coloringImg },
    { name: "Manicure", img: manicureImg },
    { name: "Bridal", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop" },
    { name: "Mens Grooming", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      <div className="bg-dark-800 py-16 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Book Online</h1>
        <p className="text-gray-400 font-light">Select a service to schedule your appointment</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative h-80 overflow-hidden cursor-pointer border border-gray-800">
              <img 
                src={cat.img} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-serif text-white mb-3">{cat.name}</h3>
                <div className="flex justify-start">
                  <button className="px-6 py-2 border border-white/30 text-sm uppercase hover:bg-gold-600 hover:text-white hover:border-gold-600 transition tracking-wider bg-black/40 backdrop-blur-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Calendar Mockup */}
        <div className="mt-20 max-w-2xl mx-auto bg-dark-800 p-8 border border-gray-700">
          <h3 className="text-2xl font-serif text-white mb-6 text-center">Request an Appointment</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none" />
              <input type="time" className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none" />
            </div>
            <select className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none">
              <option>Select Service...</option>
              <option>Hair Cut</option>
              <option>Coloring</option>
              <option>Facial</option>
            </select>
            <input type="text" placeholder="Your Name" className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="w-full bg-dark-900 border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none" />
            <button type="button" className="w-full py-3 bg-gold-600 text-white font-bold hover:bg-gold-500 transition">REQUEST BOOKING</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookOnline;