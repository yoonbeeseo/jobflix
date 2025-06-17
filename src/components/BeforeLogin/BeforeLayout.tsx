import HeroSection from "./HeroSection";
import Popcorn from "./Popcorn";

const BeforeLayout = () => {
  return (
    <main>
      <HeroSection />
      <div className="con">
        <Popcorn />
      </div>
    </main>
  );
};

export default BeforeLayout;
