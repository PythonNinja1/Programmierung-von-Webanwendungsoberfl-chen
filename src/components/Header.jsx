import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * Header-Komponente für die Anwendung.
 *
 * @param {object} props - Die Eigenschaften der Komponente.
 * @param {function} props.toggleMenu - Eine Funktion zum Ein-/Ausschalten des Menüs.
 * @returns {JSX.Element} Die Header-Komponente.
 */
const Header = ({ toggleMenu }) => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo und Titel */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" className=" w-14 h-14 mt-1" alt="Logo" />
          <h1 className="text-xl md:text-3xl font-bold">CO2-Footprint</h1>
        </div>

        {/* Navigationsleiste (versteckt auf kleinen Bildschirmen) */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="." className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            Über uns
          </Link>
          <Link to="/contact" className="hover:underline">
            Kontakt
          </Link>
        </nav>

        {/* Menü-Button (nur auf kleinen Bildschirmen sichtbar) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white text-2xl"
          aria-label="Menü ein-/ausschalten"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
