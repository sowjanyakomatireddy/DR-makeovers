import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
        setFormStatus('sent');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-dark-900">
       <div className="bg-dark-800 py-16 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Get In Touch</h1>
        <p className="text-gray-400 font-light">We'd love to hear from you</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-serif text-white mb-6">Visit Us</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                    1st Floor, Stone Ridge Center,<br/>
                    Bikanervala opp street, above ICICI Bank,<br/>
                    Kondapur, Whitefields,<br/>
                    Hyderabad, Telangana 500084
                </p>
                <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    {/* Placeholder for Map */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.36!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzAwLjAiTiA3OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            loading="lazy"
                            title="Map"
                            className="opacity-60 hover:opacity-100 transition duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-serif text-white mb-4">Direct Contact</h3>
                <p className="text-gold-500 text-xl mb-2">+91 95536 73711</p>
                <p className="text-gray-400">contact@drmakeovers.com</p>
            </div>
        </div>

        {/* Form */}
        <div className="bg-dark-800 p-8 md:p-12 border border-gray-800">
             <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>
             {formStatus === 'sent' ? (
                 <div className="text-center py-20">
                     <div className="text-gold-500 text-5xl mb-4">✓</div>
                     <h4 className="text-2xl text-white mb-2">Message Sent</h4>
                     <p className="text-gray-400">Thank you for contacting us. We will get back to you shortly.</p>
                     <button onClick={() => setFormStatus('idle')} className="mt-8 text-sm text-gray-500 hover:text-white underline">Send another</button>
                 </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase text-gray-400 mb-2">First Name *</label>
                            <input required type="text" className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-gray-400 mb-2">Last Name *</label>
                            <input required type="text" className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs uppercase text-gray-400 mb-2">Email *</label>
                        <input required type="email" className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase text-gray-400 mb-2">Message</label>
                        <textarea required rows={5} className="w-full bg-transparent border border-gray-600 p-3 text-white focus:border-gold-500 focus:outline-none transition"></textarea>
                    </div>
                    <button disabled={formStatus === 'sending'} type="submit" className="w-full py-4 bg-gold-600 text-white hover:bg-gold-500 transition duration-300 uppercase text-sm tracking-widest font-bold disabled:opacity-50">
                        {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
             )}
        </div>
      </div>
    </div>
  );
};

export default Contact;