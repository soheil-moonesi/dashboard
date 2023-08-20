import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Accordion from "react-bootstrap/Accordion";
import "./App.css";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Dashboard } from "./Dashboard";
function App() {
  return (
    <>
      <TopNav />
      <SideNav />
      <Dashboard />
    </>
  );
}

export default App;
