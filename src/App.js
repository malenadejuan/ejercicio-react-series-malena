import Formulario from "./Componentes/Formulario";
import ListadoSeries from "./Componentes/ListadoSeries";

function App() {
  return (
    <>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Mis series</h1>
        </header>
        <Formulario />
        <ListadoSeries />
      </div>
    </>
  );
}

export default App;
