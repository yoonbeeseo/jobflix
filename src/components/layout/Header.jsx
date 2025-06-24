import { IoChevronDown, IoLanguage } from "react-icons/io5";
import LanguageButton from "./LanguageButton";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="flex con justify-between items-center pr-2">
        <button className="text-primary font-bold text-4xl py-5">
          NETFLIX
        </button>
        <div className="flex gap-2">
          <LanguageButton />
          <Link to="/signin" className="bg-primary text-text px-6">
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
