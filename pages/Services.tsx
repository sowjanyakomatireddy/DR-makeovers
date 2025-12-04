import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Bridal Makeup",
      items: [
        { name: "Bridal Consultation", description: "One-on-one consultation to understand preferences, skin type, and desired bridal look." },
        { name: "Bridal Makeup", description: "Full makeup application for the bride on her wedding day, including airbrush, traditional, or HD makeup." },
        { name: "Bridal Party Makeup", description: "Makeup for bridesmaids, mother of the bride, or other special guests." },
        { name: "Bridal Trial Makeup", description: "Pre-wedding makeup trial to perfect the look." },
        { name: "Destination Wedding Makeup", description: "Specialized makeup for destination weddings, with travel arrangements included." },
      ]
    },
    {
      title: "Party and Event Makeup",
      items: [
        { name: "Glam Makeup", description: "Perfect for evening events, galas, and parties." },
        { name: "Day Makeup", description: "Fresh, natural look for daytime events and brunches." },
        { name: "Red Carpet & Photoshoot Makeup", description: "High-definition, long-lasting looks for camera-ready appearances." },
      ]
    },
    {
      title: "Makeup for Fashion & Editorial",
      items: [
        { name: "Fashion Show Makeup", description: "Creative and bold looks tailored for the runway." },
        { name: "Editorial Makeup", description: "High-concept makeup for print, digital media, and campaigns." },
      ]
    },
    {
      title: "Special Occasion Makeup",
      items: [
        { name: "Festival Makeup", description: "Vibrant, artistic, and durable looks for festivals." },
        { name: "Cultural Makeup", description: "Traditional styles respecting cultural nuances and attire." },
      ]
    },
    {
      title: "HD & Airbrush Makeup",
      items: [
        { name: "HD Makeup", description: "Flawless finish designed for high-definition cameras and lighting." },
        { name: "Airbrush Makeup", description: "Long-lasting, lightweight, and smooth application for a porcelain finish." },
      ]
    },
    {
      title: "Makeup Classes",
      items: [
        { name: "Personal Makeup Lessons", description: "One-on-one self-grooming sessions to master your own look." },
        { name: "Group Makeup Workshops", description: "Fun and educational sessions for friends or corporate groups." },
        { name: "Bridal Makeup Classes", description: "Professional training for aspiring makeup artists focusing on bridal techniques." },
      ]
    },
    {
      title: "Hair Styling Services",
      items: [
        { name: "Bridal Hair Styling", description: "Elegant updos, waves, or traditional styles to complement the bridal look." },
        { name: "Party & Event Hair Styling", description: "Chic blowouts, curls, or styles for any occasion." },
        { name: "Hair Extensions", description: "Adding volume and length for a luxurious finish." },
        { name: "Hair Accessories & Styling", description: "Expert placement of veils, flowers, and accessories." },
      ]
    },
    {
      title: "Skin Care & Pre-Makeup Services",
      items: [
        { name: "Pre-Wedding Skin Care", description: "Customized regimens to get skin glowing before the big day." },
        { name: "Facial & Skin Prep", description: "Deep cleansing and hydration before makeup application." },
        { name: "Face Mask & Hydration Treatments", description: "Instant boost for tired skin ensuring smooth makeup application." },
      ]
    },
    {
      title: "Makeup for Men",
      items: [
        { name: "Groom Makeup", description: "Subtle corrective makeup for photos and events." },
        { name: "Groom Grooming Services", description: "Hair styling and beard grooming for a polished look." },
      ]
    },
    {
      title: "Maternity Photoshoots",
      items: [
        { name: "Maternity Makeup", description: "Soft, glowing looks highlighting the pregnancy glow." },
        { name: "Hair Styling", description: "Complementary styling for the maternity shoot." },
      ]
    },
    {
      title: "Add-Ons & Special Services",
      items: [
        { name: "False Lashes", description: "Premium lashes for extra drama and definition." },
        { name: "Touch-Up Services", description: "On-site maintenance for events to keep the look fresh." },
        { name: "Personalized Makeup Kits", description: "Curated products selected for your specific skin tone and type." },
        { name: "Commercial & Corporate", description: "Professional looks for business branding and corporate headshots." },
        { name: "TV & Film Makeup", description: "Industry-standard application for screen." },
      ]
    },
    {
      title: "Booking & Pricing Information",
      items: [
        { name: "Hourly Makeup Rates", description: "Flexible options available upon request." },
        { name: "Package Deals", description: "Bundles for weddings, large groups, and events." },
        { name: "Travel & Location Fees", description: "Applicable for on-site services depending on distance." },
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
       <div className="bg-dark-800 py-16 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Our Services</h1>
        <p className="text-gray-400 font-light">Comprehensive Beauty & Grooming Solutions</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {serviceCategories.map((cat, idx) => (
            <div key={idx} className="mb-16">
                <h2 className="text-3xl font-serif text-white mb-8 border-b border-gray-800 pb-4 flex items-center">
                    <span className="bg-gold-500 w-2 h-8 mr-4 inline-block"></span>
                    {cat.title}
                </h2>
                <div className="space-y-8">
                    {cat.items.map((item, i) => (
                        <div key={i} className="flex flex-col group">
                            <div className="flex justify-between items-baseline mb-2">
                                <h4 className="text-xl text-gray-200 group-hover:text-gold-500 transition font-medium">{item.name}</h4>
                            </div>
                            <p className="text-gray-400 font-light text-sm mb-4 leading-relaxed">{item.description}</p>
                            <div className="w-full border-b border-dotted border-gray-800 group-hover:border-gold-500/30 transition"></div>
                        </div>
                    ))}
                </div>
            </div>
        ))}

        {/* Why Choose Me Section */}
        <div className="mb-20">
            <h2 className="text-3xl font-serif text-gold-500 mb-10 text-center uppercase tracking-widest">Why Choose Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: "Professional Experience", desc: "Years of expertise delivering high-end looks for weddings, fashion, and events." },
                    { title: "Customized Looks", desc: "Every service is tailored to your unique features, skin type, and personal style." },
                    { title: "High-Quality Products", desc: "Using only premium, long-lasting, and skin-friendly international brands." },
                    { title: "Client-Centric", desc: "Dedicated to providing a comfortable, luxurious, and personalized experience." }
                ].map((feature, idx) => (
                    <div key={idx} className="bg-dark-800 p-8 border border-gray-800 rounded hover:border-gold-500/50 transition duration-300">
                        <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Box */}
        <div className="bg-dark-800 p-10 text-center border border-gold-500/30 rounded-lg">
            <h3 className="text-3xl font-serif text-white mb-6">Ready to Transform?</h3>
            <p className="text-gray-300 mb-8 text-lg font-light">Book your appointment today to secure your date.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link to="/book" className="px-10 py-4 bg-gold-600 text-white uppercase tracking-widest text-sm font-bold hover:bg-gold-500 transition shadow-lg hover:shadow-gold-500/20">
                    Book Online
                </Link>
                <span className="text-gray-500 text-sm md:text-base">or call us at <span className="text-white">+91 81870 33399</span></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;