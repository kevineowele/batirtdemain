// components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600">
          À propos de nous
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          BatirDemain est une entreprise de BTP engagée dans la construction de différent types logements modernes en fonction de votre budge, durables et accessibles.
          <br /> 
          Avec une expertise reconnue et une équipe passionnée, nous accompagnons nos clients à chaque étape de leurs projets : de la conception à la réalisation finale.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Notre mission est de bâtir des rêves et des espaces de vie de qualité, tout en répondant aux besoins spécifiques de chaque client.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-xl transition duration-300"
        >
          Contactez-nous pour en savoir plus
        </a>
      </div>
    </section>
  );
}
