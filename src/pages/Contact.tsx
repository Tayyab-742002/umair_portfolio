import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Twitter, Send } from 'lucide-react';

export const Contact = () => {
  const navigate = useNavigate();
  return <div>Contact Page Under development</div>
  const heroRef = useScrollReveal();
  const formRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Get In Touch</span>
            </div>

            <h1 className="text-display text-white mb-12">
              Let's
              <br />
              <span className="text-blue">Connect</span>
            </h1>

            <p className="text-xl text-light/80 leading-relaxed">
              Have a question? Want to explore working together? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section ref={formRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl text-white mb-6 font-light">
                  Send a Message
                </h2>
                <p className="text-light/70 mb-8 leading-relaxed">
                  Fill out the form and I'll get back to you within 24-48 hours. For immediate scheduling,
                  use the booking calendar.
                </p>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-light/80 mb-2 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-6 py-4 bg-dark border border-light/20 text-light focus:outline-none focus:border-blue transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-light/80 mb-2 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-6 py-4 bg-dark border border-light/20 text-light focus:outline-none focus:border-blue transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-light/80 mb-2 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-6 py-4 bg-dark border border-light/20 text-light focus:outline-none focus:border-blue transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-light/80 mb-2 text-sm">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-6 py-4 bg-dark border border-light/20 text-light focus:outline-none focus:border-blue transition-colors resize-none"
                      placeholder="Tell me what you're looking for..."
                    />
                  </div>

                  <button type="submit" className="btn-primary group w-full sm:w-auto">
                    <span>Send Message</span>
                    <Send className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </form>
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl text-white mb-6 font-light">
                    Book a Call
                  </h2>
                  <p className="text-light/70 mb-6 leading-relaxed">
                    The fastest way to connect is to schedule a free 30-minute clarity call.
                    We'll explore where you are, where you want to be, and how I can help.
                  </p>
                  <button
                    onClick={() => navigate('/booking')}
                    className="btn-secondary"
                  >
                    View Calendar
                  </button>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-light/10 to-transparent" />

                <div>
                  <h3 className="text-2xl text-white mb-6 font-light">
                    Connect on Social
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 border border-light/20 flex items-center justify-center hover:border-blue hover:text-blue transition-all group"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 border border-light/20 flex items-center justify-center hover:border-blue hover:text-blue transition-all group"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 border border-light/20 flex items-center justify-center hover:border-blue hover:text-blue transition-all group"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 border border-light/20 flex items-center justify-center hover:border-blue hover:text-blue transition-all group"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-light/10 to-transparent" />

                <div>
                  <h3 className="text-2xl text-white mb-6 font-light">
                    Location
                  </h3>
                  <p className="text-light/70 leading-relaxed">
                    Based in [TODO: City, Country]
                    <br />
                    Working with clients worldwide
                    <br />
                    All sessions conducted via secure video call
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-light/10 to-transparent" />

                <div>
                  <h3 className="text-2xl text-white mb-6 font-light">
                    Response Time
                  </h3>
                  <p className="text-light/70 leading-relaxed">
                    I typically respond to all inquiries within 24-48 hours.
                    For urgent matters, please mention that in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              Take one of the self-audits to gain clarity on where you are and what you need.
            </p>
            <button
              onClick={() => navigate('/self-audits')}
              className="btn-secondary"
            >
              Explore Self-Audits
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
