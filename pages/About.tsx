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
                <img src="https://images.unsplash.com/photo-1595476103518-3c8bed0a14e1?q=80&w=2070&auto=format&fit=crop" alt="The Salon" className="w-full shadow-2xl border border-gray-800" />
            </div>
            <div className="w-full md:w-1/2 text-gray-300 leading-loose">
                <h2 className="text-3xl font-serif text-gold-500 mb-6">DR Makeovers Philosophy</h2>
                <p className="mb-6">
                    Founded in 2023, DR Makeovers was born from a desire to create a sanctuary of beauty in the heart of Hyderabad. We believe that beauty is not just about appearance—it's about confidence, expression, and the way you feel when you walk out our doors.
                </p>
                <p>
                   Our team of master stylists and aestheticians are meticulously trained in global techniques, ensuring that every cut, color, and treatment is world-class.
                </p>
            </div>
        </div>

        <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white mb-12">Meet Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-dark-800 p-6 border border-gray-800 hover:border-gold-500/50 transition duration-300">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-gold-500">
                             <img src={`https://picsum.photos/300/300?random=${i+10}`} alt="Team Member" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-serif text-white mb-2">Stylist Name</h3>
                        <p className="text-gold-500 text-sm uppercase tracking-wider mb-4">Senior Hair Stylist</p>
                        <p className="text-gray-400 text-sm font-light">Specializing in avant-garde cuts and transformative coloring techniques.</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;