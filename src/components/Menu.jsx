import React from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * Menü-Komponente für die Anwendung.
 *
 * @param {object} props - Die Eigenschaften der Komponente.
 * @param {boolean} props.isOpen - Gibt an, ob das Menü geöffnet ist.
 * @param {function} props.toggleMenu - Eine Funktion zum Ein-/Ausschalten des Menüs.
 * @param {boolean} props.isRTL - Gibt an, ob die Anwendung von rechts nach links angezeigt werden soll.
 * @returns {JSX.Element} Die Menü-Komponente.
 */
const Menu = ({ isOpen, toggleMenu, isRTL }) => {
  return (
    <aside
      className={`fixed md:static top-0 ${
        isRTL ? "right-0" : "left-0" // Positionierung abhängig von der Textrichtung (RTL oder LTR)
      } h-full md:h-auto w-64 bg-gray-800 text-white p-6 shadow-lg z-50 transform ${
        isOpen
          ? "translate-x-0" // Menü ist sichtbar, keine Transformation
          : isRTL
          ? "translate-x-full" // Menü ist versteckt, nach rechts verschoben (RTL)
          : "-translate-x-full" // Menü ist versteckt, nach links verschoben (LTR)
      } transition-transform duration-300 ease-in-out md:translate-x-0`} // Sanfte Animation beim Öffnen/Schließen
    >
      {/* Menü schließen Button (nur auf kleinen Bildschirmen sichtbar) */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white text-2xl md:hidden"
        aria-label="Menü schließen"
      >
        <FaTimes />
      </button>

      {/* Menüpunkte */}
      <ul className={`space-y-3  ${isOpen && "mt-6"}`}>
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center gap-3 space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FaInfoCircle />
            <span>Über uns</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="flex items-center gap-3 space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FaEnvelope />
            <span>Kontakt</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
