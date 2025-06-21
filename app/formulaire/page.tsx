// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    houseType: "",
    rooms: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    // Ici, tu peux ajouter une requête API ou un traitement back-end
    alert("Merci pour votre demande !");
  };

  return (
    <section id="contact" className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 text-center">
          Demande devis 
clients
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="exemple@domaine.com"
            />
          </div>

          <div>
            <label htmlFor="houseType" className="block text-lg font-semibold mb-2">
              Type de maison
            </label>
            <select
              id="houseType"
              name="houseType"
              value={formData.houseType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="">Sélectionnez un type</option>
              <option value="Maison">Maison</option>
              <option value="Duplex">Duplex</option>
            </select>
          </div>

          <div>
            <label htmlFor="rooms" className="block text-lg font-semibold mb-2">
              Nombre de pièces
            </label>
            <input
              type="number"
              id="rooms"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              min="1"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Ex: 3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-xl text-lg transition duration-300"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}
