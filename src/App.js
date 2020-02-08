import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, almacenarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrear] = useState(false);
 

  //actualiza restante
  useEffect(() =>{
    if(crearGasto){
      almacenarGastos(
        [...gastos, gasto]);
      
        guardarCrear(false);
      }
const presupuestoRestante = restante - gasto.cantidad;
guardarRestante(presupuestoRestante);
       

}, [gasto, crearGasto, gastos])



  return (
    <div className="container">
      <header>
        <h1>Presupuesto semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        {mostrarPregunta ? (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario guardarGasto={guardarGasto}
              guardarCrear={guardarCrear} />
            </div>

            <div className="one-half column">
              <Listado gastos={gastos}
              
               />

              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
                
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
