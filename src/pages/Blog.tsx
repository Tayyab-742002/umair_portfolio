import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const navigate = useNavigate();
  return <div>Blog Page Under development</div>
  const heroRef = useScrollReveal();

  const posts = [
    {
      id: 1,
      title: 'Why Productivity Hacks Keep Failing You',
      excerpt: 'You\'ve tried every morning routine, every app, every system. And yet, you\'re still exhausted. Here\'s why.',
      category: 'Mindset',
      date: '2024-03-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      title: 'The Nervous System Reset No One Talks About',
      excerpt: 'Stress isn\'t just mental. It lives in your body. Learn how to release it and reclaim your energy.',
      category: 'Energy',
      date: '2024-03-10',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 3,
      title: 'From Imposter to Icon: Rebuilding Identity',
      excerpt: 'Feeling like a fraud has nothing to do with your achievements. It\'s about who you think you\'re allowed to be.',
      category: 'Identity',
      date: '2024-03-05',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 4,
      title: 'The Behavior Architecture Framework',
      excerpt: 'Willpower is a myth. Habits stick when they align with identity. Here\'s how to design them.',
      category: 'Behavior',
      date: '2024-02-28',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 5,
      title: 'What High Performers Get Wrong About Rest',
      excerpt: 'Rest isn\'t the absence of work. It\'s a skill. And most overachievers never learned it.',
      category: 'Energy',
      date: '2024-02-20',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 6,
      title: 'The Reinvention Mindset: A Guide',
      excerpt: 'Transformation isn\'t about becoming someone new. It\'s about becoming who you already are.',
      category: 'Mindset',
      date: '2024-02-15',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Insights & Articles</span>
            </div>

            <h1 className="text-display text-white mb-12">
              The
              <br />
              <span className="text-blue">Reinvention</span> Blog
            </h1>

            <p className="text-xl text-light/80 leading-relaxed">
              Deep dives into mindset, energy, behavior, and identity. Real strategies for people
              ready to do the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const postRef = useScrollReveal();

                return (
                  <article
                    key={post.id}
                    ref={postRef}
                    className="fade-in group cursor-hover"
                  >
                    <div className="overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="px-3 py-1 bg-blue/10 text-blue border border-blue/20">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-light/50">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl text-white font-light group-hover:text-blue transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-light/70 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <button className="flex items-center gap-2 text-light/60 group-hover:text-blue transition-colors">
                        <span>Read Article</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Want More Insights?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              Subscribe to get weekly articles on transformation, mindset, and high performance
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-dark border border-light/20 text-light focus:outline-none focus:border-blue transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Ready for Personalized Guidance?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              Reading articles is a great start. But real transformation happens with personalized coaching.
            </p>
            <button
              onClick={() => navigate('/booking')}
              className="btn-primary"
            >
              Book a Free Clarity Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
