import { BrowserRouter, Routes, Route, Link } from "react-router";
import App from "./App";
import { useEffect, useState } from "react";
import SplashScreen from "./components/layout/SplashScreen";
import SigninPage from "./pages/SigninPage";
import BrowsePage from "./pages/BrowsePage";
import MoviePage from "./pages/MoviePage";

const AppRouter = () => {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    //! 유저검사하기
    const data = localStorage.getItem("user");
    if (data) {
      const userData = JSON.parse(data);
      console.log("로그인된 유저 정보를 발견했습니다.");
      setUser(userData);
    }

    //! 최초 1회 실행하는 코드로 2~3초뒤에 앱이 실행되도록 설정
    setTimeout(() => {
      setInit(true);
    }, 2000);
  }, []);

  if (!init) return <SplashScreen init={init} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route
          path="signin"
          element={<SigninPage user={user} setUser={setUser} />}
        />

        {user && (
          <>
            <Route
              path="browse"
              element={
                <BrowsePage
                  user={user}
                  setUser={setUser}
                  setSelectedProfile={setSelectedProfile}
                />
              }
            />
            <Route
              path="movies"
              element={<MoviePage selectedProfile={selectedProfile} />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
