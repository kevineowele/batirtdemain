// app/page.tsx
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import About from "@/app/components/About";
import Catalogue from "../components/Catalogue";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
       <Catalogue />     
      <Footer />
    </div>
  );
}
