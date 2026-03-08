import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomeLoginPage = location.pathname === '/login/home';

  return (
    <footer className={`mx-3 mb-3 ${isHomeLoginPage ? 'hidden md:block' : ''}`}>
      {/* Main Footer Container with gradient background and rounded corners */}
      <div
        className="rounded-3xl overflow-hidden py-8 px-6 md:py-12 md:px-16"
        style={{
          background: 'linear-gradient(135deg, rgba(230, 240, 255, 0.8) 0%, rgba(220, 255, 240, 0.8) 100%)',
        }}
      >
        {/* Top Section - Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/assets/logos/main-logo.svg"
              alt="RupeeQ Logo"
              className="h-10"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <span className="text-2xl font-bold text-primary">RUPEEQ</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Contact:</h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>Ground Floor, A - 64, Block A,<br />Sector 4, Noida, Uttar<br />Pradesh 201301</p>
              <p>info@rupeeq.com</p>
              <p>+91 99713 96361</p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#qfit-plans" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms-conditions" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">About Us:</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to deliver reliable, high-quality care with deep empathy. We combine{' '}
              <a href="#about" className="text-blue-500 hover:underline">
                read more...
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6 border-t border-gray-300">
          <p className="text-gray-600 text-sm">
            © 2026 All Rights Reserved. RupeeQ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
