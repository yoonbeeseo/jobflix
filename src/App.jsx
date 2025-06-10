import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import SplashScreen from "./components/layout/SplashScreen";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    //! 최초 1회 실행하는 코드로 2~3초뒤에 앱이 실행되도록 설정
    setTimeout(() => {
      setInit(true);
    }, 2000);
  }, []);

  return (
    <Layout>
      <SplashScreen init={init} />
      <div>App</div>
    </Layout>
  );
};

export default App;
