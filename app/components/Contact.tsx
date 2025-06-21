// components/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", formData);
    alert("Merci pour votre message !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gray-600 py-16 px-6 md:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Infos contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-white">
            Une question ? Un projet ? Contactez-nous, notre équipe vous répondra rapidement.
          </p>
          <div className="space-y-4 text-white">
            <p>
              <strong>Adresse :</strong> Bâtisseurs, Libreville, Gabon
            </p>
            <p>
              <strong>Téléphone :</strong>{" "}
              <a
                href="tel:+241600000000"
                className="text-yellow-500 hover:underline"
              >
                +241 66 29 94 16 

              </a>
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:contact@batirdemain.com"
                className="text-yellow-500 hover:underline"
              >
                contact@batirdemain.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl shadow-md"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Nom complet"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Votre email
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
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Votre message ici..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-xl text-lg transition duration-300"
          >
            Envoyer le message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
