import Serie from "./Serie";
import TotalSeries from "./TotalSeries";

const ListadoSeries = () => {
  return (
    <section className="listado">
      <TotalSeries />
      <ul className="series">
        <Serie />
      </ul>
    </section>
  );
};

export default ListadoSeries;
