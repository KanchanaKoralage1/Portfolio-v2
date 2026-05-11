import About from "./components/About";
import CareerPlan from "./components/CareerPlan";
import Certifications from "./components/Certification";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ReflectiveJournal from "./components/ReflectiveJournal";
import Skills from "./components/Skills";

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
