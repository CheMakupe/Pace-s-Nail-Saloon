import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    '/lovable-uploads/e9f1b713-25e4-4e89-9c66-d716bc830158.png',
    '/lovable-uploads/c17696ee-fba7-4dbf-8f03-44dcdc3953cb.png',
    '/lovable-uploads/65248983-0eb5-4855-a92b-a878c0ca52f6.png',
    '/lovable-uploads/abb3a452-1e1a-47e1-8144-19dda92d9565.png',
    '/lovable-uploads/6038b552-f9a9-49b2-8ca9-353b0085ba26.png',
    '/lovable-uploads/cf4b6c20-5d94-4ba1-9299-2684e6697ec5.png',
    '/lovable-uploads/e626414b-5ac7-4446-8e7e-4631b709714a.png',
    '/lovable-uploads/15066012-516b-4bc5-8ce1-d170cc3983cb.png',
    '/lovable-uploads/7d0233ee-21e2-4d10-9d1f-2429ab3fe4dc.png',
    '/lovable-uploads/375c9182-64a6-45cb-8994-5caf47e38a34.png',
    '/lovable-uploads/e6449296-82b2-4208-af7b-9050ffedc98b.png',
    '/lovable-uploads/0b0777da-f609-4b08-a18e-af3e626fe8b1.png',
    '/lovable-uploads/9780f7a2-c1be-4a0e-8cf7-6efb4c24915f.png',
    '/lovable-uploads/3e1ce186-cb91-410d-b6f1-ff3f1dc9d850.png',
    '/lovable-uploads/51da65d6-6fb1-40d6-ae71-4221210318de.png'
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="gallery" className="section-padding bg-salon-cream relative">
      <div className="lotus-decoration top-20 right-5 -rotate-45 text-8xl">✿</div>
      
      <div ref={sectionRef} className="container mx-auto page-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-salon-brown mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-salon-dark-pink mx-auto mb-6"></div>
          <p className="text-salon-light-brown">
            Browse through our gallery to see the artistry and precision in every nail design we create.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    loading="lazy"
                    src={image}
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full p-2 shadow-md transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full p-2 shadow-md transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-salon-brown scale-125' : 'bg-salon-brown/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-8 max-w-4xl mx-auto opacity-0" style={{ 
            animationName: 'fade-in', 
            animationDuration: '0.7s', 
            animationFillMode: 'forwards',
            animationDelay: '0.4s', 
            animationTimingFunction: 'ease-out' 
          }}>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex ? 'border-salon-brown scale-105' : 'border-transparent'
              }`}
            >
              <div className="aspect-square relative">
                <img
                  loading="lazy"
                  src={image}
                  alt={`${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
