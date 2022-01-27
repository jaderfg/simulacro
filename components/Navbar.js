import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-dark text-white d-flex justify-content-between align-items-center">
      <Link to="/" className="text-decoration-none text-white">
        <h1>Deportes</h1>
      </Link>
      <Link to="modificar">
        <Button>Modificar</Button>
      </Link>
    </div>
  );
};

export default Navbar;
