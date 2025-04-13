
import { useEffect, useRef } from 'react';
import { Heart, Award, Sparkles } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section-padding bg-white relative">
      <div className="lotus-decoration bottom-20 left-5 rotate-12 text-8xl">✿</div>
      
      <div ref={sectionRef} className="container mx-auto page-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-salon-brown mb-4">About Paces Nailbar</h2>
          <div className="w-20 h-1 bg-salon-dark-pink mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl opacity-0" style={{ 
                animationName: 'slide-in-left', 
                animationDuration: '0.7s', 
                animationFillMode: 'forwards',
                animationTimingFunction: 'ease-out' 
              }}>
              <img 
                src="/lovable-uploads/269f55e4-f0ff-4f8c-8e93-e970b9f057d7.png" 
                alt="Paces Nailbar Brochure" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-0" style={{ 
                animationName: 'scale-in', 
                animationDuration: '0.7s', 
                animationFillMode: 'forwards',
                animationDelay: '0.4s',
                animationTimingFunction: 'ease-out' 
              }}>
              <img 
                src="/lovable-uploads/375c9182-64a6-45cb-8994-5caf47e38a34.png" 
                alt="Nail design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg opacity-0" style={{ 
                animationName: 'fade-in', 
                animationDuration: '0.7s', 
                animationFillMode: 'forwards',
                animationDelay: '0.6s',
                animationTimingFunction: 'ease-out' 
              }}>
              <img 
                src="/lovable-uploads/abb3a452-1e1a-47e1-8144-19dda92d9565.png" 
                alt="Nail technician working on customer's feet" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="opacity-0" style={{ 
              animationName: 'fade-in', 
              animationDuration: '0.7s', 
              animationFillMode: 'forwards',
              animationDelay: '0.3s',
              animationTimingFunction: 'ease-out' 
            }}>
            <h3 className="text-2xl font-playfair text-salon-brown mb-6">
              The Ultimate Nail Destination
            </h3>
            <p className="text-salon-light-brown mb-6">
              At Paces Nailbar, we believe that beautiful nails are an expression of self-care and personal style. 
              Our skilled technicians combine artistry and precision to deliver exquisite nail designs that enhance 
              your natural beauty.
            </p>
            <p className="text-salon-light-brown mb-8">
              We pride ourselves on using premium products and maintaining the highest hygiene standards to ensure 
              your safety and satisfaction with every visit.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-salon-cream rounded-lg">
                <Heart className="h-8 w-8 text-salon-dark-pink mb-2" />
                <h4 className="font-semibold text-salon-brown">Passion</h4>
                <p className="text-sm text-salon-light-brown">For nail artistry</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-salon-cream rounded-lg">
                <Award className="h-8 w-8 text-salon-dark-pink mb-2" />
                <h4 className="font-semibold text-salon-brown">Quality</h4>
                <p className="text-sm text-salon-light-brown">Premium products</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-salon-cream rounded-lg">
                <Sparkles className="h-8 w-8 text-salon-dark-pink mb-2" />
                <h4 className="font-semibold text-salon-brown">Creativity</h4>
                <p className="text-sm text-salon-light-brown">Unique designs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
