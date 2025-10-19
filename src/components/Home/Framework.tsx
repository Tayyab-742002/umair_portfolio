import React, { useEffect, useRef, useState } from "react";
import { Brain, Zap, Target, Sparkles, ArrowRight } from "lucide-react";

const HomeFrameworkSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current
              .play()
              .catch((e) => console.log("Video autoplay failed:", e));
          }
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
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const onNavigate = (section) => {
    console.log(`Navigate to: ${section}`);
  };

  const pillars = [
    {
      icon: Brain,
      title: "Mindset",
      subtitle: "Foundation",
      description:
        "Transform your internal narrative and unlock radical self-awareness",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop",
    },
    {
      icon: Zap,
      title: "Energy",
      subtitle: "Vitality",
      description:
        "Master nervous system regulation for sustainable peak performance",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
    },
    {
      icon: Target,
      title: "Behavior",
      subtitle: "Action",
      description:
        "Build identity-driven habits that create lasting transformation",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    },
    {
      icon: Sparkles,
      title: "Identity",
      subtitle: "Evolution",
      description:
        "Embody the elevated version of yourself you're meant to become",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=800&fit=crop",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Ambient Video Background */}
      <div className="absolute inset-0 opacity-80">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 lg:py-40">
        {/* Minimal Header */}
        {/* <div
          className={`max-w-2xl mb-20 sm:mb-24 md:mb-28 lg:mb-32 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 md:mb-6">
            <span className="text-white/40 text-[10px] md:text-xs tracking-[0.5em] uppercase font-light">
              Framework
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-4 md:mb-6 tracking-tight leading-[0.9]">
            Four Pillars
          </h2>
          <div className="w-12 md:w-16 h-px bg-white/30" />
        </div> */}
        <div
          className={`max-w-3xl mx-auto text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="px-3 py-1 border border-white/10">
              <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
                Framework
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            Four Pillars
          </h2>

          <div className="w-16 h-[1px] bg-white/20 mx-auto" />
        </div>
        {/* Hero Visual Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Large Featured Image */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      activeIndex === idx
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                ))}

                {/* Floating Info Card */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-black/80 backdrop-blur-xl border border-white/10 p-4 md:p-6 lg:p-8">
                  <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                    {React.createElement(pillars[activeIndex].icon, {
                      className:
                        "w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0",
                      strokeWidth: 1.5,
                    })}
                    <div className="flex-1 min-w-0">
                      <div className="text-white/50 text-[10px] md:text-xs tracking-widest uppercase mb-1 md:mb-2">
                        {pillars[activeIndex].subtitle}
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-extralight text-white mb-2 md:mb-3 tracking-tight">
                        {pillars[activeIndex].title}
                      </h3>
                      <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
                        {pillars[activeIndex].description}
                      </p>
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/10 hidden sm:block">
                      0{activeIndex + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Navigation */}
            <div
              className={`lg:col-span-2 space-y-2 md:space-y-3 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-left group transition-all duration-500 ${
                      isActive ? "scale-100" : "scale-95 hover:scale-98"
                    }`}
                  >
                    <div
                      className={`border p-4 md:p-5 lg:p-6 transition-all duration-500 ${
                        isActive
                          ? "border-white/30 bg-white/5"
                          : "border-white/10 bg-transparent hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                            isActive ? "border-white/30" : "border-white/10"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-500 ${
                              isActive ? "text-white" : "text-white/40"
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-[10px] md:text-xs tracking-wider uppercase transition-colors duration-500 mb-0.5 md:mb-1 ${
                              isActive ? "text-white/50" : "text-white/30"
                            }`}
                          >
                            {pillar.subtitle}
                          </div>
                          <div
                            className={`text-base md:text-lg lg:text-xl font-extralight tracking-tight transition-colors duration-500 ${
                              isActive ? "text-white" : "text-white/60"
                            }`}
                          >
                            {pillar.title}
                          </div>
                        </div>
                        <div
                          className={`text-2xl md:text-3xl lg:text-4xl font-extralight transition-colors duration-500 flex-shrink-0 ${
                            isActive ? "text-white/10" : "text-white/5"
                          }`}
                        >
                          0{index + 1}
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="h-px bg-white/10 overflow-hidden">
                        <div
                          className={`h-full bg-white transition-all duration-500 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Auto-progress indicator */}
              <div className="pt-4 md:pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px flex-1 bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-white/40 animate-progress"
                      style={{ animation: "progress 4s linear infinite" }}
                    />
                  </div>
                </div>
                {/* <div className="text-white/30 text-[10px] md:text-xs font-light tracking-wider">
                  Auto-rotating
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`max-w-7xl mx-auto border-t border-white/10 pt-12 md:pt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div className="max-w-xl">
              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                A complete system designed to transform how you think, feel, and
                operate.
                <span className="text-white/80"> 12 weeks to reinvention.</span>
              </p>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="group px-8 md:px-10 py-4 md:py-5 bg-white text-black text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/90 flex-shrink-0 w-full md:w-auto"
            >
              <span className="flex items-center justify-center md:justify-start gap-3">
                Start Your Journey
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                  strokeWidth={2}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-progress {
          animation: progress 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeFrameworkSection;
