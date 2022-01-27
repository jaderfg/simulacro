import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modificar from "../components/Modificar";
import Navbar from "../components/Navbar";
import Home from "../containers/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="modificar" element={<Modificar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
