// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/maison.jpeg')",
      }}
    >
      <div className=" bg-opacity-50 w-full h-full absolute top-0 left-0" />
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Construisons votre l&apos;en Demain, Aujourd&apos;hui
        </h2>
        <p className="text-xl md:text-2xl">
          Des maisons modernes, solides et durables pour tous.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
}
