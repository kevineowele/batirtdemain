import React from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Catalogue from "../components/Catalogue";
import Contact from "@/app/components/Contact";
// app/%28landing%29/page.ts
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <Hero />
      <About />
       <Catalogue />
       <Contact />  
     
    </div>
  );
}
