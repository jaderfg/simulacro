import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getData } from "../helpers/getData";

const SportList = () => {
  const [deporte, setDeporte] = useState([]);
  const traerDatos = async () => {
    const datos = await getData();
    setDeporte(datos);
  };

  console.log(deporte);
  useEffect(() => {
    traerDatos();
  }, []);


  return (
    <div className="d-flex row justify-content-center">
      {deporte.map((deporte) => (
        <Card className="bg-dark text-white w-50 m-5 text-end" key={deporte.id}>
          <Card.Img src={deporte.imagen} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{deporte.nombre}</Card.Title>
            <Card.Text>Tipo de deporte: {deporte.tipo}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
};

export default SportList;
