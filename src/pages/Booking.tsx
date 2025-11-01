import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';

export const Booking = () => {
  const navigate = useNavigate();
  return <div>Booking Page Under development</div>
  const heroRef = useScrollReveal();
  const calendarRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      <section ref={heroRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 border border-blue/30 rounded-full">
              <span className="text-blue text-sm tracking-wide">Book Your Call</span>
            </div>

            <h1 className="text-display text-white mb-12">
              Free Clarity
              <br />
              <span className="text-blue">Call</span>
            </h1>

            <p className="text-xl text-light/80 leading-relaxed mb-8">
              A no-pressure, 30-minute conversation to explore where you are, where you want to be,
              and whether the 12-week journey is right for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-12 text-center font-light">
              What to Expect
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue" />
                </div>
                <h3 className="text-xl text-white mb-3 font-light">30 Minutes</h3>
                <p className="text-light/70 leading-relaxed">
                  Just half an hour to get clear on your situation and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <Video className="w-8 h-8 text-blue" />
                </div>
                <h3 className="text-xl text-white mb-3 font-light">Video Call</h3>
                <p className="text-light/70 leading-relaxed">
                  Secure Zoom meeting. Link sent immediately after booking.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-blue" />
                </div>
                <h3 className="text-xl text-white mb-3 font-light">No Pressure</h3>
                <p className="text-light/70 leading-relaxed">
                  This is a conversation, not a sales pitch. Promise.
                </p>
              </div>
            </div>

            <div className="p-8 bg-dark border border-light/10">
              <h3 className="text-2xl text-white mb-6 font-light">
                During This Call, We'll Cover:
              </h3>
              <ul className="space-y-4">
                {[
                  'Your current situation and what\'s not working',
                  'The patterns and blocks keeping you stuck',
                  'Your goals for the next 6-12 months',
                  'Whether the 12-week program is a good fit',
                  'Next steps if we decide to work together',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0 mt-3" />
                    <span className="text-light/70 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={calendarRef} className="section-padding fade-in">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-white mb-4 font-light">
                Choose Your Time
              </h2>
              <p className="text-light/70">
                Select a time that works for you. All times shown in your local timezone.
              </p>
            </div>

            <div className="bg-light/5 border border-light/10 p-12">
              <div className="text-center py-20">
                <Calendar className="w-16 h-16 text-blue/50 mx-auto mb-6" />
                <p className="text-light/60 text-lg mb-2">
                  TODO: Calendly Integration
                </p>
                <p className="text-light/40 text-sm">
                  Embed your Calendly widget here
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue/5 border border-blue/20">
              <p className="text-light/80 text-center">
                <strong className="text-white">Note:</strong> You'll receive a confirmation email immediately
                with the Zoom link and a calendar invite. Please add it to your calendar so you don't forget!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-12 text-center font-light">
              Before Your Call
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-dark border-l-4 border-blue">
                <h3 className="text-xl text-white mb-2 font-medium">Take a Self-Audit</h3>
                <p className="text-light/70 leading-relaxed">
                  If you haven't already, complete one of the self-audits. It'll help you get clear on where
                  you're starting from, and we can discuss your results on the call.
                </p>
                <button
                  onClick={() => navigate('/self-audits')}
                  className="mt-4 text-blue hover:text-white transition-colors"
                >
                  View Self-Audits →
                </button>
              </div>

              <div className="p-6 bg-dark border-l-4 border-blue">
                <h3 className="text-xl text-white mb-2 font-medium">Come Prepared</h3>
                <p className="text-light/70 leading-relaxed">
                  Think about what's not working in your life right now. What patterns keep repeating?
                  What would your ideal day look like? The more honest you are, the more valuable this call will be.
                </p>
              </div>

              <div className="p-6 bg-dark border-l-4 border-blue">
                <h3 className="text-xl text-white mb-2 font-medium">Be Ready to Go Deep</h3>
                <p className="text-light/70 leading-relaxed">
                  This isn't a surface-level chat. We're going to dig into what's really going on.
                  Show up ready to be real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6 font-light">
              Have Questions First?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              If you'd prefer to send a message before booking, feel free to reach out.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
