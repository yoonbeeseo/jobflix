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
      </div>
    </main>
  );
};

export default BeforeLayout;
