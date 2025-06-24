"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
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
    setFormData({ name: "", email: "", telephone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-yellow-50 via-yellow-gray-300 to-yellow-50 py-20 px-6 md:px-12 lg:px-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Infos contact */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-lg p-10 space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-yellow-600">Contactez-nous</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Une question ? Un projet ? Contactez-nous, notre équipe vous répondra rapidement.
          </p>

          <div className="space-y-6 text-gray-800 text-lg">
            <div className="flex items-center space-x-4">
              <HiOutlineLocationMarker className="text-yellow-500 w-7 h-7 flex-shrink-0" />
              <span>Bâtisseurs, Libreville, Gabon</span>
            </div>
            <div className="flex items-center space-x-4">
              <HiOutlinePhone className="text-yellow-500 w-7 h-7 flex-shrink-0" />
              <a href="tel:+24166299416" className="hover:underline text-yellow-600 font-semibold">
                +241 66 29 94 16
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <HiOutlineMail className="text-yellow-500 w-7 h-7 flex-shrink-0" />
              <a href="mailto:contact@batirdemain.com" className="hover:underline text-yellow-600 font-semibold">
                contact@batirdemain.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-10 space-y-6"
        >
          {/* Nom */}
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer block w-full appearance-none border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-3 -translate-y-6 scale-75 transform text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Votre nom
            </label>
          </div>

          {/* Email */}
          <div className="relative z-0">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer block w-full appearance-none border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-3 -translate-y-6 scale-75 transform text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Votre email
            </label>
          </div>

          {/* Téléphone (optionnel) */}
          <div className="relative z-0">
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder=" "
              className="peer block w-full appearance-none border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="telephone"
              className="absolute left-0 top-3 -translate-y-6 scale-75 transform text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Téléphone (optionnel)
            </label>
          </div>

          {/* Message */}
          <div className="relative z-0">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder=" "
              className="peer block w-full appearance-none border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 resize-none focus:border-yellow-500 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-3 -translate-y-6 scale-75 transform text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Votre message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
          >
            Envoyer le message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
