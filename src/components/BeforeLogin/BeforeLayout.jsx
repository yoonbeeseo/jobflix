import Accordion from "./Accordion";
import HeroSection from "./HeroSection";
import Popcorn from "./Popcorn";
import ReasonSection from "./ReasonSection";
import SlideSection from "./SlideSection";

const BeforeLayout = () => {
  return (
    <main>
      <HeroSection />
      <div className="con">
        <Popcorn />
        <SlideSection />
        <ReasonSection />
        <Accordion />
      </div>
    </main>
  );
};

export default BeforeLayout;
