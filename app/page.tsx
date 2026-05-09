import Hero from "@/components/Hero";
import Navbar from "@/components/Navibar";
import Image from "next/image";

export default function Home() {
  return (
     <main className="h-screen overflow-y-scroll scroll-smooth">
      <Hero />
      <Navbar /> 
      {/* <About />
      <Acadamic />
      <Projects />
      <Contact /> */}
      
      
    </main>
  );
}
