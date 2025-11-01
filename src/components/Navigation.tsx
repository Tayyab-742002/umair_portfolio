import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Self-Audits', path: '/self-audits' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-light/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-light tracking-tight text-white hover:text-blue transition-colors"
          >
            Umair Saeed
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition-colors group ${
                    isActive ? 'text-white' : 'text-light/60 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-blue transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/booking" className="btn-primary text-sm">
              Book a Call
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
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
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-left text-lg transition-colors ${
                      isActive ? 'text-white' : 'text-light/60'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/booking"
                onClick={handleLinkClick}
                className="btn-primary text-center mt-4"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
