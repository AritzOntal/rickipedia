import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* BARRA DE NAVEGACIÓN */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          🛸 Inicio / Wiki Rick & Morty
        </Link>
      </nav>

      {/* CONTENIDO CAMBIANTE (Rutas) */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;