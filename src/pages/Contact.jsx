import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Kontakt</h1>
      <p className="text-text mb-4">
        Wir schätzen Ihr Feedback und Ihre Anfragen. Bitte zögern Sie nicht,
        sich über das untenstehende Kontaktformular oder per E-Mail an uns zu
        wenden.
      </p>

      <form className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-text font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Ihr Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text font-medium mb-2">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Ihre E-Mail"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-text font-medium mb-2">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Ihre Nachricht"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-secondary hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Nachricht senden
        </button>
      </form>

      <div className="mt-8">
        <p className="text-text">
          Alternativ können Sie uns direkt eine E-Mail senden an:{" "}
          <a href="mailto:info@example.com" className="text-secondary">
            info@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
