import React, { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const AboutCredentialsSection = () => {
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

  const credentials = [
    {
      icon: Award,
      title: "15+ Years Leadership",
      description:
        "Led high-stakes telecom projects across airports, data centers, and international deployments",
      details: [
        "Managed cross-continental teams",
        "Delivered projects under extreme deadlines",
        "Navigated complex technical systems",
      ],
    },
    {
      icon: BookOpen,
      title: "Deep Systems Study",
      description:
        "Extensive research and application of transformation methodologies",
      details: [
        "Behavioral psychology & neuroscience",
        "Identity architecture & belief systems",
        "Performance optimization frameworks",
      ],
    },
    {
      icon: Users,
      title: "500+ Transformations",
      description:
        "Proven track record of guiding professionals through complete system reinvention",
      details: [
        "Executives and entrepreneurs",
        "High-performers in burnout",
        "Leaders seeking sustainable success",
      ],
    },
    {
      icon: TrendingUp,
      title: "95% Success Rate",
      description:
        "Clients who complete the program report lasting transformation across all four pillars",
      details: [
        "Sustained energy levels",
        "Improved decision-making clarity",
        "Aligned identity and purpose",
      ],
    },
  ];

  const expertise = [
    {
      category: "Psychology & Neuroscience",
      areas: [
        "Stress response & nervous system regulation",
        "Behavioral loops & pattern interruption",
        "Cognitive reframing & mental energy management",
        "Identity formation & belief system architecture",
      ],
    },
    {
      category: "Performance Systems",
      areas: [
        "Energy optimization & recovery protocols",
        "Habit formation & behavioral design",
        "Focus & attention management",
        "Sustainable high-performance strategies",
      ],
    },
    {
      category: "Leadership & Strategy",
      areas: [
        "High-stakes decision-making under pressure",
        "Team coordination across geographies",
        "Vision alignment & purpose integration",
        "Systems thinking & root cause analysis",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div
          className={`max-w-4xl mx-auto mb-24 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
            <span className="text-white/40 text-xs tracking-[0.4em] uppercase font-light">
              Background
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
            Built on Experience,
            <br />
            <span className="font-light italic">Proven by Results</span>
          </h2>

          <div className="w-16 h-[1px] bg-white/20 mb-8" />

          <p className="text-white/60 text-lg leading-relaxed font-light max-w-3xl">
            This isn't theory from books. It's a system forged through years of
            personal experimentation, deep study, and real-world application
            with hundreds of leaders.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-white/10 p-10 hover:border-white/20 hover:bg-white/[0.02]"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-6 h-6 text-white/60"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-white mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pl-[72px]">
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-white/50 text-sm font-light"
                        >
                          <div className="w-1 h-1 bg-white/30 mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expertise Areas */}
        <div
          className="max-w-6xl mx-auto"
          style={{
            transitionDelay: "500ms",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="border-t border-white/10 pt-20">
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                Areas of Expertise
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-light max-w-2xl">
                A unique blend of technical precision, psychological depth, and
                leadership under pressure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 bg-white/10">
              {expertise.map((domain, index) => (
                <div key={index} className="bg-black p-8 hover:bg-white/[0.02]">
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-6 font-light">
                    {domain.category}
                  </div>

                  <ul className="space-y-3">
                    {domain.areas.map((area, idx) => (
                      <li
                        key={idx}
                        className="text-white/70 text-sm font-light leading-relaxed"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        {/* <div
          className="max-w-4xl mx-auto mt-32 text-center"
          style={{
            transitionDelay: "700ms",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="border border-white/10 p-12 md:p-16">
            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mx-auto mb-8">
              <div className="w-3 h-3 bg-white" />
            </div>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light mb-6">
              "I don't teach what I learned in books. I teach what I lived,
              tested, failed at, refined, and proven—first on myself, then with
              hundreds of others."
            </p>

            <div className="text-white/40 text-sm tracking-wider uppercase">
              Umair Saeed
            </div>
          </div>
        </div> */}
      </div>

      {/* Vertical accent lines */}
      {/* <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02]" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.02]" /> */}
    </section>
  );
};

export default AboutCredentialsSection;
