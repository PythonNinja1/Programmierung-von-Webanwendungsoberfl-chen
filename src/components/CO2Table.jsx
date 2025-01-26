import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const initialData = [
  {
    country: "China",
    company: "China National Petroleum Corporation",
    emissions: 156,
  },
  {
    country: "Saudi-Arabien",
    company: "Saudi Aramco",
    emissions: 150,
  },
  {
    country: "Russland",
    company: "Gazprom",
    emissions: 130,
  },
  {
    country: "USA",
    company: "ExxonMobil",
    emissions: 98,
  },
  {
    country: "Indien",
    company: "Coal India",
    emissions: 87,
  },
  {
    country: "Mexiko",
    company: "Petróleos Mexicanos (Pemex)",
    emissions: 80,
  },
  {
    country: "Niederlande",
    company: "Shell",
    emissions: 75,
  },
  {
    country: "Großbritannien",
    company: "BP",
    emissions: 70,
  },
  {
    country: "USA",
    company: "Chevron Corporation",
    emissions: 65,
  },
  {
    country: "Venezuela",
    company: "PDVSA",
    emissions: 60,
  },
  {
    country: "Iran",
    company: "National Iranian Oil Company",
    emissions: 58,
  },
  {
    country: "Kanada",
    company: "Suncor Energy",
    emissions: 55,
  },
  {
    country: "USA",
    company: "ConocoPhillips",
    emissions: 52,
  },
  {
    country: "China",
    company: "Sinopec Group",
    emissions: 50,
  },
  {
    country: "Brasilien",
    company: "Petrobras",
    emissions: 48,
  },
  {
    country: "Frankreich",
    company: "TotalEnergies",
    emissions: 45,
  },
  {
    country: "Australien",
    company: "BHP Group",
    emissions: 42,
  },
  {
    country: "Norwegen",
    company: "Equinor",
    emissions: 40,
  },
  {
    country: "USA",
    company: "Marathon Petroleum",
    emissions: 38,
  },
  {
    country: "Russland",
    company: "Rosneft",
    emissions: 36,
  },
  {
    country: "Italien",
    company: "Eni",
    emissions: 34,
  },
  {
    country: "Vereinigte Arabische Emirate",
    company: "Abu Dhabi National Oil Company (ADNOC)",
    emissions: 32,
  },
  {
    country: "Kuwait",
    company: "Kuwait Petroleum Corporation",
    emissions: 28,
  },
  {
    country: "Katar",
    company: "QatarEnergy",
    emissions: 26,
  },
  {
    country: "Algerien",
    company: "Sonatrach",
    emissions: 24,
  },
  {
    country: "Irak",
    company: "Iraq National Oil Company",
    emissions: 22,
  },
  {
    country: "Kasachstan",
    company: "KazMunayGas",
    emissions: 18,
  },
  {
    country: "Kolumbien",
    company: "Ecopetrol",
    emissions: 16,
  },
  {
    country: "Malaysia",
    company: "Petronas",
    emissions: 15,
  },
  {
    country: "Libyen",
    company: "National Oil Corporation (Libya)",
    emissions: 14,
  },
  {
    country: "Polen",
    company: "PKN Orlen",
    emissions: 13,
  },
  {
    country: "Thailand",
    company: "PTT Public Company Limited",
    emissions: 12,
  },
  {
    country: "Spanien",
    company: "Repsol",
    emissions: 9,
  },
  {
    country: "Südkorea",
    company: "Korea National Oil Corporation",
    emissions: 8,
  },
  {
    country: "Oman",
    company: "Petroleum Development Oman",
    emissions: 7,
  },
  {
    country: "Türkei",
    company: "Turkish Petroleum Corporation",
    emissions: 6,
  },
  {
    country: "Angola",
    company: "Sonangol Group",
    emissions: 5,
  },
  {
    country: "Deutschland",
    company: "Wintershall Dea",
    emissions: 4,
  },
];

// Spaltendefinitionen für die Tabelle
const columns = [
  {
    Header: "Land",
    accessor: "country",
    // Benutzerdefinierte Zelle für die Spalte "Land" mit speziellem Styling
    Cell: ({ value }) => (
      <span className="font-medium text-primary">{value}</span>
    ),
  },
  {
    Header: "Unternehmen",
    accessor: "company",
  },
  {
    Header: "CO2-Emissionen",
    accessor: "emissions",
    // Benutzerdefinierte Zelle für die Spalte "CO2-Emissionen" mit speziellem Styling
    Cell: ({ value }) => (
      <span className="font-semibold text-primary">{value}</span>
    ),
  },
];

