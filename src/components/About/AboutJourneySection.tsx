import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const AboutJourneySection = () => {
  const sectionRef = useRef(null);
 
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

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

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 6);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const journeyStages = [
    {
      title: "The Breaking Point",
      tagline: "When Success Felt Empty",
      story:
        "I was solving external complexity daily—airports, data centers, teams across geographies. On paper, success. Inside? Focus scattered, energy drained, stress never left.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    },
    {
      title: "Surface Solutions",
      tagline: "The Quick Fix Trap",
      story:
        "Clean diets, supplements, gym sessions, sleep tracking. I treated life like an Excel sheet. Weekend splurges, leisure trips, endless scrolling. None touched the deeper restlessness.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    },
    {
      title: "Building Systems",
      tagline: "One Layer Deeper",
      story:
        "Journaling, vision boards, productivity apps, affirmations. I studied behavioral psychology, spiritual teachings, productivity frameworks. All valuable. But incomplete. They weren't anchored to purpose.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    },
    {
      title: "The Realization",
      tagline: "Operating System Failure",
      story:
        "It wasn't the tools failing me—it was my operating system. Fragmented. Reactive. Shallow foundations. I was optimizing symptoms, not the root. So I went deeper.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
    },
    {
      title: "Emotional Engine",
      tagline: "Rewiring the System",
      story:
        "Neuroscience showed me how stress hijacks decision-making. I trained my nervous system through breathing work, focused breaks, movement rhythms. Clarity returned. Presence replaced pressure.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop",
    },
    {
      title: "Identity Shift",
      tagline: "The Breakthrough",
      story:
        "I confronted the narratives shaping me. My ceilings were self-imposed. I rewrote identity instead of habits. Energy stabilized. Focus sharpened. I wasn't chasing systems—I was living from one.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black py-24 md:py-32 overflow-hidden flex items-center"
    >
      {/* Ambient video background */}
      {/* <div className="absolute inset-0 opacity-15">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/2981583-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div> */}

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="text-white/40 text-xs tracking-[0.4em] uppercase font-light">
                Evolution
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight">
              Six Stages to{" "}
              <span className="font-light italic">Reinvention</span>
            </h2>
          </div>

          {/* Main Interactive Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Display */}
            <div
              className={`relative aspect-[4/3] transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {journeyStages.map((stage, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeStage === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
              ))}

              {/* Stage counter overlay */}
              <div className="absolute top-8 right-8">
                <div className="bg-black/80 backdrop-blur-sm border border-white/20 px-6 py-3">
                  <div className="text-white/40 text-xs tracking-widest uppercase mb-1">
                    Stage
                  </div>
                  <div className="text-white text-4xl font-extralight leading-none">
                    {String(activeStage + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content Display */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-8">
                {/* Active stage content */}
                <div className="min-h-[300px]">
                  <div className="text-white/40 text-xs tracking-[0.3em] uppercase font-light mb-4">
                    {journeyStages[activeStage].tagline}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                    {journeyStages[activeStage].title}
                  </h3>

                  <div className="w-16 h-[1px] bg-white/20 mb-6" />

                  <p className="text-white/70 text-lg leading-relaxed font-light">
                    {journeyStages[activeStage].story}
                  </p>
                </div>

                {/* Stage navigation dots */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  {journeyStages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStage(idx)}
                      className={`h-[2px] transition-all duration-500 ${
                        activeStage === idx
                          ? "bg-white w-16"
                          : "bg-white/20 w-8 hover:bg-white/40 hover:w-12"
                      }`}
                      aria-label={`Go to stage ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="flex items-center justify-between text-white/40 text-sm font-light">
                  <span>{String(activeStage + 1).padStart(2, "0")} / 06</span>
                  <span className="text-xs tracking-wider uppercase">
                    Auto-rotating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Key lessons grid */}
          <div
            className={`mt-32 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-16">
              <div className="grid md:grid-cols-3 gap-px bg-white/10">
                {[
                  {
                    title: "Quick fixes fade fast",
                    desc: "Surface solutions never touch the root",
                  },
                  {
                    title: "Alignment is everything",
                    desc: "Manifestation fails without purpose",
                  },
                  {
                    title: "Systems thinking wins",
                    desc: "Transform from the core outward",
                  },
                ].map((lesson, idx) => (
                  <div
                    key={idx}
                    className="bg-black p-8 hover:bg-white/[0.02] transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <ChevronRight
                        className="w-5 h-5 text-white/40 flex-shrink-0 group-hover:text-white/70 transition-colors"
                        strokeWidth={1.5}
                      />
                      <h4 className="text-white text-lg font-light">
                        {lesson.title}
                      </h4>
                    </div>
                    <p className="text-white/50 text-sm font-light leading-relaxed pl-8">
                      {lesson.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default AboutJourneySection;
