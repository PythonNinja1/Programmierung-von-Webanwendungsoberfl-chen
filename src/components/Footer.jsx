import { Link } from "react-router-dom";

/**
 * Footer-Komponente für die Anwendung.
 *
 * @returns {JSX.Element} Die Footer-Komponente.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 px-4">
      {/* Copyright-Hinweis */}
      <p>© 2025 CO2-Footprint</p>

      {/* Links zu Datenschutz und Nutzungsbedingungen */}
      <p className="mt-2">
        <Link to="privacy-policy" className="text-secondary hover:underline">
          Datenschutzerklärung
        </Link>{" "}
        |{" "}
        <Link to="terms-of-service" className="text-secondary hover:underline">
          Nutzungsbedingungen
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
