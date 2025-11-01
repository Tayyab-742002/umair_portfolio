import { useNavigate } from "react-router-dom";

const SelfAuditsCtaSection = () => {
  const navigate = useNavigate();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl text-white mb-6 font-light">
            Ready for More Than Just an Audit?
          </h2>
          <p className="text-xl text-light/70 mb-8">
            These audits are the first step. If you're ready to transform your
            entire system, let's talk about the 12-week journey.
          </p>
          <button onClick={() => navigate("/booking")} className="btn-primary">
            Book a Free Clarity Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelfAuditsCtaSection;
