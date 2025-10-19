import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp, Award, Star } from "lucide-react";

const HomeProofSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const onNavigate = (section) => {
    console.log(`Navigate to: ${section}`);
  };

  const testimonials = [
    {
      quote:
        "I went from burnout to building a business I love. The framework didn't just change my work—it changed how I show up in life.",
      name: "Sarah Chen",
      role: "Tech Executive turned Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=faces",
      metric: "300%",
      label: "Revenue Growth",
      icon: TrendingUp,
    },
    {
      quote:
        "For the first time in years, I have energy at the end of the day. I'm present with my family. This is the reinvention I didn't know I needed.",
      name: "Michael Torres",
      role: "VP of Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=faces",
      metric: "85%",
      label: "Stress Reduction",
      icon: Award,
    },
    {
      quote:
        "This wasn't just coaching—it was a complete system upgrade. I feel like I've unlocked a version of myself I didn't know existed.",
      name: "Jessica Park",
      role: "Founder & Creative Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&crop=faces",
      metric: "2x",
      label: "Productivity",
      icon: Star,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        {/* <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="mb-6">
            <span className="text-white/50 text-xs tracking-[0.4em] uppercase font-light">
              Validation
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 tracking-tight leading-[0.95]">
            Real <span className="font-light italic">Transformations</span>
          </h2>

          <div className="w-12 h-px bg-white/30 mx-auto" />
        </div> */}
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
        {/* Main Content - Split Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left: Image Gallery */}
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                {/* Image container */}
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeTestimonial === idx
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="text-2xl font-extralight text-white mb-2">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-white/60 text-sm font-light">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>

                {/* Metric badge - top right */}
                <div className="absolute top-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 text-center">
                    <div className="text-3xl font-extralight text-white leading-none mb-1">
                      {testimonials[activeTestimonial].metric}
                    </div>
                    <div className="text-[10px] text-white/60 tracking-widest uppercase">
                      {testimonials[activeTestimonial].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="max-w-xl">
                {/* Icon */}
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-8">
                  {React.createElement(testimonials[activeTestimonial].icon, {
                    className: "w-6 h-6 text-white",
                    strokeWidth: 1.5,
                  })}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-12">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center gap-4 mb-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-px transition-all duration-500 ${
                        activeTestimonial === idx
                          ? "bg-white w-20"
                          : "bg-white/30 w-10 hover:bg-white/50"
                      }`}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="text-white/40 text-sm font-light">
                  <span className="text-white">
                    {String(activeTestimonial + 1).padStart(2, "0")}
                  </span>{" "}
                  / {String(testimonials.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>

          {/* All testimonials grid */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-white/10 pt-20 mb-20">
              <div className="grid md:grid-cols-3 gap-px bg-white/10">
                {testimonials.map((testimonial, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className="group relative bg-black p-10 md:p-12 text-left hover:bg-white/[0.02] transition-all duration-500"
                  >
                    {/* Number */}
                    <div className="text-8xl font-extralight text-white/10 mb-8 leading-none">
                      0{idx + 1}
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-white/70 font-light leading-relaxed mb-8 line-clamp-4 group-hover:text-white/90 transition-colors">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="mb-6">
                      <div className="text-white text-sm font-normal mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-white/40 text-xs font-light">
                        {testimonial.role}
                      </div>
                    </div>

                    {/* Metric */}
                    <div className="inline-flex items-center gap-3 text-white/50 group-hover:text-white transition-colors">
                      {React.createElement(testimonial.icon, {
                        className: "w-4 h-4",
                        strokeWidth: 1.5,
                      })}
                      <span className="text-xs tracking-wider">
                        {testimonial.metric}
                      </span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center border-t border-white/10 pt-20 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-white/50 text-sm tracking-wide font-light mb-12">
                Join hundreds of professionals who've transformed their lives
              </p>

              <button
                onClick={() => onNavigate("case-studies")}
                className="group px-12 py-6 bg-white text-black text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/90"
              >
                <span className="flex items-center justify-center gap-4">
                  Read More Case Studies
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                    strokeWidth={2}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProofSection;
