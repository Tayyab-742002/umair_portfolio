import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Target,
  Sparkles,
  Heart,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface Audit {
  id: number;
  icon: LucideIcon;
  title: string;
  hook: string;
  description: string;
  gradient: string;
  duration: string;
}

const SelfAuditsGridSection = () => {
  const navigate = useNavigate();
  const gridRef = useScrollReveal();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const audits: Audit[] = [
    {
      id: 1,
      icon: Sparkles,
      title: "Discover Your Core Needs",
      hook: "Are You Shining at Your Best or Just Staying Busy?",
      description:
        "Uncover what truly drives you and identify the needs that aren't being met.",
      gradient: "from-blue/20 to-blue/5",
      duration: "5 minutes",
    },
    {
      id: 2,
      icon: Brain,
      title: "Find Your Archetype",
      hook: "What's Your Default Operating Mode?",
      description:
        "Discover your personality archetype and how it shapes your decisions.",
      gradient: "from-purple/20 to-purple/5",
      duration: "7 minutes",
    },
    {
      id: 3,
      icon: Target,
      title: "Assess Your Energy Levels",
      hook: "Running on Empty or Powered Up?",
      description:
        "Evaluate your physical, emotional, and mental energy reserves.",
      gradient: "from-green/20 to-green/5",
      duration: "6 minutes",
    },
    {
      id: 4,
      icon: Heart,
      title: "Evaluate Your Alignment",
      hook: "Is Your Life Reflecting Your Values?",
      description:
        "Measure the gap between who you are and who you want to be.",
      gradient: "from-red/20 to-red/5",
      duration: "8 minutes",
    },
  ];

  return (
    <section ref={gridRef} className="section-padding fade-in">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audits.map((audit) => {
            const Icon = audit.icon;
            return (
              <div
                key={audit.id}
                className="group relative overflow-hidden cursor-hover"
                onMouseEnter={() => setHoveredCard(audit.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    audit.gradient
                  } transition-opacity duration-500 ${
                    hoveredCard === audit.id ? "opacity-100" : "opacity-50"
                  }`}
                />

                <div className="absolute inset-0 grain" />

                <div className="relative p-10 border border-light/10 group-hover:border-blue/30 transition-all duration-500 min-h-[400px] flex flex-col">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-blue group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h3 className="text-3xl text-white mb-3 font-light group-hover:text-blue transition-colors duration-300">
                    {audit.title}
                  </h3>

                  <p className="text-xl text-light/90 mb-6 italic">
                    "{audit.hook}"
                  </p>

                  <p className="text-light/70 leading-relaxed mb-6 flex-grow">
                    {audit.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-light/50 text-sm">
                      {audit.duration}
                    </span>
                    <button
                      onClick={() => navigate(`/quiz/${audit.id}`)}
                      className="flex items-center gap-2 text-white group-hover:text-blue transition-colors"
                    >
                      <span className="font-medium">Start Quiz</span>
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredCard === audit.id ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 70%)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelfAuditsGridSection;
