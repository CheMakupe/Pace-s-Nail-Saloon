
import { useEffect, useRef } from 'react';
import { Scissors, Droplet, PaintBucket, Palette, Settings } from 'lucide-react';
import ServicesList from './ServicesList';
import { Service } from '@/types/service';

const services: Service[] = [
  {
    icon: <Scissors className="h-8 w-8 text-salon-brown" />,
    title: "Manicure",
    subServices: [
      { name: "Natural Nails", price: "5k" },
      { name: "Artificial Nails", price: "7k" }
    ]
  },
  {
    icon: <Droplet className="h-8 w-8 text-salon-brown" />,
    title: "Pedicure",
    subServices: [
      { name: "Natural Nails", price: "5k" },
      { name: "Artificial Nails", price: "6k" }
    ]
  },
  {
    icon: <PaintBucket className="h-8 w-8 text-salon-brown" />,
    title: "Soak Off",
    subServices: [
      { name: "Gel Polish Removal", price: "2k" },
      { name: "Acrylic Removal", price: "3k" }
    ]
  },
  {
    icon: <Palette className="h-8 w-8 text-salon-brown" />,
    title: "Extra Art",
    subServices: [
      { name: "Simple Design", price: "2k" },
      { name: "Complex Design", price: "3k" }
    ]
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
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-salon-peach rounded-full">
              <Settings className="h-12 w-12 text-salon-brown" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair text-salon-brown mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-salon-dark-pink mx-auto mb-6"></div>
          <p className="text-salon-light-brown">
            We offer a range of professional nail care services to enhance your natural beauty.
            Each treatment is performed with the highest quality products and attention to detail.
          </p>
        </div>
        
        <ServicesList services={services} />
        
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
