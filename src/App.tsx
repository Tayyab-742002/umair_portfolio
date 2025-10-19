import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { CaseStudies } from './pages/CaseStudies';
import { SelfAudits } from './pages/SelfAudits';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { Quiz } from './pages/Quiz';
import { QuizResults } from './pages/QuizResults';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const renderPage = () => {
    const pageProps = { onNavigate: handleNavigate };

    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      case 'about':
        return <About {...pageProps} />;
      case 'services':
        return <Services {...pageProps} />;
      case 'case-studies':
        return <CaseStudies {...pageProps} />;
      case 'self-audits':
        return <SelfAudits {...pageProps} />;
      case 'blog':
        return <Blog {...pageProps} />;
      case 'contact':
        return <Contact {...pageProps} />;
      case 'booking':
        return <Booking {...pageProps} />;
      case 'quiz-results':
        return <QuizResults {...pageProps} />;
      default:
        if (currentPage.startsWith('quiz-')) {
          return <Quiz quizId={currentPage} {...pageProps} />;
        }
        return <Home {...pageProps} />;
    }
  };

  return (
    <div className="grain bg-dark min-h-screen">
      <CustomCursor />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;
