import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.jpeg';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/philosophy', label: 'Philosophy' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/promotion', label: 'Promotion' },
    { path: '/swot', label: 'SWOT' },
    { path: '/bibliography', label: 'Bibliography' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#3E2723] text-[#FFF8E1] fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center">
              <img
  src={logo}
  alt="Everjoy Logo"
  className="w-12 h-12 rounded-full object-cover"
/>

            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#D4AF37]">EVERJOY</h1>
              <p className="text-xs text-[#FFF8E1]/70">Chocolates</p>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-all-smooth link-animate ${
                  isActive(link.path)
                    ? 'bg-[#D4AF37] text-[#3E2723] font-semibold'
                    : 'text-[#FFF8E1] hover:bg-[#5D4037] hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2 transition-transform-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#4E342E] border-t border-[#5D4037] animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-all-smooth ${
                  isActive(link.path)
                    ? 'bg-[#D4AF37] text-[#3E2723] font-semibold'
                    : 'text-[#FFF8E1] hover:bg-[#5D4037]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
