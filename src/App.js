import React, { useState, useEffect } from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Main from "./components/main/Main";



function App() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSmall(window.innerWidth > 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isScreenSmall) {
    return <h1>Страница доступна только на мобильных устройствах </h1>;
  }

  return (
    <div className="relative">
     <div className="fixed top-0 left-0 w-full h-full bg-custom-bg bg-cover bg-center -z-10"></div>
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  </div>
  
  );
}

export default App;
