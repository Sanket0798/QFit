import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navLinks = [
    { 
      name: 'Home', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', id: 'about' },
        { name: 'Our Plans', path: '/plans' },
        { name: 'Why Choose Us', id: 'why-choose' }
      ]
    },
    { name: 'Plans', path: '/plans' },
    { name: 'About', id: 'about' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If it's a path-based link, navigate to that path
    if (link.path) {
      navigate(link.path);
      return;
    }
    
    // Otherwise, scroll to the section
    const element = document.getElementById(link.id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle login button click - route to appropriate login page based on current page
  const handleLoginClick = () => {
    const currentPath = location.pathname;
    
    // Map each page to its corresponding login page
    const loginRoutes = {
      '/': '/login/home',
    };
    
    // Navigate to the appropriate login page, default to home login
    const loginPath = loginRoutes[currentPath] || '/login/home';
    navigate(loginPath);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 rounded-3xl transition-shadow duration-300 max-w-full mx-3 mt-3 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="flex justify-between items-center h-[72px] px-3 lg:pl-[88px] lg:pr-[62px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/assets/logos/main-logo.svg"
                alt="RupeeQ Logo"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-primary hidden">RupeeQ</span>
            </button>
          </div>

          <div className='flex flex-row space-x-[84px]'>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1"
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {openDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50 animate-slide-up">
                          {link.dropdownItems.map((item) => (
                            <button
                              key={item.path || item.id}
                              onClick={() => {
                                if (item.path) {
                                  navigate(item.path);
                                } else if (item.id) {
                                  const element = document.getElementById(item.id);
                                  if (element) {
                                    const offset = 80;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: 'smooth'
                                    });
                                  }
                                }
                                setOpenDropdown(null);
                              }}
                              className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-purple-50 hover:text-primary transition-colors duration-200 font-medium"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.path || `#${link.id}`}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors font-medium"
                    >
                      {link.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.dropdownItems.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => {
                              navigate(item.path);
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.path || `#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className="block px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <Button variant="header" className="w-full mt-2" onClick={() => {
              setIsOpen(false);
              navigate('/contact-us');
            }}>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
