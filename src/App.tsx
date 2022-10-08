import React from "react";
// import { Contador } from "./components/Contador";
// import { Contador } from "./components/Contador";
// import { ContadorHook } from "./components/ContadorHook";
import { Login } from "./components/Login";
//?Duda de este codigo
const initialState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}


//?Duda de este codigo
const App = () => {
  return (
    <div>
      <h1>Introducción a Type Script with React</h1>
      <hr />
      {/* {<Contador />} */}
      {/* {<ContadorHook/>} */}
      {<Login/>}
    </div>
  );
};

export default App;