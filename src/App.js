import React, { useState, useEffect } from 'react';
import Presupuesto from '../src/components/Presupuesto';
import Formulario from '../src/components/Formulario';
import Listado from '../src/components/Listado';

function App() {

  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [pregunta, mostrarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);


  useEffect(() => {

    // Agrega el nuevo presupuesto
    if(crearGasto) {
      guardarGastos([
        ...gastos,
        gasto
      ])
    }

    // Actualiza el presupuesto restante
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);
    guardarCrearGasto(false);
    // eslint-disable-next-line
  }, [gasto]);


  return (
    <div className="App">
      <div className="uk-container">
        <h1 className="uk-text-center uk-padding">React - Gasto semanal</h1>

        { pregunta ?
          (
            <Presupuesto
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              mostrarPregunta={mostrarPregunta}
            />
          ) :
          (
            <div className="uk-child-width-1-2@m uk-grid-small" data-uk-grid>
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
              <Listado
                gastos={gastos}
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
