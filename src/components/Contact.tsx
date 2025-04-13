
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Send, MessageSquare } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Construct email body
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Message: ${formData.message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:pacesnailbar@gmail.com?subject=Booking Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Create WhatsApp link with message
    const whatsappMessage = `Hello Paces Nailbar, I'd like to book an appointment.\n\nName: ${formData.name}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/26599726866?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    toast({
      title: "Booking Request Received",
      description: "Please choose how you'd like to send this booking request",
    });
    
    // Show options for sending
    document.getElementById('contact-options')?.classList.remove('hidden');
    document.getElementById('email-link')?.setAttribute('href', mailtoLink);
    document.getElementById('whatsapp-link')?.setAttribute('href', whatsappLink);
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

  return (
    <section id="contact" className="section-padding bg-salon-cream relative">
      <div className="lotus-decoration bottom-10 right-10 -rotate-12 text-8xl">✿</div>
      
      <div ref={sectionRef} className="container mx-auto page-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-salon-brown mb-4">Book an Appointment</h2>
          <div className="w-20 h-1 bg-salon-dark-pink mx-auto mb-6"></div>
          <p className="text-salon-light-brown">
            Ready for a nail transformation? Book your appointment with us today.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg opacity-0" style={{ 
              animationName: 'scale-in', 
              animationDuration: '0.7s', 
              animationFillMode: 'forwards',
              animationTimingFunction: 'ease-out' 
            }}>
            <h3 className="text-2xl font-playfair text-salon-brown mb-6 text-center">
              <Calendar className="inline-block mr-2 mb-1" size={24} />
              Request an Appointment
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-salon-brown mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-salon-peach rounded-md focus:outline-none focus:ring-2 focus:ring-salon-dark-pink"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-salon-brown mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-salon-peach rounded-md focus:outline-none focus:ring-2 focus:ring-salon-dark-pink"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-salon-brown mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-salon-peach rounded-md focus:outline-none focus:ring-2 focus:ring-salon-dark-pink"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-salon-brown mb-1">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-salon-peach rounded-md focus:outline-none focus:ring-2 focus:ring-salon-dark-pink bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="manicure">Manicure</option>
                  <option value="pedicure">Pedicure</option>
                  <option value="soak-off">Soak Off</option>
                  <option value="nail-art">Nail Art</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-salon-brown mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-salon-peach rounded-md focus:outline-none focus:ring-2 focus:ring-salon-dark-pink"
                  placeholder="Any special requests or preferred date/time"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn w-full py-3"
              >
                Request Booking
              </button>
            </form>
            
            <div id="contact-options" className="hidden mt-6 pt-6 border-t border-salon-peach">
              <p className="text-center text-salon-brown mb-4">Send your booking request via:</p>
              <div className="flex justify-center space-x-4">
                <a 
                  id="email-link" 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 bg-salon-brown text-white rounded-md hover:bg-salon-light-brown transition-colors"
                >
                  <Mail className="mr-2" size={18} />
                  Email
                </a>
                <a 
                  id="whatsapp-link" 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="mr-2" size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg opacity-0" style={{ 
              animationName: 'fade-in', 
              animationDuration: '0.7s', 
              animationFillMode: 'forwards',
              animationDelay: '0.3s',
              animationTimingFunction: 'ease-out' 
            }}>
            <h3 className="text-2xl font-playfair text-salon-brown mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="bg-salon-peach p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-salon-brown" />
                </div>
                <div>
                  <p className="font-medium text-salon-brown">Phone</p>
                  <p className="text-salon-light-brown">+26599 726 8668</p>
                  <p className="text-salon-light-brown">+26588 949 7951</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-salon-peach p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-salon-brown" />
                </div>
                <div>
                  <p className="font-medium text-salon-brown">Email</p>
                  <p className="text-salon-light-brown">pacesnailbar@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-salon-peach p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-salon-brown" />
                </div>
                <div>
                  <p className="font-medium text-salon-brown">Location</p>
                  <p className="text-salon-light-brown">Visit our cozy salon in the heart of the city.</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-salon-peach p-3 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-salon-brown" />
                </div>
                <div>
                  <p className="font-medium text-salon-brown">Working Hours</p>
                  <p className="text-salon-light-brown">Monday to Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-salon-light-brown">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
