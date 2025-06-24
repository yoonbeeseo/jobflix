import { useState } from "react";
import Input from "../ui/Input";

const StartSection = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="px-4">
      <h1 className="mb-2 sm:text-center">
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </h1>
      <div className="flex flex-col gap-2 sm:flex-row max-w-125 mx-auto">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소"
          containerClassName="flex-1"
        />
        <div>
          <button className="bg-primary text-white h-12">시작하기</button>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
