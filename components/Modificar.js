import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getData, url } from "../helpers/getData";
import "../styles/modificar.css";
import Formulario from "./Formulario";

const Modificar = () => {
  const [deporte, setDeporte] = useState([]);

  const traerDatos = async () => {
    const datos = await getData();
    setDeporte(datos);
  };

  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then(getData())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    traerDatos();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr className="espaciado">
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo de deporte</th>
            <th>Imagen</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody>
          {deporte.map((dep) => (
            <tr key={dep.id}>
              <td>
                <h4>{dep.id}</h4>
              </td>
              <td>
                <h4>{dep.nombre}</h4>
              </td>
              <td>
                <h4>{dep.tipo}</h4>
              </td>
              <td>
                <img src={dep.imagen} alt="deporte" />
              </td>
              <td>
                <Button onClick={() => deleteData(dep.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Formulario />
      </div>
    </div>
  );
};

export default Modificar;
