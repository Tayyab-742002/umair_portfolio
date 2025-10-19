import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, X } from 'lucide-react';

interface QuizProps {
  quizId: string;
  onNavigate: (page: string) => void;
}

interface QuizData {
  title: string;
  description: string;
  instructions: string;
  sections: {
    title: string;
    questions: string[];
  }[];
  scoring: {
    range: string;
    level: string;
    interpretation: string;
  }[];
}

export const Quiz = ({ quizId, onNavigate }: QuizProps) => {
  return <div>Quiz Page Under development</div>
  const heroRef = useScrollReveal();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const quizData: { [key: string]: QuizData } = {
    'quiz-1': {
      title: 'Discover Your Core Needs',
      description: 'Are You Shining at Your Best or Just Staying Busy?',
      instructions: 'Rate each statement from 1-3 based on how true it feels right now.',
      sections: [
        {
          title: 'Part 1: Significance & Recognition',
          questions: [
            'I feel seen and valued for my contributions',
            'I receive recognition that matches my effort',
            'My work makes a meaningful impact that others acknowledge',
          ],
        },
        {
          title: 'Part 2: Connection & Belonging',
          questions: [
            'I have deep, authentic relationships in my life',
            'I feel understood by the people closest to me',
            'I belong to a community that shares my values',
          ],
        },
        {
          title: 'Part 3: Growth & Expansion',
          questions: [
            'I am learning and evolving regularly',
            'I feel challenged in ways that excite me',
            'My life has a sense of forward momentum',
          ],
        },
        {
          title: 'Part 4: Contribution & Purpose',
          questions: [
            'I know my work serves something bigger than myself',
            'I feel fulfilled by how I contribute to others',
            'My daily actions align with my deepest values',
          ],
        },
      ],
      scoring: [
        {
          range: '32-36',
          level: 'Superpower Star',
          interpretation: 'You are operating at your peak. Your core needs are being met, and you have the energy and clarity to thrive. Focus on maintaining this state and deepening your impact.',
        },
        {
          range: '24-31',
          level: 'Rising Phoenix',
          interpretation: 'You are on the right path, but there are gaps. Some needs are being met while others are neglected. Identify which areas need attention and prioritize them.',
        },
        {
          range: '12-23',
          level: 'Survival Mode',
          interpretation: 'You are running on empty. Most of your core needs are unmet, and it\'s draining your energy. It\'s time for a reset—starting with awareness and intentional action.',
        },
      ],
    },
  };

  const quiz = quizData[quizId] || quizData['quiz-1'];
  const totalQuestions = quiz.sections.reduce((sum, section) => sum + section.questions.length, 0);
  const maxScore = totalQuestions * 3;

  const handleScoreChange = (key: string, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
  };

  const calculateTotalScore = () => {
    return Object.values(scores).reduce((sum, score) => sum + score, 0);
  };

  const handleCalculate = () => {
    const answeredQuestions = Object.keys(scores).length;
    if (answeredQuestions < totalQuestions) {
      alert(`Please answer all ${totalQuestions} questions before calculating your score.`);
      return;
    }
    setShowModal(true);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) {
      alert('Please enter your name and email.');
      return;
    }

    const totalScore = calculateTotalScore();
    const scoringData = quiz.scoring.find((s) => {
      const [min, max] = s.range.split('-').map(Number);
      return totalScore >= min && totalScore <= max;
    });

    onNavigate(`quiz-results?score=${totalScore}&level=${scoringData?.level || ''}&email=${email}&name=${firstName}`);
  };

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => onNavigate('self-audits')}
              className="text-light/60 hover:text-white mb-8 transition-colors"
            >
              ← Back to Self-Audits
            </button>

            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Self-Assessment</span>
            </div>

            <h1 className="text-hero text-white mb-6">
              {quiz.title}
            </h1>

            <p className="text-2xl text-light/80 mb-8 italic">
              "{quiz.description}"
            </p>

            <div className="p-6 bg-blue/5 border border-blue/20 mb-12">
              <h3 className="text-white font-medium mb-2">Instructions</h3>
              <p className="text-light/70">{quiz.instructions}</p>
              <div className="mt-4 flex gap-6 text-sm">
                <span className="text-light/60">1 = Not true</span>
                <span className="text-light/60">2 = Sometimes true</span>
                <span className="text-light/60">3 = Very true</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {quiz.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="p-8 bg-light/5 border border-light/10">
                <h2 className="text-2xl text-white mb-8 font-light">{section.title}</h2>

                <div className="space-y-6">
                  {section.questions.map((question, questionIndex) => {
                    const key = `${sectionIndex}-${questionIndex}`;
                    return (
                      <div key={key} className="pb-6 border-b border-light/10 last:border-0">
                        <p className="text-light/80 mb-4">{question}</p>
                        <div className="flex gap-4">
                          {[1, 2, 3].map((value) => (
                            <label
                              key={value}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <input
                                type="radio"
                                name={key}
                                value={value}
                                checked={scores[key] === value}
                                onChange={() => handleScoreChange(key, value)}
                                className="w-5 h-5 accent-blue cursor-pointer"
                              />
                              <span className="text-light/60 group-hover:text-white transition-colors">
                                {value}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <button
                onClick={handleCalculate}
                className="btn-primary text-lg group"
              >
                Calculate My Superpower Score
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-dark border border-light/20 max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-light/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl text-white mb-4 font-light">
              Your Results Are Calculated!
            </h2>

            <p className="text-light/70 mb-6">
              Where should we send your personalized results?
            </p>

            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-light/80 mb-2 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-light/5 border border-light/20 text-light focus:outline-none focus:border-blue transition-colors"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light/80 mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-light/5 border border-light/20 text-light focus:outline-none focus:border-blue transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                See My Results Now
              </button>
            </form>

            <p className="text-light/40 text-xs mt-4 text-center">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
