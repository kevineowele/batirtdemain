// components/Catalogue.tsx
"use client";

import { motion } from "framer-motion";

const maisonsSimples = [
  "/images/maison1.jpg",
  "/images/maison2.jpg",
  "/images/maison3.jpg",
  "/images/maison4.jpg",
];

const duplex = [
  "/images/duplex1.jpg",
  "/images/duplex2.jpg",
  "/images/duplex3.jpg",
  "/images/duplex4.jpg",
];

export default function Catalogue() {
  return (
    <section id="catalogue" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-yellow-600 text-center mb-12"
        >
          Catalogue de nos réalisations
        </motion.h2>

        {/* Catégorie Maisons simples */}
        <div>
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Maisons simples et modernes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {maisonsSimples.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`Maison ${index + 1}`}
                  className="w-full h-60 object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Catégorie Duplex */}
        <div>
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Duplex</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {duplex.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`Duplex ${index + 1}`}
                  className="w-full h-60 object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
