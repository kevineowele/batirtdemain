// components/Footer.tsx
import { FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700 py-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end px-6">
        
        {/* Section gauche : Nom + Email */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <p className="font-semibold text-lg">
            &copy; {new Date().getFullYear()} BatirDemain. Tous droits à une maison réservés.
          </p>
          <p>
            Imail :{" "}
            <a
              href="mailto:contact@batirdemain.com"
              className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
            >
              contact@batirdemain.com
            </a>
          </p>
        </div>

        {/* Section droite : Réseaux sociaux */}
        <div className="flex space-x-6 text-2xl mt-8 md:mt-0">
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
    </footer>
  );
}
