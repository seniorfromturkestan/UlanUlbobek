import React from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Main from "./components/main/Main";



function App() {
  return (
    <div className="bg-custom-bg bg-cover bg-fixed sm:bg-local relative">
      <Wrapper>
        <Header/>
        <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
