
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
      className="service-card opacity-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-salon-cream"
      style={{ 
        animationName: 'fade-in', 
        animationDuration: '0.7s', 
        animationFillMode: 'forwards',
        animationDelay: `${0.2 + index * 0.2}s`, 
        animationTimingFunction: 'ease-out' 
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-salon-peach rounded-full shadow-md">
          {service.icon}
        </div>
      </div>
      <h3 className="service-card-title text-center mb-6 text-xl font-playfair text-salon-brown">{service.title}</h3>
      <div className="space-y-3">
        {service.subServices.map((subService, idx) => (
          <div key={idx} className="flex justify-between items-center px-4 py-3 bg-salon-cream rounded-lg hover:bg-salon-peach transition-colors duration-200">
            <span className="text-salon-brown font-medium">{subService.name}</span>
            <span className="font-bold text-salon-dark-pink text-lg">{subService.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
