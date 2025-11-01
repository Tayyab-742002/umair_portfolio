import React, { useEffect, useRef, useState } from "react";
import { Brain, Zap, Target, Sparkles } from "lucide-react";

const AboutFrameworkSection = () => {
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

  const pillars = [
    {
      icon: Brain,
      title: "Mindset & Emotional Regulation",
      focus: "Attention, impulse control, and mental energy",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop",
    },
    {
      icon: Zap,
      title: "Energy & Health Systems",
      focus: "Sleep, nutrition, and movement that fuel stamina",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
    },
    {
      icon: Target,
      title: "Behavioral Mastery",
      focus: "Breaking loops, reinforcing resilience, sharpening discipline",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    },
    {
      icon: Sparkles,
      title: "Identity & Purpose Alignment",
      focus:
        "Rewriting beliefs, building self-image, linking decisions to vision",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-24">
          <div
            className={`transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-[1px] bg-white/30" />
              <span className="text-white/40 text-xs tracking-[0.4em] uppercase font-light">
                The Framework
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <div>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight leading-[0.85]">
                  Reinvention
                  <br />
                  <span className="font-light italic">2.0</span>
                </h2>
                <div className="w-20 h-[2px] bg-white/20" />
              </div>

              <div>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  If my telecom years were about fixing external networks, this
                  stage has been about fixing the{" "}
                  <span className="text-white">internal operating system</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={index}
                  className={`group transition-opacity duration-700`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {/* Card */}
                  <div className="relative h-full border border-white/10 overflow-hidden hover:border-white/30">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                    </div>

                    {/* Content */}
                    <div className="relative p-8 min-h-[400px] flex flex-col">
                      {/* Icon */}
                      <div className="mb-auto">
                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6 group-hover:border-white/40">
                          <Icon
                            className="w-6 h-6 text-white/60 group-hover:text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mt-auto">
                        <div className="text-white/30 text-xs tracking-widest uppercase mb-3 font-light">
                          Pillar {String(index + 1).padStart(2, "0")}
                        </div>

                        <h3 className="text-xl font-light text-white mb-4 leading-tight">
                          {pillar.title}
                        </h3>

                        <div className="w-10 h-[1px] bg-white/20 mb-4 group-hover:w-16" />

                        <p className="text-white/50 text-sm font-light leading-relaxed">
                          {pillar.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="max-w-6xl mx-auto mt-32"
          style={{
            transitionDelay: "600ms",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="border-t border-white/10 pt-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Statement */}
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                  A complete system designed to transform how you think, feel,
                  and operate
                </h3>
                <p className="text-white/60 text-base leading-relaxed font-light">
                  Not isolated tactics. An integrated operating system that runs
                  every leader's clarity, influence, and long-term impact.
                </p>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "12", label: "Weeks" },
                  { value: "4", label: "Pillars" },
                  { value: "500+", label: "Lives" },
                  { value: "95%", label: "Success" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 p-6 hover:border-white/20"
                  >
                    <div className="text-4xl font-extralight text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02]" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.02]" />
    </section>
  );
};

export default AboutFrameworkSection;
