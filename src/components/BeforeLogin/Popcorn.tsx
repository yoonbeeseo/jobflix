import { PiPopcornDuotone } from "react-icons/pi";

const Popcorn = () => {
  return (
    <div className="flex flex-col relative 500:flex-row 500:items-center 500:gap-2 p-4 border">
      <div className="border-2 absolute size-10 top-4 left-6 bg-zinc-900 flex items-center justify-center text-2xl rounded-full border-zinc-700 500:relative 500:top-0 500:left-0 500:size-15 500:text-5xl 500:border-0">
        <PiPopcornDuotone />
      </div>
      <div className="mt-5 p-5 px-2 bg-linear-to-r from-violet-900 to-violet-950 flex flex-col gap-2 items-start 500:mt-0 500:flex-row w-full 500:items-center 500:p-2 rounded">
        <div className="500:flex-1">
          <h1 className="font-bold">7,000원이면 만날 수 있는 넷플릭스.</h1>
          <p className="font-extralight text-sm">
            가장 경제적인 광고형 멤버십을 이용하세요.
          </p>
        </div>
        <button className="bg-white/20 text-white text-sm font-light">
          자세히 알아보기
        </button>
      </div>
    </div>
  );
};

export default Popcorn;
