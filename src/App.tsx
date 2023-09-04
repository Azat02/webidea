import React from "react";
import "./App.scss";
import EmployerList from "./components/employerList/EmployerList";
import Insert from "./components/insert/Insert";

function App() {
  return (
    <div className="wrapper">
      <Insert />
      <EmployerList />
    </div>
  );
}

export default App;
