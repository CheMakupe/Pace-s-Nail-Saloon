
import { Service } from '@/types/service';
import ServiceCard from './ServiceCard';

interface ServicesListProps {
  services: Service[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard 
          key={service.title} 
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServicesList;
