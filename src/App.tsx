import "./index.css";
import Home from "./views/home/Home";
import Nav from "./components/nav/Nav";
import Projects from "./views/projects/Projects";
import Redes from "./components/redes/Redes";
import { useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(false);

 
  return (
    <main className={`${lightMode ? "white" : "dark"}`}>
      <Nav lightMode={lightMode} setLightMode={setLightMode} />
      <Home />
      <Projects />
      <Redes/>
    </main>
  );
}

export default App;
