
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
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
      <h3 className="service-card-title text-center mb-4">{service.title}</h3>
      <div className="space-y-2">
        {service.subServices.map((subService, idx) => (
          <div key={idx} className="flex justify-between items-center px-4 py-2 bg-salon-cream rounded-lg">
            <span className="text-salon-brown">{subService.name}</span>
            <span className="font-semibold text-salon-dark-pink">{subService.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
