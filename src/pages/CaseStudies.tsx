import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export const CaseStudies = ({ onNavigate }: CaseStudiesProps) => {
  return <div>Case Study Page Under development</div>
  const heroRef = useScrollReveal();

  const caseStudies = [
    {
      name: 'Sarah Chen',
      role: 'Tech Executive → Entrepreneur',
      problem: 'Burned out and questioning everything',
      process: 'Through the 12-week journey, Sarah uncovered that her drive came from proving herself to others, not from genuine passion. We reset her nervous system, rebuilt her identity around her values, and designed a business that aligned with her authentic self.',
      results: [
        'Left her corporate role with clarity and confidence',
        'Built a 6-figure consulting business in 8 months',
        'Reports having energy at the end of the day for the first time in years',
        'Rebuilt her relationship with her partner',
      ],
      quote: 'I went from burnout to building a business I love. The framework didn\'t just change my work—it changed how I show up in life.',
    },
    {
      name: 'Michael Torres',
      role: 'VP of Operations',
      problem: 'Successful on paper, empty inside',
      process: 'Michael was trapped in a cycle of achieving and still feeling unfulfilled. We discovered his perfectionism was a defense mechanism rooted in childhood experiences. By addressing his nervous system dysregulation and rebuilding his sense of self-worth, he transformed his relationship with success.',
      results: [
        'Reduced work hours by 30% while increasing output',
        'Healed his relationship with his teenage son',
        'Started a meditation practice that actually stuck',
        'Feels present and engaged instead of constantly anxious',
      ],
      quote: 'For the first time in years, I have energy at the end of the day. I\'m present with my family. This is the reinvention I didn\'t know I needed.',
    },
    {
      name: 'Jessica Williams',
      role: 'Marketing Director',
      problem: 'Playing a role, lost herself',
      process: 'Jessica had spent years becoming who she thought she should be. The disconnect between her public persona and private self was causing deep anxiety. We systematically deconstructed her false identity and rebuilt one rooted in her true values and desires.',
      results: [
        'Set boundaries at work without guilt',
        'Started creating art again after 10 years',
        'Lost 25 pounds without dieting',
        'Described feeling "like myself for the first time"',
      ],
      quote: 'I didn\'t realize how much energy it took to be someone I wasn\'t. Now I show up as me, and everything feels easier.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Transformations</span>
            </div>

            <h1 className="text-display text-white mb-12">
              Real People,
              <br />
              <span className="text-blue">Real Results</span>
            </h1>

            <p className="text-xl text-light/80 leading-relaxed">
              These aren't testimonials crafted for marketing. They're the stories of people who did the work,
              changed their system, and transformed their lives.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-20">
            {caseStudies.map((study, index) => {
              const studyRef = useScrollReveal();

              return (
                <div
                  key={index}
                  ref={studyRef}
                  className="fade-in"
                >
                  <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2">
                      <div className="sticky top-32">
                        <div className="w-full aspect-square bg-gradient-to-br from-blue/20 to-blue/5 mb-6 flex items-center justify-center border border-blue/20">
                          <div className="text-center">
                            <div className="w-24 h-24 rounded-full bg-blue/10 mx-auto mb-4 flex items-center justify-center border-2 border-blue/30">
                              <span className="text-4xl text-blue font-light">
                                {study.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-3xl text-white mb-2 font-light">{study.name}</h3>
                        <p className="text-blue text-lg mb-6">{study.role}</p>
                        <div className="p-6 bg-blue/5 border-l-4 border-blue">
                          <p className="text-light/90 italic leading-relaxed">"{study.quote}"</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-3 space-y-8">
                      <div>
                        <h4 className="text-2xl text-white mb-4 font-light">The Problem</h4>
                        <p className="text-light/70 text-lg leading-relaxed">{study.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-2xl text-white mb-4 font-light">The Process</h4>
                        <p className="text-light/70 text-lg leading-relaxed">{study.process}</p>
                      </div>

                      <div>
                        <h4 className="text-2xl text-white mb-4 font-light">The Results</h4>
                        <ul className="space-y-4">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-3" />
                              <span className="text-light/70 text-lg">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {index < caseStudies.length - 1 && (
                    <div className="mt-20 h-px bg-gradient-to-r from-transparent via-light/10 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-white mb-8 font-light">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-light/70 mb-12">
              These results are possible when you commit to doing the deep work. If you're ready to stop
              surviving and start thriving, let's talk.
            </p>
            <button
              onClick={() => onNavigate('booking')}
              className="btn-primary group text-lg"
            >
              Book Your Free Clarity Call
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
