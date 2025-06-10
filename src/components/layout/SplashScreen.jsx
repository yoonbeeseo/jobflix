import { twMerge } from "tailwind-merge";

const SplashScreen = ({ init }) => {
  return (
    <div
      className={twMerge(
        "h-screen flex items-center justify-center fixed w-full top-0 left-0 bg-bg transition-all duration-1000",
        init && "opacity-0 invisible"
      )}
    >
      <h1 className="text-8xl text-primary font-bold">NETFLIX</h1>
    </div>
  );
};

export default SplashScreen;
