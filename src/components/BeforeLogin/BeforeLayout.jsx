import HeroSection from "./HeroSection";
import Popcorn from "./Popcorn";
import SlideSection from "./SlideSection";

const BeforeLayout = () => {
  return (
    <main>
      <HeroSection />
      <div className="con">
        <Popcorn />
        <SlideSection />
      </div>
    </main>
  );
};

export default BeforeLayout;
