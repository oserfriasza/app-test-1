import React from 'react'
import {useState} from 'react';

export const Contador = () => {
    const [valor, setValor]=useState(0);
    const acumulador=(numero:number)=>{
        setValor(valor+numero);
    }
    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button className="FicButton1"
                onClick={()=>acumulador(1)}
            >Sumar (+1)
            </button>
            &nbsp;
            <button className="FicButton2"
            onClick={()=>acumulador(-1)}
            >Restar (-1)</button>
        </div>
    )
}