import { useScrollReveal } from "../hooks/useScrollReveal";
import { Brain, Zap, Target, Sparkles } from "lucide-react";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export const About = ({ onNavigate }: AboutProps) => {
  return <div>About Page Under development</div>;
  const heroRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const clickRef = useScrollReveal();
  const frameworkRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">
                My Journey
              </span>
            </div>

            <h1 className="text-display text-white mb-12">
              I've Been
              <br />
              Where You Are
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-light/80 leading-relaxed mb-6">
                On paper, I had it all. The career. The recognition. The
                achievements everyone told me to chase.
              </p>
              <p className="text-xl text-light/80 leading-relaxed">
                But inside? I was running on fumes, playing a role, and quietly
                terrified that one day, everyone would realize I had no idea
                what I was doing.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section ref={clickRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-blue" />
            </div>

            <h2 className="text-hero text-white mb-12">The Click Moment</h2>

            <div className="text-left space-y-6">
              <p className="text-xl text-light/80 leading-relaxed">
                It hit me one morning after another failed "fresh start." I
                wasn't failing because I lacked discipline or willpower. I was
                failing because I was trying to change the outputs without
                touching the system that created them.
              </p>

              <p className="text-xl text-light/80 leading-relaxed">
                Every habit, every thought pattern, every reaction—they were all
                running on an internal operating system built from old beliefs,
                unprocessed stress, and a nervous system wired for survival, not
                thriving.
              </p>

              <p className="text-xl text-light/80 leading-relaxed">
                I realized: You can't upgrade your life without upgrading your
                internal software.
              </p>

              <div className="mt-12 p-10 bg-blue/5 border border-blue/20">
                <p className="text-2xl text-white font-light italic text-center">
                  "Change the system, and everything else follows."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={frameworkRef}
        className="section-padding bg-light/5 fade-in"
      >
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-hero text-white mb-16 text-center">
              The 4-Pillar Framework
            </h2>

            <p className="text-xl text-light/70 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              I studied neuroscience, psychology, somatic therapy, and
              high-performance coaching. I tested everything on myself. And I
              distilled it all into a framework that actually works.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start p-10 bg-dark border border-light/10 hover:border-blue/30 transition-all duration-500 cursor-hover">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-4 font-light">
                    Pillar 1: Mindset
                  </h3>
                  <p className="text-light/70 text-lg leading-relaxed">
                    We start with radical self-awareness. You'll uncover the
                    hidden beliefs driving your behavior—the ones you didn't
                    even know were there. Then we rebuild, intentionally, with
                    beliefs that serve your 2.0 version.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start p-10 bg-dark border border-light/10 hover:border-blue/30 transition-all duration-500 cursor-hover">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-4 font-light">
                    Pillar 2: Energy
                  </h3>
                  <p className="text-light/70 text-lg leading-relaxed">
                    This is where most people fail. They ignore the body. We'll
                    reset your nervous system, regulate your stress response,
                    and build sustainable energy reserves. You can't think your
                    way out of exhaustion—you have to rewire your system.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start p-10 bg-dark border border-light/10 hover:border-blue/30 transition-all duration-500 cursor-hover">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-4 font-light">
                    Pillar 3: Behavior
                  </h3>
                  <p className="text-light/70 text-lg leading-relaxed">
                    Habits don't stick when they're disconnected from identity.
                    We'll design actions that align with who you're becoming,
                    not who you were. These behaviors won't require
                    willpower—they'll feel inevitable.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start p-10 bg-dark border border-light/10 hover:border-blue/30 transition-all duration-500 cursor-hover">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl text-white mb-4 font-light">
                    Pillar 4: Identity
                  </h3>
                  <p className="text-light/70 text-lg leading-relaxed">
                    This is the integration. You don't just change what you
                    do—you change who you are. Your 2.0 self isn't a future
                    version you're chasing. It's an identity you step into, now,
                    and live from every day.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => onNavigate("services")}
                className="btn-primary text-lg"
              >
                See My 12-Week Program
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-light/70 mb-8 leading-relaxed">
              This framework changed my life. And now, it's helping
              high-achieving professionals who feel stuck, drained, and
              disconnected step into their most powerful, aligned version yet.
            </p>
            <button
              onClick={() => onNavigate("booking")}
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
