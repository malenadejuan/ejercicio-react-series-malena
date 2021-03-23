import { useState } from "react";

const Formulario = () => {
  const [listadoSeries, setlistadoSeries] = useState([]);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoAnyo, setNuevoAnyo] = useState("");

  const escribe = e => {
    if (e.target.id === "nombre") {
      setNuevoNombre(e.target.value);
    } else {
      setNuevoAnyo(e.target.value);
    }
  };

  const anyadePeli = e => {
    e.preventDefault();
    if (!listadoSeries.includes(nuevoNombre)) {
    }
  };

  return (
    <section className="crear-serie row">
      <form className="col" onSubmit={anyadePeli}>
        <div className="form-group row align-items-center">
          <label htmlFor="nombre" className="col-2">Nombre: </label>
          <input type="text" className="form-control col-6" id="nombre" onChange={escribe} />
          <label htmlFor="anyo" className="col-1">Año: </label>
          <input type="number" className="form-control col" id="anyo" onChange={escribe} />
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="plataforma" className="col-2">Plataforma: </label>
          <select id="plataforma" className="form-control col">
            <option value="">Selecciona plataforma</option>
            <option value="Netflix">Netflix</option>
            <option value="HBO">HBO</option>
            <option value="Prime">Prime</option>
            <option value="Filmin">Filmin</option>
          </select>
          <button className="btn btn-info col-2" type="submit">Añadir serie</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
