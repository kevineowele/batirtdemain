import Image from "next/image";
import Link from "next/link";

// components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-black text-white text-center space-y-12 scroll-mt-28"
    >
      {/* Texte en haut */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Construisons votre lendemain, Aujourd&apos;hui
        </h2>
        <p className="text-xl md:text-2xl">
          Des maisons modernes, solides et durables pour tous.
        </p>
      </div>

      {/* 3 cercles */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Cercle 1 */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 flex items-center justify-center bg-gray-800">
          <Image
            src="/images/expertise1.jpg"
            alt="Expertise 1"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Cercle 2 */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 flex items-center justify-center bg-gray-800">
          <Image
            src="/images/expertise2.jpg"
            alt="Expertise 2"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Cercle 3 */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 flex items-center justify-center bg-gray-800">
          <Image
            src="/images/expertise3.jpg"
            alt="Expertise 3"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bouton en dessous */}
      <div>
        <Link
          href="/formulaire"
          className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
