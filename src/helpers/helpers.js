export const revisarPresupuesto = (presupuesto, restante) => {

  let clase;

  if( (presupuesto / 4) > restante) {
    clase = 'uk-alert-danger uk-padding-small';
  } else if ( (presupuesto / 2) > restante ) {
    clase = 'uk-alert-warning uk-padding-small';
  } else {
    clase = 'uk-alert-success uk-padding-small';
  }

  return clase;


}