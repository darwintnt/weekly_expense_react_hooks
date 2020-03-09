import React, { Fragment, useState } from 'react'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'


const Presupuesto = ({guardarPresupuesto, guardarRestante, mostrarPregunta}) => {

  // Definir el state
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ error, guardarError ] = useState(false);

  //  Función que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10))
  }

  //  Función que define el presupuesto
  const agregarPresupuesto = (e) => {

    e.preventDefault();
    // validar
    if(cantidad < 1 || isNaN( cantidad )) {
      guardarError(true);
      Swal.fire('Opps..', 'La cantidad suministrada no es valida', 'warning');
      return;
    }

    // Si pasa la validación
    guardarError(false);
    console.log(error);

    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    mostrarPregunta(false);

  }

  return (
    <Fragment>
      <div className="uk-child-width-1-1@m">
        <h2 className="uk-text-center">Coloca tu presupuesto</h2>
        <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
        <form onSubmit={ agregarPresupuesto }>
          <div className="uk-margin">
            <input
              type="number"
              className="uk-input"
              placeholder="Ingresa tu presupuesto"
              onChange={ definirPresupuesto }
            />
          </div>
          <input
            type="submit"
            className="uk-button uk-button-primary uk-width-1-1@m"
            value="Definir presupuesto"
          />
        </form>
        </div>
      </div>
    </Fragment>
  )

}

Presupuesto.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  mostrarPregunta: PropTypes.func.isRequired,
}


export default Presupuesto;