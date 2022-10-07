import React from "react";
// import { Contador } from "./components/Contador";
import { Contador } from "./components/Contador";
import { ContadorHook } from "./components/ContadorHook";
const App = () => {
  return (
    <div>
      <h1>Introducción a Type Script with React</h1>
      <hr />
      {/* {<Contador />} */}
      {<ContadorHook/>}
    </div>
  );
};

export default App;