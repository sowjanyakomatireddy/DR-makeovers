import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-dark-900">
      <div className="relative py-24 px-4 text-center border-b border-gray-800 bg-[url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
         <div className="absolute inset-0 bg-black/80"></div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Our Story</h1>
            <p className="text-gray-300 font-light text-xl max-w-2xl mx-auto">Where Passion Meets Precision</p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/2">
                <img src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1765169263/beauty-salon_wydqwj.jpg" alt="The Salon" className="w-full shadow-2xl border border-gray-800" />
            </div>
            <div className="w-full md:w-1/2 text-gray-300 leading-loose">
                <h2 className="text-3xl font-serif text-gold-500 mb-6">DR Makeovers Philosophy</h2>
                <p className="mb-4 text-lg font-light text-white italic">
                    Beauty should feel personal, comfortable, and real.
                </p>
                <p className="mb-4">
                    We believe that true confidence comes from being cared for in a warm, relaxed, and homely environment — not in a rushed or crowded setting. 
                    That is why our home-based beauty makeovers service focuses on individual attention, gentle care, and providing comfort that makes every woman feel valued.
                </p>
                <p className="mb-6">
                    We don’t aim to “change” your look — we aim to enhance the natural beauty you already have.
                    Every makeover is done with patience, clean practices, quality products, and a genuine intention to help you feel refreshed, confident, and celebrated.
                </p>
                <p className="text-gold-500 font-serif text-xl">
                    To us, beauty is not just a service — it is a feeling, an experience, and a connection of trust.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;