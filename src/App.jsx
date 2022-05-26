// import RealtimeInput from "./components/RealTime";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import SectionHome from "./components/section/sectionHome";
import SectionAbout from "./components/section/sectionAbout";
import SectionContact from "./components/section/sectionContact";
import SectionRegister from "./components/section/sectionRegister";

const App = () => {
  const [page, setPage] = useState("home");

  // if (page === "register") {
  //   return (
  //     <div className="register">
  //       <NavBar action={[page, setPage]} />
  //       <SectionRegister />
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <NavBar action={[page, setPage]} />
      <SectionHome />
      <SectionAbout />
      <SectionContact />
    </div>
  );
};

export default App;
