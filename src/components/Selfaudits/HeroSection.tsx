import { useScrollReveal } from "../../hooks/useScrollReveal";

const SelfAuditsHeroSection = () => {
  const heroRef = useScrollReveal();

  return (
    <section ref={heroRef} className="section-padding fade-in">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
            <span className="text-blue text-sm tracking-wide">
              Self-Assessment Tools
            </span>
          </div>

          <h1 className="text-display text-white mb-12">
            Start With
            <br />
            <span className="text-blue">Self-Awareness</span>
          </h1>

          <p className="text-xl text-light/80 leading-relaxed mb-8">
            You can't change what you don't see. These scientifically-designed
            audits reveal where you're really operating from—not where you think
            you are.
          </p>

          <p className="text-light/60">
            Each audit takes 5-10 minutes. Your results are instant,
            personalized, and actionable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelfAuditsHeroSection;
