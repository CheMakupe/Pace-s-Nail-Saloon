
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const serviceItems = [
    { name: "Manicure", id: "services-manicure" },
    { name: "Pedicure", id: "services-pedicure" },
    { name: "Nail Extensions", id: "services-extensions" },
    { name: "Nail Art", id: "services-art" },
    { name: "Nail Repair", id: "services-repair" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center">
          <div className="md:absolute md:left-4">
            <span className="text-2xl font-playfair font-bold text-salon-brown">
              Paces <span className="text-salon-dark-pink">Nailbar</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 justify-center">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={(e) => e.preventDefault()} className="nav-link bg-transparent hover:bg-transparent focus:bg-transparent">
                    Services <ChevronDown className="h-4 w-4 inline ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {serviceItems.map((service) => (
                        <li key={service.id}>
                          <button
                            onClick={() => scrollToSection('services')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 text-salon-brown focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-fast">
            <div className="flex flex-col space-y-3 items-center">
              <button onClick={() => scrollToSection('home')} className="nav-link">
                Home
              </button>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  {serviceItems.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-2 text-sm text-salon-brown hover:bg-salon-cream"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
