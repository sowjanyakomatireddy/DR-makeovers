import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765170648/makeup_kxcxgw.jpg",
    "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765170647/bride_r2oo6u.jpg",
    "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765171117/hairstyles_q46uzd.jpg",
    "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765170663/saree_qk7rsn.jpg",
    "https://res.cloudinary.com/dkivpkaaj/image/upload/v1765170645/makeup1_sar8ns.jpg",
    "https://res.cloudinary.com/dkivpkaaj/image/upload/v1764849848/Screenshot_2025-12-04_173337_r3m0xu.jpg"
  ];

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // 1 second for rotation animation + 3 seconds pause = 4000ms interval
    const interval = setInterval(() => {
      setRotation(prev => prev - 60); // 360 degrees / 6 images = 60 degrees per step
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-dark-900 flex flex-col items-center overflow-x-hidden">
      <style>{`
        .scene {
          margin: 80px auto 100px auto;
          position: relative;
          width: 260px;
          height: 360px;
          perspective: 1000px;
        }

        .carousel {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 1s ease-in-out;
        }

        .carousel__cell {
          position: absolute;
          width: 260px;
          height: 360px;
          left: 0;
          top: 0;
          border: 2px solid #C5A059;
          background-color: rgba(0,0,0,0.8);
          /* Reflect effect for 3D depth */
          -webkit-box-reflect: below 15px linear-gradient(transparent, transparent, #0004);
        }
        
        .carousel__cell img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        /* Mobile adjustment to prevent overflow */
        @media (max-width: 640px) {
            .scene {
                transform: scale(0.65);
                margin-top: 40px;
            }
        }
      `}</style>

      <div className="py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-4">Our Gallery</h1>
       
      </div>

      <div className="scene">
        <div 
            className="carousel"
            style={{ transform: `rotateY(${rotation}deg)` }}
        >
            {images.map((src, idx) => {
                const count = images.length;
                const rotateY = idx * (360 / count);
                const translateZ = 350; 

                return (
                    <div 
                        key={idx} 
                        className="carousel__cell rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                            transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`
                        }}
                    >
                        <img src={src} alt={`Gallery image ${idx + 1}`} />
                    </div>
                );
            })}
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;