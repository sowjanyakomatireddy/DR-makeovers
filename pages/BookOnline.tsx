import React from 'react';

const BookOnline: React.FC = () => {
  // Using specific high-quality images for the services
  const manicureImg = "https://images.unsplash.com/photo-1610992015768-e4d0d3c01579?q=80&w=2070&auto=format&fit=crop";
  // Updated Coloring image: Woman with foils/hair dye application
  const coloringImg = "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2070&auto=format&fit=crop";

  const categories = [
    { name: "Hair Styling", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849455/Screenshot_2025-12-04_172623_g6je1v.jpg" },
    { name: " Hair Coloring", img:"https://res.cloudinary.com/dkivpkaaj/image/upload/v1765180804/dye_pt7hs6.jpg" },
    { name: "Manicure", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764847323/1_wqnggv.jpg" },
    { name: "Bridal", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849848/Screenshot_2025-12-04_173337_r3m0xu.jpg" },
    { name: "Mens Grooming", img: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765180975/mens_pxjfkt.jpg" },
  ];

  const handleBookNow = (serviceName: string) => {
    // Updated phone number as requested
    const phoneNumber = '919553673711';
    // Dynamically insert the service name into the message
    const message = `I want to reach out to you regarding ${serviceName}. Can you provide this service?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
                  <button 
                    onClick={() => handleBookNow(cat.name)}
                    className="px-6 py-2 border border-white/30 text-sm uppercase hover:bg-gold-600 hover:text-white hover:border-gold-600 transition tracking-wider bg-black/40 backdrop-blur-sm"
                  >
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