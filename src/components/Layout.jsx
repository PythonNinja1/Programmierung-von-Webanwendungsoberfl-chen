import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

/**
 * Layout-Komponente für die gesamte Anwendung.
 *
 * @param {object} props - Die Eigenschaften der Komponente.
 * @param {boolean} props.isRTL - Gibt an, ob die Anwendung von rechts nach links angezeigt werden soll.
 * @returns {JSX.Element} Das Layout der Anwendung.
 */
const Layout = ({ isRTL }) => {
  // Zustand, der angibt, ob das Menü geöffnet ist.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Schaltet das Menü ein/aus.
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* Kopfzeile der Anwendung */}
      <Header toggleMenu={toggleMenu} />

      {/* Hauptinhalt der Anwendung */}
      <main className="flex flex-1">
        {/* Menü der Anwendung */}
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} isRTL={isRTL} />

        {/* Inhalt der aktuellen Route, gerendert durch react-router-dom */}
        <div className="flex-1 p-4 md:p-8 w-full">
          <Outlet />
        </div>
      </main>

      {/* Fußzeile der Anwendung */}
      <Footer />
    </div>
  );
};

export default Layout;
