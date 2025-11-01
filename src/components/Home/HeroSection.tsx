import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeHeroSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-silhouette-of-a-person-against-a-sunset-9279/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
        }}
      />

      <div
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Minimalist & Clean */}
          <div className="space-y-10">
            {/* Minimal Badge */}
            <div
              className={`inline-block transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="px-4 py-1.5 border border-white/10 rounded-full">
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-light">
                  Transform Your System
                </span>
              </div>
            </div>

            {/* Powerful Headline - Clean Typography */}
            <h1
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] tracking-tight">
                From Survival
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mt-2">
                to{" "}
                <span className="text-white font-normal italic">Thriving</span>
              </div>
            </h1>

            {/* Clean Subtext */}
            <p
              className={`text-lg text-white/50 leading-relaxed max-w-lg font-light transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              On paper, you have success. Inside, you feel drained and stuck.
              It's time to reinvent—not your résumé, but your entire system.
            </p>

            {/* Minimal CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                onClick={() => navigate("/self-audits")}
                className="group relative px-8 py-4 bg-white text-black font-medium rounded-none overflow-hidden transition-all duration-300 hover:bg-white/90"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wide">
                  Take the 5-Minute Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => navigate("/booking")}
                className="px-8 py-4 bg-transparent text-white font-medium rounded-none border border-white/20 transition-all duration-300 hover:bg-white/5 hover:border-white/40"
              >
                <span className="text-sm tracking-wide">
                  Book a Free Clarity Call
                </span>
              </button>
            </div>

            {/* Minimal Social Proof */}
            <div
              className={`flex items-center gap-8 pt-8 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <div className="text-3xl font-light text-white">500+</div>
                <div className="text-xs text-white/40 tracking-wider uppercase mt-1">
                  Transformations
                </div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-light text-white">95%</div>
                <div className="text-xs text-white/40 tracking-wider uppercase mt-1">
                  Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Dark & Professional */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto">
              {/* Minimalist border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-sm" />

              {/* Image container */}
              <div className="relative h-full bg-black rounded-sm overflow-hidden">
                <img
                  src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/umair_Saeed_profile.jpeg"
                  alt="Professional coach"
                  className="w-full h-full object-cover grayscale-[30%] contrast-110"
                />

                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Minimal name tag at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="border-t border-white/10 pt-6">
                    <div className="text-white text-sm font-light tracking-[0.2em] uppercase">
                      Your Guide
                    </div>
                    <div className="text-white/50 text-xs mt-2 font-light">
                      Expert in System Transformation
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal accent line */}
              <div className="absolute -right-4 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Minimal bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default HomeHeroSection;
