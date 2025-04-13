
import { useEffect, useRef } from 'react';
import { Scissors, Droplet, PaintBucket, Palette } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    icon: <Scissors className="h-8 w-8 text-salon-brown" />,
    title: "Manicure",
    description: "Professional nail care for your hands with cuticle treatment, shaping, and polish.",
    price: "5k - 7k"
  },
  {
    icon: <Droplet className="h-8 w-8 text-salon-brown" />,
    title: "Pedicure",
    description: "Luxurious foot treatment including exfoliation, massage, and perfectly polished toes.",
    price: "5k - 6k"
  },
  {
    icon: <PaintBucket className="h-8 w-8 text-salon-brown" />,
    title: "Soak Off",
    description: "Safe removal of gel polish or acrylics to maintain nail health.",
    price: "2k - 3k"
  },
  {
    icon: <Palette className="h-8 w-8 text-salon-brown" />,
    title: "Extra Art",
    description: "Custom nail art designs from simple accents to elaborate patterns.",
    price: "2k"
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="lotus-decoration top-20 left-5 rotate-45 text-8xl">✿</div>
      
      <div ref={sectionRef} className="container mx-auto page-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-salon-brown mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-salon-dark-pink mx-auto mb-6"></div>
          <p className="text-salon-light-brown">
            We offer a range of professional nail care services to enhance your natural beauty.
            Each treatment is performed with the highest quality products and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card opacity-0"
              style={{ 
                animationName: 'fade-in', 
                animationDuration: '0.7s', 
                animationFillMode: 'forwards',
                animationDelay: `${0.2 + index * 0.2}s`, 
                animationTimingFunction: 'ease-out' 
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-salon-peach rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-card-title text-center">{service.title}</h3>
              <p className="text-salon-light-brown mb-4 text-center">{service.description}</p>
              <div className="text-center">
                <span className="inline-block bg-salon-cream px-4 py-1 rounded-full text-salon-brown font-semibold">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0" style={{ 
            animationName: 'fade-in', 
            animationDuration: '0.7s', 
            animationFillMode: 'forwards',
            animationDelay: '1s', 
            animationTimingFunction: 'ease-out' 
          }}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
