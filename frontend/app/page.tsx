import About from "./pages/About";
import CareerPlan from "./pages/CareerPlan";
import Certifications from "./pages/Certification";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import ReflectiveJournal from "./pages/ReflectiveJournal";
import Skills from "./pages/Skills";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <CareerPlan/>
      <ReflectiveJournal/>
      <Contact/>
    </main>
  );
}
