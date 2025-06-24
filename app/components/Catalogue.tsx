"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const maisonsSimples = [
  {
    src: "/images/maison1.1.jpg",
    title: "Maison Moderne 1",
    description: "Maison contemporaine avec 3 chambres et grand séjour.",
  },
  {
    src: "/images/maison3.jpg",
    title: "Maison Moderne 2",
    description: "Maison familiale avec jardin et terrasse.",
  },
  {
    src: "/images/maison4.jpg",
    title: "Maison Style Classique",
    description: "Maison traditionnelle avec finitions haut de gamme.",
  },
  {
    src: "/images/maisonsim1.jpg",
    title: "Villa de Luxe",
    description: "Villa spacieuse avec piscine et espace détente.",
  },
  {
    src: "/images/maisonsim2.jpg",
    title: "Maison Écologique",
    description: "Maison construite avec des matériaux durables.",
  },
  
  
  
];

const duplex = [
  {
    src: "/images/chantier.png",
    title: "Duplex en construction",
    description: "Projet en cours de finition.",
  },
  {
    src: "/images/maison22.jpg",
    title: "Duplex Moderne",
    description: "Duplex lumineux avec cuisine ouverte.",
  },
  {
    src: "/images/maison23.jpg",
    title: "Duplex Design",
    description: "Architecture contemporaine et grandes baies vitrées.",
  },
  {
    src: "/images/maison24.jpg",
    title: "Grand Duplex",
    description: "4 chambres, 2 salons, et garage.",
  },
  
];

export default function Catalogue() {
  const [selected, setSelected] = useState<{ src: string; title: string; description: string } | null>(null);

  const handleDetailsClick = (item: { src: string; title: string; description: string }) => {
    setSelected(item);
  };

  return (
    <section id="catalogue" className="bg-yellow-100 py-16 px-6 md:px-12 lg:px-24 text-gray-800 scroll-mt-20">
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
        <CatalogueSection title="Maisons simples et modernes" data={maisonsSimples} onDetailsClick={handleDetailsClick} />

        {/* Catégorie Duplex */}
        <CatalogueSection title="Duplex" data={duplex} onDetailsClick={handleDetailsClick} />

        {/* Modal animé pour les détails */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-md w-full text-center space-y-4 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <h4 className="text-2xl font-bold text-gray-800">{selected.title}</h4>
                <div className="relative w-full h-64 mx-auto">
                  <Image
                    src={selected.src}
                    alt={selected.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-gray-600">{selected.description}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Fermer
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function CatalogueSection({
  title,
  data,
  onDetailsClick,
}: {
  title: string;
  data: { src: string; title: string; description: string }[];
  onDetailsClick: (item: { src: string; title: string; description: string }) => void;
}) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-700 mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-60">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300"
              />
              {/* Overlay titre */}
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-br">
                {item.title}
              </div>
              {/* Overlay bouton */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onDetailsClick(item)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                  Détails
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
