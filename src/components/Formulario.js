import React, { Fragment, useState } from 'react'
import Swal from 'sweetalert2'
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

  // Definir el state
  const [ nombreGasto, guardarNombreGasto] = useState('');
  const [ cantidadGasto, guardarCantidadGasto] = useState(0);
  const [ error, guardarError ] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    // validar
    if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto.trim() === '') {
      guardarError(true);
      Swal.fire('Opps..', 'Los valores suministrados no son validos', 'warning');
      return;
    }

    // Si pasa la validación, construir el gasto
    guardarError(false);
    console.log(error);

    const gasto = {
      nombre: nombreGasto,
      cantidad: cantidadGasto,
      id: shortid.generate(),
    }

    // Pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // resetear el formulario
    guardarNombreGasto('');
    guardarCantidadGasto(0);

  }

  const agregarNombreGasto = (e) => {
    guardarNombreGasto(e.target.value)
  }

  const agregarCantidadGasto = (e) => {
    guardarCantidadGasto(parseInt(e.target.value, 10));
  }

  return (
    <Fragment>
      <div>
          <h2 className="uk-text-center">Agrega tus gastos aquí</h2>
          <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
            <form onSubmit={agregarGasto}>
              <div className="uk-margin">
                <label htmlFor="">Nombre gasto</label>
                <input
                  type="text"
                  className="uk-input"
                  value={nombreGasto}
                  onChange={agregarNombreGasto}
                />
              </div>
              <div className="uk-margin">
                <label htmlFor="">Cantidad gasto</label>
                <input
                  type="number"
                  className="uk-input"
                  value={cantidadGasto}
                  onChange={agregarCantidadGasto}
                />
              </div>

              <input
                type="submit"
                className="uk-button uk-button-primary uk-width-1-1@m"
                value="Agregar gasto"
              />
            </form>
          </div>
        </div>
    </Fragment>
  )



}

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;