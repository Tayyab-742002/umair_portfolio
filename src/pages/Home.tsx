import HomeHeroSection from "../components/Home/HeroSection";
import HomeProblemSection from "../components/Home/ProblemSection";
import HomeFrameworkSection from "../components/Home/Framework";
import HomeProofSection from "../components/Home/ProofSection";
import HomeCTASection from "../components/Home/CtaSection";

export const Home = () => {
  // const problemRef = useScrollReveal();
  // const frameworkRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero Section  */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />

        <div ref={heroRef} className="container-custom relative z-10 fade-in">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">
                Transform Your Internal Operating System
              </span>
            </div>

            <h1 className="text-display text-white mb-8">
              From Survival
              <br />
              to <span className="text-blue">Thriving</span>
            </h1>

            <p className="text-xl md:text-2xl text-light/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              On paper, you have success. Inside, you feel drained and stuck.
              It's time to reinvent—not your résumé, but your entire system.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => onNavigate('self-audits')}
                className="btn-primary group"
              >
                Take the 5-Minute Audit
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => onNavigate('booking')}
                className="btn-secondary"
              >
                Book a Free Clarity Call
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
      </section> */}

      <HomeHeroSection />
      {/* Problem Section */}
      {/* <section ref={problemRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-12 text-center">
              The Hidden Problem
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Grind",
                  description:
                    "You work harder, try every productivity hack, but nothing changes. The exhaustion deepens.",
                },
                {
                  title: "The Mask",
                  description:
                    "From the outside, you look successful. Inside, you feel like an imposter running on empty.",
                },
                {
                  title: "The Loop",
                  description:
                    "Every attempt at change fails. Diets, routines, mindset shifts—they all fade after a few weeks.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-light/10 hover:border-blue/30 transition-all duration-500 group cursor-hover"
                >
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mb-6 group-hover:bg-blue/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue" />
                  </div>
                  <h3 className="text-2xl text-white mb-4 font-light">
                    {item.title}
                  </h3>
                  <p className="text-light/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <HomeProblemSection />

      {/* Framework Section */}
      {/* <section
        ref={frameworkRef}
        className="section-padding bg-light/5 fade-in"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-hero text-white mb-8">
              The Solution: Your New Operating System
            </h2>
            <p className="text-xl text-light/70 leading-relaxed">
              The problem isn't your habits or willpower. It's the internal
              system running beneath them. Change the system, and everything
              else follows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Mindset",
                description: "Radical self-awareness and belief restructuring",
              },
              {
                icon: Zap,
                title: "Energy",
                description:
                  "Nervous system regulation and sustainable vitality",
              },
              {
                icon: Target,
                title: "Behavior",
                description: "Identity-driven actions that stick",
              },
              {
                icon: Sparkles,
                title: "Identity",
                description: "Become the 2.0 version of yourself",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="p-8 bg-dark border border-light/10 hover:border-blue transition-all duration-500 group cursor-hover"
              >
                <pillar.icon className="w-12 h-12 text-blue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-white mb-3 font-medium">
                  {pillar.title}
                </h3>
                <p className="text-light/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate("services")}
              className="btn-primary group"
            >
              Explore the 12-Week Journey
              <ArrowRight
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>
        </div>
      </section> */}
      <HomeFrameworkSection />

      {/* Proof Section */}
      {/* <section ref={proofRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-16 text-center">
              Real Transformations
            </h2>

            <div className="space-y-12">
              <div className="border-l-2 border-blue pl-8 cursor-hover">
                <p className="text-2xl text-light/90 mb-6 italic leading-relaxed">
                  "I went from burnout to building a business I love. The
                  framework didn't just change my work—it changed how I show up
                  in life."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue/20" />
                  <div>
                    <p className="text-white font-medium">Sarah Chen</p>
                    <p className="text-light/60 text-sm">
                      Tech Executive turned Entrepreneur
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-blue pl-8 cursor-hover">
                <p className="text-2xl text-light/90 mb-6 italic leading-relaxed">
                  "For the first time in years, I have energy at the end of the
                  day. I'm present with my family. This is the reinvention I
                  didn't know I needed."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue/20" />
                  <div>
                    <p className="text-white font-medium">Michael Torres</p>
                    <p className="text-light/60 text-sm">VP of Operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => onNavigate("case-studies")}
                className="btn-secondary"
              >
                Read More Case Studies
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <HomeProofSection />

      {/* CTA Section */}
      {/* <section className="section-padding bg-blue/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-white mb-8 font-light">
              Ready to Start Your Reinvention?
            </h2>
            <p className="text-xl text-light/70 mb-12">
              Take the 5-minute self-audit and discover where you're really
              operating from.
            </p>
            <button
              onClick={() => onNavigate("self-audits")}
              className="btn-primary group text-lg"
            >
              Start Your Assessment
              <ArrowRight
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                size={24}
              />
            </button>
          </div>
        </div>
      </section> */}

      <HomeCTASection />
    </div>
  );
};
