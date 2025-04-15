
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-salon-cream via-white to-salon-peach overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="lotus-decoration -top-20 left-10 rotate-12 text-9xl">✿</div>
        <div className="lotus-decoration bottom-10 right-20 -rotate-12 text-8xl">✿</div>
        <div className="lotus-decoration top-1/4 right-10 rotate-45 text-7xl">✿</div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-salon-brown mb-4">
              The Ultimate <br />
              <span className="text-salon-dark-pink">Nail Destination</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-salon-light-brown max-w-md mx-auto md:mx-0">
              Experience premium nail care with our talented technicians and exceptional service.
            </p>
            <button 
              onClick={scrollToServices}
              className="btn px-8 py-3 text-base"
            >
              Explore Services
            </button>
          </div>
          
          <div className="relative opacity-0 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-full overflow-hidden aspect-square max-w-md mx-auto border-8 border-white shadow-lg">
              <img 
                loading="lazy"
                src="/lovable-uploads/e9f1b713-25e4-4e89-9c66-d716bc830158.png" 
                alt="Beautiful french tip nails" 
                className="w-full h-full object-cover"
              />
              {/* Small circle accent */}
              <div className="absolute -right-4 top-1/3 w-16 h-16 bg-salon-dark-pink rounded-full border-4 border-white shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToServices} className="text-salon-brown hover:text-salon-dark-pink transition-colors">
          <ArrowDownCircle size={36} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
