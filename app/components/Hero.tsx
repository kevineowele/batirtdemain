import Link from "next/link";
// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative h-[99vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/fond3.jpg')",
      }}
    >
      <div className=" bg-opacity-50 w-full h-full absolute top-0 left-0" />
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Construisons votre lendemain, Aujourd&apos;hui
        </h2>
        <p className="text-xl md:text-2xl mb-6">
          Des maisons modernes, solides et durables pour tous.
        </p>
        <Link
          href="/formulaire"
          className="mt-6 inline-block bg-yellow-300 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
