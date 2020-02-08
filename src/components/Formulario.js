import React, { useState} from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from 'prop-types';


const Formulario = ({ guardarGasto, guardarCrear }) => {
  const [nombre, guardarNombre] = useState(" ");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();

    //validar form
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    //construir el gasto

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    };

    //pasar al comp. principal
    guardarGasto(gasto);

    guardarCrear(true);
    //resetear form

    guardarNombre(" ");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej.Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad de gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 500"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propTypes ={
  guardarGasto: PropTypes.func.isRequired,
  guardarCrear: PropTypes.func.isRequired
}

export default Formulario;
