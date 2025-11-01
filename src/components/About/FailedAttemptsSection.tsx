import { useScrollReveal } from "../../hooks/useScrollReveal";

const AboutFailedAttemptsSection = () => {
  const journeyRef = useScrollReveal();

  return (
    <section ref={journeyRef} className="section-padding bg-light/5 fade-in">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-hero text-white mb-16 text-center">
            The Failed Attempts
          </h2>

          <div className="space-y-12">
            <div className="border-l-4 border-blue/30 pl-8">
              <h3 className="text-2xl text-white mb-4 font-light">
                The Productivity Trap
              </h3>
              <p className="text-light/70 text-lg leading-relaxed">
                I tried every hack. Wake up at 5 AM. Cold showers. Bulletproof
                coffee. Pomodoro timers. I optimized my mornings, tracked my
                habits, and journaled religiously. For a while, it worked.
                Then it didn't. The burnout always came back, deeper than
                before.
              </p>
            </div>

            <div className="border-l-4 border-blue/30 pl-8">
              <h3 className="text-2xl text-white mb-4 font-light">
                The Diet Cycle
              </h3>
              <p className="text-light/70 text-lg leading-relaxed">
                Keto. Paleo. Intermittent fasting. I'd lose weight, feel great
                for a month, then crash. Late-night binges. Self-loathing.
                Rinse and repeat. I didn't realize I was treating symptoms,
                not the root cause.
              </p>
            </div>

            <div className="border-l-4 border-blue/30 pl-8">
              <h3 className="text-2xl text-white mb-4 font-light">
                The Mindset Band-Aids
              </h3>
              <p className="text-light/70 text-lg leading-relaxed">
                Affirmations. Vision boards. "Just think positive!" I read all
                the books, listened to the podcasts, meditated at dawn. But
                positive thinking can't rewire a nervous system stuck in
                survival mode. The anxiety always won.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFailedAttemptsSection;

