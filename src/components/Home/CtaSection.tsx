import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const HomeCTASection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onNavigate = (section) => {
    console.log(`Navigate to: ${section}`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative p-10 flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/3672362-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Minimalist overlay - single clean gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Headline - Bold, Clear Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white text-center mb-6 tracking-tight leading-[0.95]">
            Ready to Start Your
            <br />
            <span className="font-light italic">Reinvention</span>?
          </h1>

          {/* Minimal Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-px bg-white/30" />
          </div>

          {/* Subheading - Clean and Spacious */}
          <p className="text-base md:text-lg text-white/70 text-center max-w-xl mx-auto mb-16 font-light leading-relaxed">
            Take the 5-minute self-audit and discover where you're really
            operating from.
            <br className="hidden md:block" />
            The first step to transformation is awareness.
          </p>

          {/* Primary CTA - Bold and Simple */}
          <div className="flex justify-center mb-10">
            <button
              onClick={() => onNavigate("self-audits")}
              className="group relative px-10 py-5 bg-white text-black text-sm font-medium tracking-wide uppercase overflow-hidden transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] active:scale-100"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Assessment
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </span>
            </button>
          </div>

          {/* Supporting Info - Minimal */}
          <div className="text-center">
            <p className="text-xs text-white/40 font-light tracking-wide">
              No credit card required · 5 minutes · Instant results
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Brand Accent - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default HomeCTASection;
