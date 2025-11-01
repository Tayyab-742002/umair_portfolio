import AboutHeroSection from "../components/About/HeroSection";
// import AboutFailedAttemptsSection from "../components/About/FailedAttemptsSection";
// import AboutClickMomentSection from "../components/About/ClickMomentSection";
import AboutFrameworkSection from "../components/About/FrameworkSection";

import AboutJourneySection from "../components/About/AboutJourneySection";
import AboutTransformationSection from "../components/About/AboutTransformationSection";
import AboutCTASection from "../components/About/CtaSection";
import AboutCredentialsSection from "../components/About/AboutCredentialsSection";

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <AboutHeroSection />
      <AboutJourneySection />
      <AboutFrameworkSection />
      <AboutCredentialsSection />
      <AboutTransformationSection />
      {/* <AboutFailedAttemptsSection />
      <AboutClickMomentSection /> */}

      <AboutCTASection />
    </div>
  );
};
