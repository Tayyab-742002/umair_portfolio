import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Brain, Target, Sparkles, Heart } from 'lucide-react';
import { useState } from 'react';

interface SelfAuditsProps {
  onNavigate: (page: string) => void;
}

export const SelfAudits = ({ onNavigate }: SelfAuditsProps) => {
  return <div>Self-Audit Page Under development</div>
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const audits = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Discover Your Core Needs',
      hook: 'Are You Shining at Your Best or Just Staying Busy?',
      description: 'Uncover what truly drives you and identify the needs that aren\'t being met.',
      gradient: 'from-blue/20 to-blue/5',
      duration: '5 minutes',
    },
    {
      id: 2,
      icon: Brain,
      title: 'Find Your Archetype',
      hook: 'What\'s Your Default Operating Mode?',
      description: 'Discover your personality archetype and how it shapes your decisions.',
      gradient: 'from-purple/20 to-purple/5',
      duration: '7 minutes',
    },
    {
      id: 3,
      icon: Target,
      title: 'Assess Your Energy Levels',
      hook: 'Running on Empty or Powered Up?',
      description: 'Evaluate your physical, emotional, and mental energy reserves.',
      gradient: 'from-green/20 to-green/5',
      duration: '6 minutes',
    },
    {
      id: 4,
      icon: Heart,
      title: 'Evaluate Your Alignment',
      hook: 'Is Your Life Reflecting Your Values?',
      description: 'Measure the gap between who you are and who you want to be.',
      gradient: 'from-red/20 to-red/5',
      duration: '8 minutes',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Self-Assessment Tools</span>
            </div>

            <h1 className="text-display text-white mb-12">
              Start With
              <br />
              <span className="text-blue">Self-Awareness</span>
            </h1>

            <p className="text-xl text-light/80 leading-relaxed mb-8">
              You can't change what you don't see. These scientifically-designed audits reveal where
              you're really operating from—not where you think you are.
            </p>

            <p className="text-light/60">
              Each audit takes 5-10 minutes. Your results are instant, personalized, and actionable.
            </p>
          </div>
        </div>
      </section>

      <section ref={gridRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {audits.map((audit, index) => (
              <div
                key={audit.id}
                className="group relative overflow-hidden cursor-hover"
                onMouseEnter={() => setHoveredCard(audit.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${audit.gradient} transition-opacity duration-500 ${
                    hoveredCard === audit.id ? 'opacity-100' : 'opacity-50'
                  }`}
                />

                <div className="absolute inset-0 grain" />

                <div className="relative p-10 border border-light/10 group-hover:border-blue/30 transition-all duration-500 min-h-[400px] flex flex-col">
                  <div className="mb-6">
                    <audit.icon className="w-12 h-12 text-blue group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h3 className="text-3xl text-white mb-3 font-light group-hover:text-blue transition-colors duration-300">
                    {audit.title}
                  </h3>

                  <p className="text-xl text-light/90 mb-6 italic">
                    "{audit.hook}"
                  </p>

                  <p className="text-light/70 leading-relaxed mb-6 flex-grow">
                    {audit.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-light/50 text-sm">{audit.duration}</span>
                    <button
                      onClick={() => onNavigate(`quiz-${audit.id}`)}
                      className="flex items-center gap-2 text-white group-hover:text-blue transition-colors"
                    >
                      <span className="font-medium">Start Quiz</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredCard === audit.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 70%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-12 text-center">
              Why Self-Audits Matter
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-blue font-light">1</span>
                </div>
                <h3 className="text-xl text-white mb-4 font-light">Awareness First</h3>
                <p className="text-light/70 leading-relaxed">
                  Most people skip this step and wonder why nothing changes. You need to see the system
                  before you can change it.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-blue font-light">2</span>
                </div>
                <h3 className="text-xl text-white mb-4 font-light">Personalized Insights</h3>
                <p className="text-light/70 leading-relaxed">
                  Generic advice doesn't work. These audits reveal your specific patterns, blocks,
                  and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-blue font-light">3</span>
                </div>
                <h3 className="text-xl text-white mb-4 font-light">Actionable Steps</h3>
                <p className="text-light/70 leading-relaxed">
                  You won't just get a score. You'll get a clear picture of where to start and what
                  to focus on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Ready for More Than Just an Audit?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              These audits are the first step. If you're ready to transform your entire system,
              let's talk about the 12-week journey.
            </p>
            <button
              onClick={() => onNavigate('booking')}
              className="btn-primary"
            >
              Book a Free Clarity Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