/**
 * CO2Table-Komponente - Zeigt eine Tabelle mit CO2-Emissionsdaten an.
 *
 * @returns {JSX.Element} Die CO2Table-Komponente.
 */
const CO2Table = () => {
  // Zustand für die Daten der Tabelle, initialisiert mit initialData
  const [data, setData] = useState(initialData);
  // Zustand für die Filterwerte, initialisiert mit leeren Strings für Land und Unternehmen
  const [filters, setFilters] = useState({ country: "", company: "" });

  /**
   * Validiert die Eingabe für die Filter.
   * Ersetzt alle Zeichen, die keine Buchstaben, Zahlen oder Leerzeichen sind, durch einen leeren String.
   *
   * @param {string} input - Der zu validierende Eingabestring.
   * @returns {string} Der validierte Eingabestring.
   */
  const validateInput = (input) => input.replace(/[^a-zA-Z0-9\s]/g, "");

  /**
   * Behandelt Änderungen an den Filter-Eingabefeldern.
   * Aktualisiert den Filterzustand und filtert die Daten entsprechend.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Das Change-Event-Objekt.
   */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // Validiert die Eingabe, bevor der Zustand aktualisiert wird
    const sanitizedValue = validateInput(value);

    // Aktualisiert den Filterzustand mit dem neuen Wert
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: sanitizedValue,
    }));

    // Filtert die Daten basierend auf den aktuellen Filterwerten
    const filteredData = initialData.filter((item) => {
      return (
        item.country
          .toLowerCase()
          .includes(
            name === "country" ? sanitizedValue.toLowerCase() : filters.country
          ) &&
        item.company
          .toLowerCase()
          .includes(
            name === "company" ? sanitizedValue.toLowerCase() : filters.company
          )
      );
    });

    // Aktualisiert den Datenzustand mit den gefilterten Daten
    setData(filteredData);
  };

  // Erstellt die Tabelleninstanz mit useTable und aktiviert die Sortierung mit useSortBy
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className=" ">
      {/* Überschrift */}
      <h1 className="text-xl md:text-3xl font-bold mb-4">CO2-Emissionsdaten</h1>

      {/* Filter-Eingabefelder */}
      <div className="mb-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <input
          type="text"
          name="country"
          placeholder="Filter nach Land"
          value={filters.country}
          onChange={handleFilterChange}
          className="border border-gray-300 flex-1 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <input
          type="text"
          name="company"
          placeholder="Filtern nach Unternehmen"
          value={filters.company}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg flex-1 p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      {/* Tabelle */}
      <div className="max-w-full w-full overflow-auto !mt-6">
        <table
          {...getTableProps()}
          className={`table-auto w-full $border-collapse`}
        >
          {/* Tabellenkopf */}
          <thead className="bg-gray-800 text-white !py-4">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.getHeaderGroupProps().key}>
                {headerGroup.headers.map((column) => {
                  // Extrahiert den Schlüssel separat, um eine Warnung im Zusammenhang mit den Eigenschaften zu vermeiden
                  const { key, ...rest } = column.getHeaderProps(
                    column.getSortByToggleProps()
                  );
                  return (
                    <th
                      key={key}
                      {...rest}
                      className="py-4 px-6 font-medium text-sm uppercase tracking-wider"
                    >
                      <div className="flex items-center space-x-2">
                        {/* Spaltenüberschrift */}
                        <span>{column.render("Header")}</span>
                        {/* Sortiersymbol */}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FaSortDown />
                            ) : (
                              <FaSortUp />
                            )
                          ) : (
                            <FaSort />
                          )}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          {/* Tabellenkörper */}
          <tbody
            {...getTableBodyProps()}
            className="divide-y divide-gray-200 text-sm"
          >
            {rows.length > 0 ? (
              rows.map((row) => {
                prepareRow(row);
                // Extrahiert den Schlüssel separat, um eine Warnung im Zusammenhang mit den Eigenschaften zu vermeiden
                const { key, ...rest } = row.getRowProps();
                return (
                  <tr
                    key={key}
                    {...rest}
                    className="hover:bg-gray-200 transition-colors odd:bg-gray-50 even:bg-white "
                  >
                    {row.cells.map((cell) => {
                      // Extrahiert den Schlüssel separat, um eine Warnung im Zusammenhang mit den Eigenschaften zu vermeiden
                      const { key: cellKey, ...cellProps } =
                        cell.getCellProps();
                      return (
                        <td
                          key={cellKey}
                          {...cellProps}
                          className="py-4 px-6 text-gray-700"
                        >
                          {/* Zelleninhalt */}
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              // Zeigt eine "Keine Daten"-Nachricht an, wenn die Tabelle leer ist
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-3 px-6 text-center text-gray-500"
                >
                  Keine Daten.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CO2Table;
