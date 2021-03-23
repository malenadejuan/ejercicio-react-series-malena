import { useCallback, useState } from "react";

const useFetch = () => {
  const [serie, setSerie] = useState(null);
  const pedirSerie = useCallback(url => {
    fetch(url)
      .then(resp => resp.json)
      .then(datosAPI => setSerie(datosAPI));
  }, []);
};

export default useFetch;
