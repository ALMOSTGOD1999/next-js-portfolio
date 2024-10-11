
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Projects/>
    </main>
    
  );
}
