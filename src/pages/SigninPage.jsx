import { useEffect, useRef, useState } from "react";
import Input from "../components/ui/Input";
import { useNavigate } from "react-router";

const users = [
  {
    name: "Dexter Yoon",
    profiles: ["Dexter Yoon"],
    password: "123123",
    id: "testUser",
    email: "user@user.com",
  },
];

const SigninPage = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const saveRef = useRef(null);

  useEffect(() => {
    const data = localStorage.getItem("savedData");
    if (data) {
      const { email, password } = JSON.parse(data);
      if (email && password) {
        saveRef.current.checked = true;
      }
      if (email) {
        setEmail(email);
      }
      if (password) {
        setPassword(password);
      }
    }
  }, []);

  const navi = useNavigate();

  const handleSubmit = () => {
    if (email.length === 0) {
      return alert("이메일을 입력해주세요.");
    }
    if (password.length === 0) {
      return alert("비밀번호를 입력해주세요.");
    }
    const foundUser = users.find((user) => user.email === email);
    if (!foundUser) {
      return alert("존재하지 않는 회원입니다.");
    }
    if (foundUser.password !== password) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    if (saveRef.current?.checked) {
      localStorage.setItem("savedData", JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem("savedData");
    }

    delete foundUser.password;
    localStorage.setItem("user", JSON.stringify(foundUser));
    setUser(foundUser);

    alert("환영합니다!");
    navi("/browse");
  };

  if (user) {
    return (
      <div>
        <h1>로그인 된 유저입니다.</h1>
        <button onClick={() => navi("/browse")}>Browse</button>
      </div>
    );
  }
  return (
    <div className="sm:bg-[url(https://cdn.pixabay.com/photo/2016/03/07/00/00/cinema-1241422_1280.jpg)] min-h-[100vh] bg-cover relative after:absolute after:size-full sm:after:bg-black/60 after:top-0 after:left-0 flex items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="max-w-100 mx-auto p-4 relative z-10 w-full sm:bg-black/50 rounded"
      >
        <h1 className="font-black text-2xl mb-6">로그인</h1>
        <div className="flex flex-col gap-4">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"이메일 주소"}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={"비밀번호"}
          />
          <button className="h-12 bg-primary text-white justify-center">
            로그인
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <input type="checkbox" id="save" ref={saveRef} />
          <label htmlFor="save">로그인 정보 저장</label>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
