import { useState } from "react";
import Input from "../components/ui/Input";
import { LuX } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router";

const BrowsePage = ({ user, setUser, setSelectedProfile }) => {
  const [isAddingProfile, setIsAddingProfile] = useState(false);

  const [name, setName] = useState("");

  const navi = useNavigate();
  return (
    <div className="flex flex-col justify-center min-h-screen">
      {isAddingProfile ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const foundProfile = user.profiles.find((item) => item === name);
            if (foundProfile) {
              return alert("중복된 프로필 이름입니다.");
            }

            setUser((prev) => ({
              ...prev,
              profiles: [...prev.profiles, name],
            }));
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, profiles: [...user.profiles, name] })
            );

            setName("");
            setIsAddingProfile(false);
          }}
          className="max-w-100 mx-auto w-full p-4"
        >
          <div className="flex justify-end">
            <button
              onClick={() => {
                setName("");
                setIsAddingProfile(false);
              }}
              type="button"
            >
              <LuX />
            </button>
          </div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"프로필 이름"}
          />
          <button className="bg-primary text-white h-12 w-full justify-center mt-2">
            프로필 추가
          </button>
        </form>
      ) : (
        <>
          <h1>넷플릭스를 시청할 프로필을 선택해주세요.</h1>
          <ul className="flex gap-2 items-center">
            {user.profiles.map((profile) => (
              <li
                key={profile}
                className="w-25 cursor-pointer"
                onClick={() => {
                  setSelectedProfile(profile);
                  navi("/movies");
                }}
              >
                <div
                  className="size-25
                flex justify-center items-center text-[100px]"
                >
                  <IoPersonCircle />
                </div>
                <p className="text-center truncate">{profile}</p>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsAddingProfile(true)}
                className="size-25 border rouded"
              >
                <div />
                <p>프로필 추가</p>
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default BrowsePage;
