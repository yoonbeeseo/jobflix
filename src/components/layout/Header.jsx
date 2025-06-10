import { IoChevronDown, IoLanguage } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="flex con justify-between items-center pr-2">
        <button className="text-primary font-bold text-4xl py-5">
          NETFLIX
        </button>
        <div className="flex gap-2">
          <button className="border">
            <IoLanguage />
            <p className="hidden md:block">{"한국어"}</p>
            <IoChevronDown />
          </button>
          <button className="bg-primary text-text px-6">로그인</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
