import About from "@/components/About";
import Acadamic from "@/components/Acadamic";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navibar";
import Projects from "@/components/Projects";




export default function Home() {
  return (
     <main className="h-screen overflow-y-scroll scroll-smooth">
      <Hero />
      <Navbar /> 
      <About />
      <Acadamic />
      <Projects />
      <Contact />
     
      
      
    </main>
  );
}
