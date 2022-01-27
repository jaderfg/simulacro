import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { fileUpload } from "../helpers/fileUpload";
import axios from "axios";
import { url } from "../helpers/getData";

const Formulario = () => {
  const [deporte, setDeporte] = useState({
    nombre: "",
    tipo: "",
    imagen: "",
  });

  const { nombre, tipo } = deporte;

  const handleChange = ({ target }) => {
    setDeporte({
      ...deporte,
      [target.name]: target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((resp) => (deporte.imagen = resp))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = () => {
    axios
      .post(url, deporte)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Escribe el nombre" onChange={handleChange} name="nombre" value={nombre} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tipo de deporte</Form.Label>
        <Form.Control type="text" placeholder="Escribe el tipo de deporte" onChange={handleChange} name="tipo" value={tipo} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Elige la imagen</Form.Label>
        <Form.Control type="file" placeholder="Escribe el tipo de deporte" name="imagen" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Formulario;
