import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutTransformationSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transformations = [
    {
      before: "Chasing systems",
      after: "Living from one",
      description:
        "No longer collecting productivity hacks. Operating from an integrated internal system.",
    },
    {
      before: "Pushing through",
      after: "Actually present",
      description:
        "Walking into high-stakes meetings with calm instead of fight-or-flight.",
    },
    {
      before: "Reactive decisions",
      after: "Deliberate choices",
      description:
        "Decisions stopped being impulses. They became intentional and aligned.",
    },
    {
      before: "Scattered focus",
      after: "Sustained clarity",
      description:
        "Mental energy directed with precision instead of spread thin across everything.",
    },
    {
      before: "External validation",
      after: "Internal alignment",
      description:
        "Self-imposed ceilings shattered. Living from purpose, not perception.",
    },
    {
      before: "Drained energy",
      after: "Stable vitality",
      description:
        "Energy that sustains through the day without crashing or needing recovery weekends.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div
          className={`max-w-4xl mx-auto mb-32 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <div className="inline-block mb-8">
              <div className="px-3 py-1 border border-white/10">
                <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
                  The Shift
                </span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
              From Survival
              <br />
              to <span className="font-light italic">System</span>
            </h2>

            <div className="w-16 h-[1px] bg-white/20 mx-auto mb-10" />

            <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed italic max-w-3xl mx-auto">
              "I was no longer chasing systems—I was living from one"
            </p>
          </div>
        </div>

        {/* Transformation Grid */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/10">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="bg-black p-10 group hover:bg-white/[0.02]"
                style={{
                  //   transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {/* Before state */}
                <div className="mb-6">
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-2 font-light">
                    Before
                  </div>
                  <div className="text-white/50 text-base font-light line-through">
                    {item.before}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-white/20" />
                  <ArrowRight
                    className="w-4 h-4 text-white/40"
                    strokeWidth={1.5}
                  />
                  <div className="flex-1 h-[1px] bg-white/20" />
                </div>

                {/* After state */}
                <div className="mb-6">
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-2 font-light">
                    After
                  </div>
                  <div className="text-white text-lg font-light">
                    {item.after}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom indicator */}
                <div className="mt-6 h-[1px] bg-white/10 w-0 group-hover:w-full transition-all " />
              </div>
            ))}
          </div>
        </div>

        {/* Key Lessons */}
        <div
          className="max-w-5xl mx-auto"
          style={{
            transitionDelay: "800ms",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="border-t border-white/10 pt-20">
            <div className="mb-16 text-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                What I Learned
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-light max-w-2xl mx-auto">
                Years of experiments, failures, and breakthroughs revealed
                truths no book alone could teach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              {[
                {
                  number: "01",
                  title: "Quick fixes fade fast",
                  description:
                    "Surface solutions never touch the root cause. Real change takes systematic work.",
                },
                {
                  number: "02",
                  title: "Alignment is everything",
                  description:
                    "Manifestation without purpose is empty words. Actions must match vision.",
                },
                {
                  number: "03",
                  title: "Transform from core outward",
                  description:
                    "Continuous reflection and iteration aren't optional—they are the advantage.",
                },
              ].map((lesson, idx) => (
                <div key={idx} className="bg-black p-8 hover:bg-white/[0.02]">
                  <div className="text-5xl font-extralight text-white/10 mb-6">
                    {lesson.number}
                  </div>
                  <h4 className="text-white text-lg font-light mb-4">
                    {lesson.title}
                  </h4>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        {/* <div
          className="max-w-4xl mx-auto mt-32 text-center"
          style={{
            transitionDelay: "1000ms",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="border border-white/10 p-12 md:p-16">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light mb-8">
              My years in telecom taught me precision, endurance, and leadership
              under pressure.
            </p>
            <p className="text-white text-2xl md:text-3xl font-light leading-relaxed">
              Now I lead with clarity, presence, and purpose in every area of
              life
            </p>
          </div>
        </div> */}
      </div>

      {/* Vertical accent lines */}
      {/* <div className="absolute top-0 left-1/3 w-px h-full bg-white/[0.02]" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-white/[0.02]" /> */}
    </section>
  );
};

export default AboutTransformationSection;
