import { IoChevronForward } from "react-icons/io5";
import Input from "../ui/Input";
import { useState } from "react";

const HeroSection = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-[url(https://cdn.pixabay.com/photo/2016/03/07/00/00/cinema-1241422_1280.jpg)] min-h-[50vh] bg-cover relative after:absolute after:size-full after:bg-black/60 after:top-0 after:left-0 flex justify-center">
      <div className="con relative z-1 flex flex-col justify-center px-2">
        <div className="flex flex-col items-center gap-2 text-center font-light">
          <h1 className="font-black text-2xl">영화, 시리즈 등을 무제한으로</h1>
          <p>7,000원으로 시작ㄴ하세요. 멤버십은 언제든지 해지 가능합니다.</p>
          <p>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </p>
        </div>
        <div className="flex flex-col items-center mobile:flex-row gap-2 mt-5">
          <div className="flex-1 w-full">
            <Input
              id={"first-email"}
              placeholder={"이메일 주소"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button className="bg-primary pl-3 h-12">
            시작하기 <IoChevronForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
