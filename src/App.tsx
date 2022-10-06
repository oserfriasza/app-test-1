import React from "react";
/* import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from './typescript/TiposBasicos'; */
import {Contador} from './components/Contador';

const App = () => {
  return (
    <div>
      <h1>Introducción a Type Script with React</h1>
      <hr/>
      {<Contador/>}
    </div>
  );
};
export default App;
