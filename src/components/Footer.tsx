import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const quickLinks = [
    { label: 'About', path: 'about' },
    { label: 'Services', path: 'services' },
    { label: 'Case Studies', path: 'case-studies' },
    { label: 'Self-Audits', path: 'self-audits' },
    { label: 'Blog', path: 'blog' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <footer className="bg-dark border-t border-light/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light text-white mb-4">Umair Saeed</h3>
            <p className="text-light/60 text-sm leading-relaxed mb-6">
              Transform your internal operating system. Move from survival to thriving.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-light/60 hover:text-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-light/60 hover:text-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light/60 hover:text-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light/60 hover:text-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-light/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('self-audits')}
                  className="text-light/60 text-sm hover:text-white transition-colors"
                >
                  Take a Self-Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-light/60 text-sm hover:text-white transition-colors"
                >
                  Latest Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="text-light/60 text-sm hover:text-white transition-colors"
                >
                  Book a Clarity Call
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Newsletter</h4>
            <p className="text-light/60 text-sm mb-4">
              Get insights on transformation, mindset, and high performance.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-light/5 border border-light/10 text-light text-sm focus:outline-none focus:border-blue transition-colors"
              />
              <button type="submit" className="w-full btn-primary text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light/40 text-sm">
            © {new Date().getFullYear()} Reinvention 2.0. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-light/40 text-sm hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-light/40 text-sm hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
