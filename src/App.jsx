import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import SplashScreen from "./components/layout/SplashScreen";
import BeforeLayout from "./components/BeforeLogin/BeforeLayout";
import { Link } from "react-router";

const App = () => {
  return (
    <Layout>
      <Link to="/signin">Sign in</Link>
      <BeforeLayout />
    </Layout>
  );
};

export default App;
