import React, { Fragment } from 'react'
import PropTypes from 'prop-types'



const Gasto = ({gasto}) => {

  return (
    <Fragment>
      <li className="uk-flex uk-flex-around">
        <p>{gasto.nombre}</p>
        <span className="uk-badge">$ {gasto.cantidad}</span>
      </li>
    </Fragment>
  )

}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
}


export default Gasto;