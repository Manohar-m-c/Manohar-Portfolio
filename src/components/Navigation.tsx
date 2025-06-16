
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-2xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo with gradient */}
          <div className="text-2xl font-bold">
            <span className={`transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' 
                : 'text-white'
            }`}>
              Manohar
            </span>
            <span className={`transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent' 
                : 'text-cyan-400'
            }`}>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-110 group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-purple-600' 
                    : 'text-white/90 hover:text-cyan-400'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/20 rounded-b-2xl shadow-2xl">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-3 text-slate-700 hover:text-purple-600 hover:bg-purple-50/50 transition-all duration-300 font-medium rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
