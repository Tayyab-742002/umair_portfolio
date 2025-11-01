import  { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, FileText } from "lucide-react";

const AboutCTASection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onNavigate = (section: string) => {
    console.log(`Navigate to: ${section}`);
  };
  return (
   
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      {/* <div className="absolute inset-0 opacity-25">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/3672362-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div> */}

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          {/* <div
            className={`text-center mb-20 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-block mb-8">
              <div className="px-3 py-1 border border-white/10">
                <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
                  Your Turn
                </span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-8 tracking-tight leading-[0.9]">
              Ready to Start
              <br />
              Your <span className="font-light italic">Reinvention</span>?
            </h2>

            <div className="w-16 h-[1px] bg-white/20 mx-auto mb-12" />

            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto mb-6">
              This framework transformed my life from the inside out. Now it's
              built to transform yours.
            </p>

            <p className="text-white/50 text-base leading-relaxed font-light max-w-2xl mx-auto">
              Whether you're stuck in survival mode or ready to level up, the
              path starts with awareness.
            </p>
          </div> */}

          {/* Two paths forward */}
          <div
            className="grid md:grid-cols-2 gap-8 mb-20"
            style={{
              transitionDelay: "300ms",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {/* Path 1: Self Audit */}
            <div className="group border border-white/10 p-10 hover:border-white/30 hover:bg-white/[0.02]">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-white/40">
                  <FileText
                    className="w-7 h-7 text-white/60 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-2 font-light">
                    Start Here
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                    Take the Self-Audit
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed font-light">
                    Discover where you're really operating from. 5 minutes to
                    clarity on what's holding you back.
                  </p>
                </div>
              </div>

              {/* <ul className="space-y-3 mb-8">
                {[
                  "Identify your current operating mode",
                  "Uncover hidden patterns",
                  "Get personalized insights",
                  "Free and instant results",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-white/50 text-sm font-light"
                  >
                    <div className="w-1 h-1 bg-white/40 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul> */}

              <button
                onClick={() => onNavigate("self-audits")}
                className="w-full group/btn px-8 py-4 bg-white text-black text-sm font-medium tracking-wide uppercase hover:bg-white/95"
              >
                <span className="flex items-center justify-center gap-3">
                  Start Self-Audit
                  <ArrowRight
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    strokeWidth={2}
                  />
                </span>
              </button>
            </div>

            {/* Path 2: Clarity Call */}
            <div className="group border border-white/10 p-10 hover:border-white/30 hover:bg-white/[0.02]">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-white/40">
                  <Calendar
                    className="w-7 h-7 text-white/60 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="text-white/30 text-xs tracking-widest uppercase mb-2 font-light">
                    Go Deeper
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                    Book a Clarity Call
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed font-light">
                    Let's map out your exact path forward. No pitch—just clarity
                    on what transformation looks like for you.
                  </p>
                </div>
              </div>

              {/* <ul className="space-y-3 mb-8">
                {[
                  "45-minute strategic session",
                  "Custom roadmap for your situation",
                  "Identify your biggest leverage points",
                  "Zero obligation, pure value",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-white/50 text-sm font-light"
                  >
                    <div className="w-1 h-1 bg-white/40 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul> */}

              <button
                onClick={() => onNavigate("booking")}
                className="w-full group/btn px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-medium tracking-wide uppercase hover:bg-white/5 hover:border-white/40"
              >
                <span className="flex items-center justify-center gap-3">
                  Book Your Call
                  <ArrowRight
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    strokeWidth={2}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom promise statement */}
          {/* <div
            className="text-center border-t border-white/10 pt-16"
            style={{
              transitionDelay: "600ms",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-white/50 text-sm leading-relaxed font-light mb-4">
                The first step to transformation is awareness. The second is
                action.
              </p>
              <p className="text-white/70 text-base leading-relaxed font-light">
                I spent years figuring this out so you don't have to. Let's
                start your reinvention today.
              </p>
            </div>
          </div> */}

          {/* Trust indicators */}
          {/* <div
            className="grid grid-cols-3 gap-px bg-white/10 mt-20"
            style={{
              transitionDelay: "800ms",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {[
              { value: "500+", label: "Transformations" },
              { value: "95%", label: "Success Rate" },
              { value: "12", label: "Week Program" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-black p-6 text-center">
                <div className="text-3xl font-extralight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default AboutCTASection;
