import React, { Fragment } from 'react'
import Gasto from '../components/Gasto'
import { revisarPresupuesto } from '../helpers/helpers'
import PropTypes from 'prop-types'


const Listado = ({gastos, presupuesto, restante}) => {

  return (
    <Fragment>
      <div>
        <h2 className="uk-text-center">Listado</h2>
        <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
          <ul className="uk-list uk-list-divider">
              { gastos.map(gasto => (
                <Gasto
                  key={gasto.id}
                  gasto={gasto}
                />
              ))}
          </ul>
          <div className="uk-alert-primary uk-padding-small" data-uk-alert>
              <p>Presupuesto: $ {presupuesto} </p>
          </div>
          <div className={revisarPresupuesto(presupuesto, restante)} data-uk-alert>
              <p>Restante: $ {restante} </p>
          </div>
        </div>
      </div>
    </Fragment>
  )

}

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
}


export default Listado;