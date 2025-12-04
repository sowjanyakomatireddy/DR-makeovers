import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521590832896-013c4c8d2ac8?q=80&w=1976&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476103518-3c8bed0a14e1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1630230282276-857e497d3077?q=80&w=1974&auto=format&fit=crop"
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      <div className="py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Our Gallery</h1>
        <p className="text-gray-400">A glimpse into our world of elegance</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, idx) => (
                <div key={idx} className="group relative overflow-hidden aspect-square cursor-pointer">
                    <img 
                        src={src} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="text-gold-500 font-serif text-lg tracking-widest border border-gold-500 px-6 py-2 uppercase">
                            Zoom
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;