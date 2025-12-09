import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "HD Makeup",
      description: "Flawless High-Definition Finish"
    },
    {
      title: "Natural Makeup",
      description: "Subtle & Radiant Glow"
    },
    {
      title: "Glossy Makeup",
      description: "Luminous & Dewy Look"
    },
    {
      title: "Hair Styles",
      description: "Elegant & Trendy Creations"
    },
    {
      title: "Saree Draping",
      description: "Perfect Pleats & Style"
    },
    {
      title: "Saree Pre-pleating",
      description: "Ready-to-Wear Convenience"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900 text-white">
      {/* Header Section */}
      <div className="py-20 px-6 text-center bg-dark-900">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4 tracking-wide">Our Services</h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
           Exquisite makeup and styling services tailored to perfection.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        
        {/* Featured Service Image */}
        <div className="w-full mb-24 relative shadow-2xl border border-gray-800 group rounded-3xl overflow-hidden bg-black/40">
            <img 
                src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1765167645/WhatsApp_Image_2025-12-08_at_9.47.21_AM_ttelka.jpg" 
                alt="Service Experience" 
                className="w-full h-[50vh] md:h-[75vh] object-contain object-center" 
            />
        </div>

        {/* Services List - Modern Row Layout */}
        <div className="flex flex-col w-full">
            {services.map((service, idx) => (
                <div 
                    key={idx} 
                    className="group border-t border-gray-700 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/5 px-6 transition-all duration-300 cursor-pointer"
                >
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-4xl font-serif text-gray-200 group-hover:text-gold-500 transition-colors duration-300 tracking-wide">
                            {service.title}
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm md:text-base font-light uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                            {service.description}
                        </span>
                    </div>
                </div>
            ))}
            {/* Bottom Border */}
            <div className="border-t border-gray-700"></div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 px-6">
            <Link 
                to="/book" 
                className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 bg-transparent text-white uppercase tracking-widest text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
                Discover Your New Look
                <ArrowRight size={16} />
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;