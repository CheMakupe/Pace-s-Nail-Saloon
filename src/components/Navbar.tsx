
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, Home, Scissors, Image, Info, Phone, Settings } from 'lucide-react';
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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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

  const serviceCategories = [
    {
      category: "Manicure",
      services: [
        { name: "Natural Nails", price: "5k" },
        { name: "Artificial Nails", price: "7k" }
      ]
    },
    {
      category: "Pedicure", 
      services: [
        { name: "Natural Nails", price: "5k" },
        { name: "Artificial Nails", price: "6k" }
      ]
    },
    {
      category: "Additional Services",
      services: [
        { name: "Gel Polish Removal", price: "2k" },
        { name: "Acrylic Removal", price: "3k" },
        { name: "Simple Design", price: "2k" },
        { name: "Complex Design", price: "3k" }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between md:justify-center">
          <div className="md:absolute md:left-4 flex items-center space-x-4">
            <span className="text-2xl font-playfair font-bold text-salon-brown dark:text-white">
              Paces <span className="text-salon-dark-pink">Nailbar</span>
            </span>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded focus:outline-none text-salon-brown dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-10 justify-center">
            <button onClick={() => scrollToSection('home')} className="nav-link flex flex-col items-center">
              <Home size={18} className="mb-1" />
              <span>Home</span>
            </button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger onClick={(e) => e.preventDefault()} className="nav-link bg-transparent hover:bg-transparent focus:bg-transparent flex flex-col items-center">
                    <Settings size={18} className="mb-1" />
                    <span>Services</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 bg-white dark:bg-gray-800 shadow-lg">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx} className="mb-4 last:mb-0">
                          <h4 className="font-semibold text-salon-brown dark:text-white mb-2 px-2">{category.category}</h4>
                          <ul className="space-y-1">
                            {category.services.map((service, serviceIdx) => (
                              <li key={serviceIdx}>
                                <button
                                  onClick={() => scrollToSection('services')}
                                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-salon-cream dark:hover:bg-gray-700 transition-colors"
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="text-salon-brown dark:text-gray-300">{service.name}</span>
                                    <span className="font-semibold text-salon-dark-pink">{service.price}</span>
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <button onClick={() => scrollToSection('gallery')} className="nav-link flex flex-col items-center">
              <Image size={18} className="mb-1" />
              <span>Gallery</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link flex flex-col items-center">
              <Info size={18} className="mb-1" />
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link flex flex-col items-center">
              <Phone size={18} className="mb-1" />
              <span>Contact</span>
            </button>
          </div>

          <button
            className="md:hidden text-salon-brown focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-fast">
            <div className="flex flex-col space-y-3 items-center">
              <button onClick={() => scrollToSection('home')} className="nav-link flex items-center">
                <Home size={18} className="mr-2" />
                <span>Home</span>
              </button>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  <Settings size={18} className="mr-2" />
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  {serviceCategories.map((category, idx) => (
                    <div key={idx} className="px-4 py-2">
                      <h4 className="font-semibold text-salon-brown mb-1">{category.category}</h4>
                      {category.services.map((service, serviceIdx) => (
                        <button
                          key={serviceIdx}
                          onClick={() => scrollToSection('services')}
                          className="block w-full text-left px-2 py-1 text-sm text-salon-light-brown hover:bg-salon-cream rounded"
                        >
                          {service.name} <span className="float-right font-semibold text-salon-dark-pink">{service.price}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => scrollToSection('gallery')} className="nav-link flex items-center">
                <Image size={18} className="mr-2" />
                <span>Gallery</span>
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link flex items-center">
                <Info size={18} className="mr-2" />
                <span>About</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link flex items-center">
                <Phone size={18} className="mr-2" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
