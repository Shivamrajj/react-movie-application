import { Link } from "react-router-dom";
import "../css/Navbar.css"
import "../css/style.css"
import { useState, useEffect } from "react";

function NavBar() {
     const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" )

     useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
        } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>

        { <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
         {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button> }
    </nav>
}

export default NavBar