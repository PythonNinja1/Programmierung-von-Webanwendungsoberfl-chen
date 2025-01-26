import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import TermsOfService from "./pages/TermsOfService";
import CO2Table from "./components/CO2Table";

/**
 * Die Hauptkomponente der Anwendung.
 * Verwaltet das Routing und die Erkennung der Textrichtung (RTL).
 *
 * @returns {JSX.Element} Die App-Komponente.
 */
const App = () => {
  /**
   * State-Variable, die angibt, ob die Textrichtung Right-to-Left (RTL) ist.
   * @type {boolean}
   */
  const [isRTL, setIsRTL] = useState(false);

  /**
   * Hook, der beim Mounten der Komponente ausgeführt wird.
   * Erkennt die Textrichtung des Browsers und aktualisiert `isRTL`.
   */
  useEffect(() => {
    /**
     * Funktion zur Erkennung der Textrichtung (RTL).
     *
     * @returns {boolean} True, wenn die Textrichtung RTL ist, sonst False.
     */
    const detectRTL = () => {
      // Die Sprache des Browsers oder des Benutzers abrufen.
      const browserLanguage = navigator.language || navigator.userLanguage;

      try {
        // Versuchen, ein Intl.Locale-Objekt zu erstellen, um die Textrichtung zu erhalten.
        // Intl.Locale bietet Informationen zu einer bestimmten Region (z.B. Sprache, Region, Textrichtung).
        const locale = new Intl.Locale(browserLanguage);
        // `locale.textInfo.direction` gibt "rtl" für Right-to-Left oder "ltr" für Left-to-Right zurück.
        return locale.textInfo.direction === "rtl";
      } catch (error) {
        // Fehlermeldung ausgeben, falls Intl.Locale nicht unterstützt wird.
        console.log("Intl.Locale is not supported in this environment.");
        // Standardmäßig False zurückgeben (LTR).
        return false;
      }
    };

    // Die Textrichtung erkennen und den State aktualisieren.
    setIsRTL(detectRTL());
  }, []); // Leeres Abhängigkeitsarray, damit der Effekt nur einmal beim Mounten ausgeführt wird.

  return (
    /**
     * BrowserRouter-Komponente für das clientseitige Routing.
     * Stellt den Routing-Kontext für die gesamte Anwendung bereit.
     */
    <Router>
      {/* Routenkonfiguration */}
      <Routes>
        {/* Hauptroute, die das Layout und die untergeordneten Routen rendert */}
        <Route path="/" element={<Layout isRTL={isRTL} />}>
          {/* Index-Route, die die CO2Table-Komponente rendert */}
          <Route index element={<CO2Table />} />
          {/* Route für die "Über uns"-Seite */}
          <Route path="about" element={<About />} />
          {/* Route für die Kontaktseite */}
          <Route path="contact" element={<Contact />} />
          {/* Route für die Datenschutzrichtlinie */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          {/* Route für die Nutzungsbedingungen */}
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
