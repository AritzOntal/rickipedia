import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import {Detail} from "./pages/Detail";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      {/* BARRA DE NAVEGACIÓN */}
      <Navbar />

      {/* CONTENIDO CAMBIANTE (Rutas) */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Sin este BrowseRouter las etiquetas Link y Routes nunca funcionarán