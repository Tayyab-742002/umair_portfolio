import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {
  const navigate = useNavigate();
  return <div>Service Page Under development</div>
  const heroRef = useScrollReveal();
  const whoRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const includesRef = useScrollReveal();

  const weeks = [
    { week: '1-2', title: 'Radical Self-Awareness', description: 'Uncover the hidden beliefs and patterns running your life.' },
    { week: '3-4', title: 'Nervous System Reset', description: 'Regulate your stress response and build sustainable energy.' },
    { week: '5-6', title: 'Identity Reconstruction', description: 'Define and embody your 2.0 self with clarity and purpose.' },
    { week: '7-8', title: 'Behavior Architecture', description: 'Design habits that align with who you\'re becoming.' },
    { week: '9-10', title: 'Integration & Testing', description: 'Put your new system to work in real-world scenarios.' },
    { week: '11-12', title: 'Solidification & Launch', description: 'Lock in your transformation and create your forward roadmap.' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">The Program</span>
            </div>

            <h1 className="text-display text-white mb-12">
              The 12-Week
              <br />
              <span className="text-blue">Reinvention Journey</span>
            </h1>

            <p className="text-xl text-light/80 leading-relaxed mb-12">
              A complete transformation of your internal operating system. Not a quick fix.
              Not a band-aid. A fundamental rewiring that lasts.
            </p>
          </div>
        </div>
      </section>

      <section ref={whoRef} className="section-padding bg-light/5 fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-12 text-center">
              Who This Is For
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-dark border border-light/10">
                <h3 className="text-2xl text-white mb-6 font-light">You're a High-Achiever Who Feels...</h3>
                <ul className="space-y-4">
                  {[
                    'Successful on paper, but drained and disconnected inside',
                    'Stuck in patterns that no longer serve you',
                    'Like you\'re playing a role instead of living authentically',
                    'Ready to stop surviving and start thriving',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-1" />
                      <span className="text-light/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-dark border border-light/10">
                <h3 className="text-2xl text-white mb-6 font-light">You're Committed To...</h3>
                <ul className="space-y-4">
                  {[
                    'Doing the deep work, not just surface-level changes',
                    'Investing in yourself for long-term transformation',
                    'Showing up fully for 12 weeks of intensive coaching',
                    'Building a life that aligns with your true values',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-1" />
                      <span className="text-light/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={journeyRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-hero text-white mb-16 text-center">
              The Framework
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-blue to-transparent hidden md:block" />

              <div className="space-y-12">
                {weeks.map((item, index) => (
                  <div key={index} className="relative pl-0 md:pl-20">
                    <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-blue/20 border-4 border-blue hidden md:flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue" />
                    </div>

                    <div className="p-8 bg-light/5 border border-light/10 hover:border-blue/30 transition-all duration-500 cursor-hover">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl text-white font-light">{item.title}</h3>
                        <span className="text-blue text-sm tracking-wide mt-2 md:mt-0">Week {item.week}</span>
                      </div>
                      <p className="text-light/70 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={includesRef} className="section-padding bg-light/5 fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-12 text-center">
              What's Included
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: '12 Weekly 1:1 Sessions',
                  description: 'Deep, focused coaching calls tailored to your specific needs and challenges.',
                },
                {
                  title: 'Custom Transformation Roadmap',
                  description: 'A personalized plan designed around your goals, blocks, and desired outcomes.',
                },
                {
                  title: 'Between-Session Support',
                  description: 'Unlimited email access for questions, breakthroughs, and real-time guidance.',
                },
                {
                  title: 'Exclusive Resources & Tools',
                  description: 'Frameworks, exercises, and practices to accelerate your transformation.',
                },
                {
                  title: 'Nervous System Practices',
                  description: 'Somatic techniques to regulate stress and build sustainable energy.',
                },
                {
                  title: 'Accountability & Tracking',
                  description: 'Weekly check-ins and progress tracking to keep you on course.',
                },
              ].map((item, index) => (
                <div key={index} className="p-8 bg-dark border border-light/10">
                  <h3 className="text-xl text-white mb-3 font-medium">{item.title}</h3>
                  <p className="text-light/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="p-12 bg-gradient-to-br from-blue/10 to-blue/5 border border-blue/20 text-center">
              <h3 className="text-3xl text-white mb-6 font-light">
                Investment in Your Transformation
              </h3>
              <p className="text-light/70 text-lg mb-8">
                This is not a course. It's not a program you can pause and come back to. It's a 12-week intensive
                that will fundamentally change how you operate in the world.
              </p>
              <div className="inline-block px-8 py-4 bg-white/5 border border-light/20 mb-8">
                <p className="text-light/60 text-sm mb-2">12-Week Program</p>
                <p className="text-white text-4xl font-light">TODO: Pricing</p>
              </div>
              <p className="text-light/60 text-sm mb-8">
                Payment plans available. Apply for a free clarity call to discuss.
              </p>
              <button
                onClick={() => navigate('/booking')}
                className="btn-primary text-lg group"
              >
                Book Your Free Clarity Call
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Not Sure If This Is Right for You?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              Book a free 30-minute clarity call. We'll explore where you are, where you want to be,
              and whether this program is the right fit.
            </p>
            <button
              onClick={() => onNavigate('booking')}
              className="btn-secondary"
            >
              Schedule Your Clarity Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
