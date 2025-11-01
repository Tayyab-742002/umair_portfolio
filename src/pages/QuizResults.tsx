import { useSearchParams, useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const QuizResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const heroRef = useScrollReveal();
  const interpretationRef = useScrollReveal();
  const nextStepsRef = useScrollReveal();

  const score = searchParams.get('score') || '0';
  const level = searchParams.get('level') || 'Unknown';
  const name = searchParams.get('name') || 'there';

  const interpretations: { [key: string]: any } = {
    'Superpower Star': {
      color: 'green',
      icon: '⭐',
      description: 'You are operating at your peak. Your core needs are being met, and you have the energy and clarity to thrive.',
      strengths: [
        'Strong sense of purpose and direction',
        'Core needs are consistently being met',
        'High energy and engagement levels',
        'Authentic connections and relationships',
      ],
      focusAreas: [
        'Maintain this state through consistent practices',
        'Deepen your impact and contribution',
        'Share your strategies with others',
        'Continue evolving and expanding',
      ],
    },
    'Rising Phoenix': {
      color: 'yellow',
      icon: '🔥',
      description: 'You are on the right path, but there are gaps. Some needs are being met while others are neglected.',
      strengths: [
        'Awareness of what\'s working and what isn\'t',
        'Willingness to grow and transform',
        'Some core needs are being addressed',
        'Momentum in the right direction',
      ],
      focusAreas: [
        'Identify which specific needs are unmet',
        'Prioritize the gaps causing the most drain',
        'Create intentional practices to address them',
        'Build sustainable systems, not quick fixes',
      ],
    },
    'Survival Mode': {
      color: 'red',
      icon: '🔴',
      description: 'You are running on empty. Most of your core needs are unmet, and it\'s draining your energy.',
      strengths: [
        'You\'re here, which means you\'re ready for change',
        'Awareness is the first step to transformation',
        'Your honesty shows courage',
        'Rock bottom is a solid foundation to rebuild from',
      ],
      focusAreas: [
        'Start with nervous system regulation',
        'Address one core need at a time',
        'Build support systems immediately',
        'Consider professional guidance (like the 12-week program)',
      ],
    },
  };

  const result = interpretations[level] || interpretations['Survival Mode'];

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Your Results</span>
            </div>

            <h1 className="text-display text-white mb-8">
              Hey {name},
              <br />
              <span className="text-blue">Here's What We Found</span>
            </h1>

            <div className="p-12 bg-gradient-to-br from-blue/10 to-blue/5 border border-blue/20 mb-8">
              <div className="text-6xl mb-4">{result.icon}</div>
              <p className="text-light/60 text-sm mb-2">Your Score</p>
              <p className="text-6xl text-white font-light mb-4">{score}/36</p>
              <p className="text-3xl text-blue font-light">{level}</p>
            </div>

            <p className="text-xl text-light/80 leading-relaxed">
              {result.description}
            </p>
          </div>
        </div>
      </section>

      <section ref={interpretationRef} className="section-padding bg-light/5 fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-dark border border-light/10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-blue" />
                  <h2 className="text-2xl text-white font-light">Your Strengths</h2>
                </div>
                <ul className="space-y-4">
                  {result.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue flex-shrink-0 mt-1" />
                      <span className="text-light/70">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-dark border border-light/10">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-blue" />
                  <h2 className="text-2xl text-white font-light">Focus Areas</h2>
                </div>
                <ul className="space-y-4">
                  {result.focusAreas.map((area: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-3" />
                      <span className="text-light/70">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={nextStepsRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-12 text-center">
              What's Next?
            </h2>

            <div className="space-y-6 mb-12">
              <div className="p-8 bg-light/5 border-l-4 border-blue">
                <h3 className="text-2xl text-white mb-4 font-light">
                  Step 1: Take Action on One Focus Area
                </h3>
                <p className="text-light/70 leading-relaxed">
                  Pick one area from your focus list and commit to addressing it this week. Small, consistent
                  actions create lasting change.
                </p>
              </div>

              <div className="p-8 bg-light/5 border-l-4 border-blue">
                <h3 className="text-2xl text-white mb-4 font-light">
                  Step 2: Explore More Self-Audits
                </h3>
                <p className="text-light/70 leading-relaxed mb-4">
                  Each audit reveals different aspects of your operating system. The more you understand,
                  the more targeted your transformation can be.
                </p>
                <button
                  onClick={() => navigate('/self-audits')}
                  className="text-blue hover:text-white transition-colors"
                >
                  View All Audits →
                </button>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue/10 to-blue/5 border border-blue/20">
                <h3 className="text-2xl text-white mb-4 font-light">
                  Step 3: Ready for Deep Transformation?
                </h3>
                <p className="text-light/80 leading-relaxed mb-6">
                  You're a <strong>{level}</strong>. {level === 'Superpower Star'
                    ? 'Now, let\'s put it to work and deepen your impact.'
                    : level === 'Rising Phoenix'
                    ? 'Let\'s close those gaps and get you to peak performance.'
                    : 'Let\'s rebuild your system from the ground up.'}
                </p>
                <p className="text-light/70 mb-6">
                  Book a free clarity call to explore the 12-week Reinvention Journey and see if it's right for you.
                </p>
                <button
                  onClick={() => navigate('/booking')}
                  className="btn-primary group"
                >
                  Book Your Free Clarity Call
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Check Your Email
            </h2>
            <p className="text-xl text-light/70">
              We've sent a copy of your results to your inbox, along with some additional resources
              tailored to your score. If you don't see it, check your spam folder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

function Target(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
