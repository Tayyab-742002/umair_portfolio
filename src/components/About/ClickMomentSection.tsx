import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Sparkles } from "lucide-react";

const AboutClickMomentSection = () => {
  const clickRef = useScrollReveal();

  return (
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
  );
};

export default AboutClickMomentSection;

