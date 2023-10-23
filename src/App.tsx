import React from "react";
import AppLogo from "./components/AppLogo";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <>
      <main
        className="w-full h-[90%]"
      >
        <AppLogo />
      </main>
      <footer
        className='w-full h-[10%] flex justify-center align-middle'
      >
        <AppFooter />
      </footer>
    </>
  );
}

export default App;
