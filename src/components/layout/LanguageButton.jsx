import { IoChevronDown, IoLanguage } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

//! props - drilling
//! 컴포넌트를 부르고 있는 곳에서 어떠한 값을 전달하는 것
const LanguageButton = ({ full }) => {
  return (
    <button className="border">
      <IoLanguage />
      <p className={twMerge(!full && "hidden md:block")}>{"한국어"}</p>
      <IoChevronDown />
    </button>
  );
};

export default LanguageButton;
