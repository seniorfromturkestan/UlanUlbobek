import React from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Main from "./components/main/Main";



function App() {
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
