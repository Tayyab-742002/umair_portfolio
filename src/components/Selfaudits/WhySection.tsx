const SelfAuditsWhySection = () => {
  return (
    <section className="section-padding bg-light/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-hero text-white mb-12 text-center">
            Why Self-Audits Matter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue font-light">1</span>
              </div>
              <h3 className="text-xl text-white mb-4 font-light">
                Awareness First
              </h3>
              <p className="text-light/70 leading-relaxed">
                Most people skip this step and wonder why nothing changes. You
                need to see the system before you can change it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue font-light">2</span>
              </div>
              <h3 className="text-xl text-white mb-4 font-light">
                Personalized Insights
              </h3>
              <p className="text-light/70 leading-relaxed">
                Generic advice doesn't work. These audits reveal your specific
                patterns, blocks, and opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-blue font-light">3</span>
              </div>
              <h3 className="text-xl text-white mb-4 font-light">
                Actionable Steps
              </h3>
              <p className="text-light/70 leading-relaxed">
                You won't just get a score. You'll get a clear picture of
                where to start and what to focus on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAuditsWhySection;

