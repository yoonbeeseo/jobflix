import Accordion from "./Accordion";
import HeroSection from "./HeroSection";
import Popcorn from "./Popcorn";
import ReasonSection from "./ReasonSection";
import SlideSection from "./SlideSection";
import StartSection from "./StartSection";

const BeforeLayout = () => {
  return (
    <main>
      <HeroSection />
      <div className="con">
        <Popcorn />
        <SlideSection />
        <ReasonSection />
        <Accordion />
        <StartSection />
      </div>
    </main>
  );
};

export default BeforeLayout;
