import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Services', path: 'services' },
    { label: 'Case Studies', path: 'case-studies' },
    { label: 'Self-Audits', path: 'self-audits' },
    { label: 'Blog', path: 'blog' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-light/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl font-light tracking-tight text-white hover:text-blue transition-colors"
          >
            Umair Saeed
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`relative text-sm tracking-wide transition-colors group ${
                  currentPage === item.path ? 'text-white' : 'text-light/60 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-blue transition-all duration-300 ${
                    currentPage === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavigate('booking')}
              className="btn-primary text-sm"
            >
              Book a Call
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark border-t border-light/10">
          <div className="container-custom py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`text-left text-lg transition-colors ${
                    currentPage === item.path ? 'text-white' : 'text-light/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('booking')}
                className="btn-primary text-center mt-4"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
