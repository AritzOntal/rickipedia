import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">🛸 Inicio</Link>
        </nav>
    );
};