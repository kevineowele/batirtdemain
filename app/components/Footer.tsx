// components/Footer.tsx
import { FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative text-white border-t border-gray-700 py-12 mt-auto"
      style={{
        backgroundImage: "url('/images/texture-beton.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start px-6 space-y-10 md:space-y-0">

        {/* Section gauche : Infos entreprise */}
        <div className="flex flex-col space-y-4 max-w-md">
          <p className="text-3xl font-bold text-yellow-400">BatirDemain</p>
          <p className="text-gray-300 leading-relaxed">
            Construisons ensemble les maisons de demain — robustes, durables et respectueuses de l’environnement.
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BatirDemain. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm underline hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
            Mentions légales
          </p>
        </div>

        {/* Section milieu : Horaires et contact */}
        <div className="flex flex-col space-y-4 text-sm text-gray-300">
          <p className="text-lg font-semibold text-white">Nous contacter</p>
          <p>
            Email :{" "}
            <a
              href="mailto:contact@batirdemain.com"
              className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
            >
              contact@batirdemain.com
            </a>
          </p>
          <p>Téléphone : +241 66 29 94 16</p>
          <p>Adresse : Libreville, Gabon</p>
          <p>Horaires : Lun - Samedi, 8h00 - 18h00</p>
        </div>

        {/* Section droite : Logo + réseaux sociaux */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Image
            src="/logo/logomaison1.jpg" // Remplace par le chemin de ton logo optimisé
            alt="Logo BatirDemain"
            width={140}
            height={140}
            className="object-contain drop-shadow-lg"
          />
          {/* Réseaux sociaux */}
          <div className="flex space-x-6 text-3xl">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transform transition-transform duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transform transition-transform duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/1234567890" // Remplace par ton numéro WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 hover:scale-110 transform transition-transform duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
