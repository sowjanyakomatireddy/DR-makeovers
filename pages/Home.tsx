import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Model" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
          <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter mb-4 opacity-90">
              
                <span className="text-white font-bold block md:inline">BEAUTY MAKEOVERS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light tracking-wide">
       Glow from the inside, shine on the outside
            </p>
            <Link to="/book" className="px-8 py-4 border border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
                Book Now
            </Link>
        </div>
      </section>

      {/* Gold Title Banner */}
      <div className="py-12 bg-dark-900 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-gold-500 uppercase tracking-widest">
            DR Makeovers
        </h2>
      </div>

      {/* About Section */}
      <section className="bg-dark-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[400px] md:h-[600px] w-full">
                <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
                    alt="Salon Interior" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center items-start p-10 md:p-20 bg-dark-900">
                <h3 className="text-3xl md:text-4xl font-serif text-gold-500 mb-6 uppercase tracking-widest">About Us</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-8 font-light">
                    Welcome to DR Makeovers, Our goal is to give you a relaxing experience, affordable services, and results that make you feel refreshed and beautiful.
                </p>
                <Link to="/about" className="px-8 py-3 bg-white text-black hover:bg-gold-500 hover:text-white transition duration-300 uppercase tracking-widest text-xs font-bold">
                    Learn More
                </Link>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-900 px-4 md:px-10 max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-serif text-gold-500 mb-4 text-center md:text-left">OUR LUXE SERVICES</h3>
        <p className="text-white text-xl mb-8 font-light text-center md:text-left">Discover Our Offerings</p>
        <p className="text-gray-400 mb-16 max-w-3xl font-light text-center md:text-left">
            Redefine your style with precision cuts, luxe treatments, and transformative coloring at DR Makeovers. Our expert stylists are dedicated to providing premium care and glamorous results.
        </p>

        <div className="space-y-8">
            {[
                { title: "Hair Styling & Treatments", desc: "Precision Cuts & Transformative Coloring" },
                { title: "Skin & Glow Rituals", desc: "Illuminate Your Complexion with Rejuvenating Facials" },
                { title: "Nail & Artistry", desc: "Classic Elegance to Bold Statements" },
                { title: "Custom Extensions", desc: "Tailored to Your Desires" },
            ].map((service, idx) => (
                <div key={idx} className="group border-b border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end hover:pl-4 transition-all duration-300 cursor-pointer">
                    <div>
                        <h4 className="text-2xl md:text-3xl font-serif text-gray-200 mb-2 group-hover:text-gold-500 transition">{service.title}</h4>
                        <p className="text-gray-500 font-light">{service.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center">
            <Link to="/services" className="inline-block px-8 py-4 bg-gold-600 text-white rounded hover:bg-gold-500 transition duration-300 font-serif italic text-lg shadow-lg hover:shadow-gold-500/20">
                Book Your Luxe Experience
            </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-dark-800">
        <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-serif text-gold-500 mb-4">Gallery</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto h-[600px]">
            <div className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden group">
                <img src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1765170647/bride_r2oo6u.jpg" alt="Gallery 1" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                   <span className="text-white font-serif tracking-widest border border-white px-4 py-2">VIEW</span>
                </div>
            </div>
            <div className="relative overflow-hidden group">
                <img src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849848/Screenshot_2025-12-04_173337_r3m0xu.jpg" alt="Gallery 2" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="relative overflow-hidden group">
                <img src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849455/Screenshot_2025-12-04_172623_g6je1v.jpg" alt="Gallery 3" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="relative overflow-hidden group md:col-span-2">
                <img src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1765170663/saree_qk7rsn.jpg" alt="Gallery 4" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
        </div>
        <div className="text-center mt-8">
            <Link to="/gallery" className="text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition">View Full Gallery</Link>
        </div>
      </section>

      {/* Accordion Text Area */}
      <section className="bg-dark-900 py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
            <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gold-500">
                    <span className="text-sm uppercase tracking-widest">“DR Makeovers – Where comfort meets luxury to bring effortless beauty right to your home.”</span>
                    <span className="transition group-open:rotate-180">
                        <ChevronRight size={16} />
                    </span>
                </summary>
                <div className="text-gray-400 mt-4 group-open:animate-fadeIn text-sm leading-relaxed space-y-4">
                    <p>Redefining Luxury Grooming and Beauty Excellence in Hyderabad.</p>
                    <p>DR Makeovers brings a luxurious, home-based beauty experience designed for comfort and style. Every makeover is crafted with care, creativity, and attention to detail. We focus on enhancing your natural features while keeping the look elegant and effortless. Whether it’s for a special occasion or a simple mood-boosting session, our makeover space offers the perfect environment to feel refreshed and confident.</p>
                    <p>Our approach blends modern trends with personal preference to create looks that truly reflect you. With a calm and homely setup, the experience feels smooth, relaxed, and completely personalized. DR Makeovers ensures every client feels confident, polished, and beautifully transformed. Your beauty, delivered with love and perfection.</p>
                </div>
            </details>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark-800 py-20">
          <div className="text-center mb-16 px-4">
              <h3 className="text-4xl md:text-6xl font-serif text-gold-500 mb-6 uppercase">Contact Us</h3>
              <p className="text-white text-lg max-w-2xl mx-auto font-light">
                  Get in touch with us to schedule your consultation and begin your journey to luxurious, voluminous hair. We are here to help you achieve your dream look.
              </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 px-4">
              {/* Form */}
              <div className="bg-dark-900 p-8 md:p-12 border border-gray-800">
                  <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label className="block text-xs uppercase text-gray-400 mb-2">First Name *</label>
                              <input type="text" className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition" />
                          </div>
                          <div>
                              <label className="block text-xs uppercase text-gray-400 mb-2">Last Name *</label>
                              <input type="text" className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition" />
                          </div>
                      </div>
                      <div>
                          <label className="block text-xs uppercase text-gray-400 mb-2">Email *</label>
                          <input type="email" className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition" />
                      </div>
                      <div>
                          <label className="block text-xs uppercase text-gray-400 mb-2">Message</label>
                          <textarea rows={4} className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition"></textarea>
                      </div>
                      <button type="button" className="px-10 py-3 border border-gray-500 text-gray-300 hover:bg-gold-600 hover:text-white hover:border-gold-600 transition duration-300 uppercase text-xs tracking-widest">
                          Send
                      </button>
                  </form>
              </div>

              {/* Image */}
              <div className="relative h-[500px] lg:h-auto mt-8 lg:mt-0">
                  <img 
                    src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1765169263/beauty-salon_wydqwj.jpg" 
                    alt="Luxury Salon Interior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 right-8 text-right">
                      <p className="font-serif text-5xl md:text-6xl text-dark-900/80 italic">All about</p>
                      <p className="font-serif text-5xl md:text-6xl text-dark-900/80 italic">luxury</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;