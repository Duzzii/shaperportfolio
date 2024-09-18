import Navbar from "./components/Navbar"; // Adjust the path to where your Navbar is located
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
