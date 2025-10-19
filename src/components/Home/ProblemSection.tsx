import React, { useEffect, useRef, useState } from "react";

const HomeProblemSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

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

  const problems = [
    {
      title: "The Grind",
      description:
        "You work harder, try every productivity hack, but nothing changes. The exhaustion deepens.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
      icon: "⚙️",
    },
    {
      title: "The Mask",
      description:
        "From the outside, you look successful. Inside, you feel like an imposter running on empty.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      icon: "🎭",
    },
    {
      title: "The Loop",
      description:
        "Every attempt at change fails. Diets, routines, mindset shifts—they all fade after a few weeks.",
      image:
        "https://images.unsplash.com/photo-1501862700950-18382cd41497?w=800&h=600&fit=crop",
      icon: "🔄",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center  bg-black overflow-hidden"
    >
      {/* Background ambient video */}
      <div className="absolute inset-0 opacity-50">
        <video
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
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="px-3 py-1 border border-white/10">
              <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
                Recognition
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            The Hidden Problem
          </h2>

          <div className="w-16 h-[1px] bg-white/20 mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <div className="relative h-full bg-black border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/40">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="w-14 h-14 border border-white/20 flex items-center justify-center group-hover:border-white/70 transition-all duration-500">
                        <div className="w-1.5 h-1.5 bg-white transition-all duration-500 group-hover:scale-150" />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute top-10 right-10 text-6xl font-light text-white/25 group-hover:text-white/40 transition-colors duration-500">
                      0{index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-light text-white mb-6 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:w-24 transition-all duration-500" />

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed font-light flex-grow">
                      {item.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats/Context */}
        <div
          className={`max-w-4xl mx-auto mt-24 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pt-12">
            <p className="text-white/40 text-sm font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
              These patterns aren't your fault. They're symptoms of a deeper
              issue—
              <span className="text-white/60">
                {" "}
                your internal operating system needs an upgrade
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default HomeProblemSection;
