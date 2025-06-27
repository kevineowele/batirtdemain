"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    houseType: "",
    rooms: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const confirmSend = window.confirm(
      "Voulez-vous envoyer cette demande par WhatsApp ? Vous serez redirigé(e) vers WhatsApp."
    );
    if (!confirmSend) return;

    setIsSubmitting(true);

    const message = `Bonjour, je souhaite un devis pour une maison.\n\nNom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\nType de maison : ${formData.houseType}\nNombre de pièces : ${formData.rooms}\n\nMessage complémentaire : ${formData.message || "N/A"}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "24166299416"; // Numéro WhatsApp (Gabon)

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      houseType: "",
      rooms: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-10 shadow-xl border border-gray-200 rounded-3xl p-10 bg-gradient-to-br from-yellow-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 text-center">
          Demande de devis
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                placeholder="Votre nom complet"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                placeholder="exemple@email.com"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="^[0-9+\s]{6,15}$"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                placeholder="+241 66 29 94 16"
              />
            </div>

            {/* Type de maison */}
            <div>
              <label htmlFor="houseType" className="block text-lg font-medium mb-2">
                Type de maison
              </label>
              <select
                id="houseType"
                name="houseType"
                value={formData.houseType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
              >
                <option value="">Sélectionnez un type</option>
                <option value="Maison">Maison</option>
                <option value="Duplex">Duplex</option>
              </select>
            </div>

            {/* Nombre de pièces */}
            <div>
              <label htmlFor="rooms" className="block text-lg font-medium mb-2">
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                placeholder="Ex: 3"
              />
            </div>
          </div>

          {/* Message complémentaire */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Commentaire complémentaire (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
              placeholder="Vous pouvez ajouter des précisions sur votre demande..."
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-2xl text-xl transition duration-300 disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 .396C7.17.396.004 7.562.004 16.396c0 2.884.75 5.72 2.17 8.215L.06 32l7.507-2.08a16.078 16.078 0 007.432 1.874h.001c8.832 0 16-7.166 16-16.004 0-8.83-7.168-15.996-16-15.996zm0 29.604a13.15 13.15 0 01-6.605-1.767l-.472-.28-4.455 1.233 1.192-4.348-.305-.5a13.114 13.114 0 01-2.018-6.986c0-7.243 5.895-13.134 13.134-13.134 3.51 0 6.805 1.368 9.282 3.846a13.104 13.104 0 013.85 9.284c-.002 7.243-5.895 13.152-13.13 13.152zm7.19-9.615c-.394-.197-2.33-1.152-2.69-1.282-.36-.132-.624-.197-.89.197-.262.39-1.02 1.283-1.25 1.547-.23.262-.46.296-.854.1-.394-.197-1.664-.612-3.17-1.95-1.172-1.048-1.964-2.34-2.196-2.73-.23-.394-.025-.607.173-.804.178-.177.394-.46.59-.69.197-.23.262-.394.394-.656.132-.262.066-.492-.033-.69-.1-.197-.89-2.144-1.22-2.933-.32-.773-.647-.667-.89-.68-.23-.01-.492-.012-.754-.012-.262 0-.69.1-1.05.492s-1.38 1.348-1.38 3.292c0 1.944 1.415 3.82 1.61 4.09.197.262 2.78 4.24 6.744 5.942.944.406 1.68.65 2.25.83.946.3 1.806.258 2.49.157.76-.113 2.33-.95 2.662-1.867.33-.917.33-1.703.23-1.867-.1-.163-.36-.26-.754-.456z" />
            </svg>
            {isSubmitting ? "Envoi en cours..." : "Envoyer la demande via WhatsApp"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Vous recevrez une réponse rapide par WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
