import React, { useEffect, useRef, useState } from "react";

const AboutHeroSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          (videoRef.current as HTMLVideoElement)
            .play()
            .catch((e) => console.log("Video autoplay failed:", e));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Full-screen image background */}
      <div className="absolute inset-0">
        <img
          src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/umair_Saeed_profile.jpeg"
          alt="Umair Saeed"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70" />
      </div>

      {/* Ambient video overlay - subtle movement */}
      {/* <div className="absolute inset-0 opacity-10 mix-blend-overlay">
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
      </div> */}

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 min-h-screen flex items-center">
        <div className="max-w-4xl py-32">
          {/* Content stack */}
          <div
            className={`space-y-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Top label */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="text-white/40 text-xs tracking-[0.4em] uppercase font-light">
                The Architect
              </span>
            </div>

            {/* Main headline - stacked vertically */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white leading-[0.85] tracking-tighter">
                On the
              </h1>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-white leading-[0.85] tracking-tighter">
                outside,
              </h1>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[0.85] tracking-tighter italic">
                I had it all
              </h1>
            </div>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-white/20" />

            {/* Quote block */}
            <div className="max-w-2xl space-y-8">
              <p className="text-2xl md:text-3xl text-white/70 font-light leading-relaxed">
                On the inside I was barely holding it together
              </p>

              <p className="text-base text-white/50 font-light leading-relaxed">
                Airports. Data centers. Massive telecom projects spanning
                countries. Impossible deadlines. Everyone assumed I had it
                figured out.
              </p>

              <p className="text-base text-white/50 font-light leading-relaxed">
                I didn't. Every day felt like I was barely keeping up.
              </p>
            </div>

            {/* Bottom stats row */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white/40" />
                <div>
                  <div className="text-white/40 text-xs tracking-wider uppercase mb-1">
                    Former Role
                  </div>
                  <div className="text-white text-sm font-light">
                    Telecom Engineer
                  </div>
                </div>
              </div>

              <div className="w-px h-12 bg-white/10" />

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white/40" />
                <div>
                  <div className="text-white/40 text-xs tracking-wider uppercase mb-1">
                    Current Focus
                  </div>
                  <div className="text-white text-sm font-light">
                    System Transformation
                  </div>
                </div>
              </div>

              <div className="w-px h-12 bg-white/10" />

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white/40" />
                <div>
                  <div className="text-white/40 text-xs tracking-wider uppercase mb-1">
                    Journey Length
                  </div>
                  <div className="text-white text-sm font-light">15+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical text on right edge */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-6">
          <div
            className="text-white/20 text-xs tracking-[0.3em] uppercase font-light"
            style={{ writingMode: "vertical-rl" }}
          >
            My Journey
          </div>
          <div className="w-[1px] h-32 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutHeroSection;
