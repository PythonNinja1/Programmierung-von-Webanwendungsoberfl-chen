# CO2-Emissionsdaten Webseite

Diese Dokumentation bietet eine schrittweise Anleitung zum Einrichten und Ausführen des Projekts, einschließlich der Strukturierung von Ordnern, dem Hinzufügen von Komponenten, Seiten und der Konfiguration des Routings.

## **Einrichtungsanweisungen**

### 1. **Abhängigkeiten installieren**

Stelle sicher, dass alle erforderlichen Abhängigkeiten installiert sind:

```bash
npm install
```

### 2. **Anwendung ausführen**

Starte den Entwicklungsserver:

```bash
npm run dev
```

### 3. **Ordnerstruktur**

Die Projektordnerstruktur ist wie folgt organisiert:

```
REACT-TAILWIND-APP/
├── node_modules/
├── public/
│   ├── logo.png  # Projektlogo
├── src/
│   ├── assets/
│   │   ├── react.svg  # Platzhalter React SVG-Datei
│   ├── components/
│   │   ├── CO2Table.jsx  # Zeigt die CO2-Emissionstabelle an
│   │   ├── Footer.jsx  # Footer-Komponente
│   │   ├── Header.jsx  # Header-Komponente mit Logo
│   │   ├── Layout.jsx  # Gemeinsame Layout-Komponente mit Navigation
│   │   ├── Menu.jsx  # Menü-Komponente für die Navigation
│   ├── pages/
│   │   ├── About.jsx  # Über-Seite
│   │   ├── Contact.jsx  # Kontakt-Seite
│   │   ├── PrivacyPolicyPage.jsx  # Datenschutzrichtlinien-Seite
│   │   ├── TermsOfService.jsx  # Nutzungsbedingungen-Seite
│   ├── App.jsx  # Haupt-App-Komponente
│   ├── index.css  # Globale CSS-Stile
│   └── main.jsx  # Einstiegspunkt der Anwendung
├── index.html  # Basis-HTML-Vorlage
├── package.json  # Abhängigkeiten und Skripte
├── README.md  # Projektdokumentation
├── tailwind.config.js  # Tailwind CSS-Konfiguration
├── vite.config.js  # Vite-Konfiguration
```

### 4. **Wo Komponenten hinzugefügt werden**

- **Komponenten-Ordner**: Füge wiederverwendbare Komponenten im Ordner `src/components/` hinzu. Beispiele sind `Header.jsx`, `Footer.jsx`, `Menu.jsx` und `CO2Table.jsx`.

- **Hinzufügen einer neuen Komponente**:

  - Erstelle eine neue `.jsx`-Datei im `components`-Ordner (z. B. `NewComponent.jsx`).
  - Verwende die Komponente dort, wo sie benötigt wird, indem du sie in die erforderliche Datei importierst.

### 5. **Wo Seiten hinzugefügt werden**

- **Seiten-Ordner**: Füge einzelne Seiten im Ordner `src/pages/` hinzu.

  - Beispiel: `About.jsx`, `Contact.jsx` usw.

- **Hinzufügen einer neuen Seite**:

  - Erstelle eine neue Datei im Ordner `src/pages/` (z. B. `NewPage.jsx`):

  ```jsx
  const NewPage = () => (
    <div>
      <h1>Neue Seite</h1>
    </div>
  );
  export default NewPage;
  ```

  - Verknüpfe sie mit dem Routing in `App.jsx` (siehe unten).

### 6. **Seiten zum Routing hinzufügen**

Konfiguriere in `App.jsx` das Routing für neue Seiten:

- Importiere die neue Seite:

  ```jsx
  import NewPage from "./pages/NewPage";
  ```

- Füge eine neue Route innerhalb des `<Routes>`-Blocks hinzu:

  ```jsx
  <Route path="new-page" element={<NewPage />} />
  ```

- Um die Navigation zu ermöglichen, füge einen Link in `Menu.jsx` hinzu:

  ```jsx
  <li>
    <Link to="/new-page">Neue Seite</Link>
  </li>
  ```

### 7. **Gemeinsames Layout**

Die Komponente `Layout.jsx` bietet eine gemeinsame Struktur für alle Seiten. Sie beinhaltet:

- **Header**: Zeigt das Logo und den Umschalter für das Navigationsmenü an.
- **Menu**: Enthält Navigationslinks.
- **Footer**: Footer-Inhalt.
- Outlet: Platzhalter zum Rendern spezifischer Seiteninhalte basierend auf der Route.

Beispiel `Layout.jsx`:

```jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ isRTL }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <Header toggleMenu={toggleMenu} />
      <main className="flex flex-1">
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} isRTL={isRTL} />
        <div className="flex-1 p-4 md:p-8 w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

### 8. **Testen der Anwendung**

- Starte den Entwicklungsserver:

  ```bash
  npm run dev
  ```

- Öffne die Anwendung in einem Browser.

- Navigiere zwischen den Seiten und überprüfe:

  - Header, Footer und Menü sind konsistent.
  - Navigationslinks funktionieren korrekt.
  - Der Inhalt jeder Seite wird korrekt angezeigt.

Du kannst das Setup gerne erweitern oder neue Funktionen hinzufügen, indem du der bereitgestellten Struktur und den Beispielen folgst.
