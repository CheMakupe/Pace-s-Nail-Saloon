
import { Facebook, Instagram, Twitter, Heart, Copyright, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-salon-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair mb-4">Paces Nailbar</h3>
            <p className="mb-4 text-white/80">
              The ultimate nail destination where beauty meets artistry. We pride ourselves on 
              delivering exceptional nail care services with passion and precision.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-salon-cream transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-salon-cream transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-salon-cream transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/26599726866" target="_blank" rel="noopener noreferrer" className="hover:text-salon-cream transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-playfair mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-salon-cream transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-salon-cream transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-salon-cream transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-salon-cream transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-salon-cream transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-playfair mb-4">Contact Us</h3>
            <p className="mb-2 text-white/80">+26599 726 8668</p>
            <p className="mb-2 text-white/80">+26588 949 7951</p>
            <p className="mb-4 text-white/80">pacesnailbar@gmail.com</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-white text-salon-brown px-4 py-2 rounded-md hover:bg-salon-cream transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col items-center">
          <p className="flex items-center justify-center text-white/80 mb-2">
            <Copyright size={16} className="mr-1" />
            {currentYear} Paces Nailbar. All Rights Reserved.
          </p>
          
          <p className="flex items-center justify-center text-white/80">
            Designed with <Heart size={16} className="mx-1 text-salon-peach animate-pulse" /> by Eng. P. D. Makupe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
