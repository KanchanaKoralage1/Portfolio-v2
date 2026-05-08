import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}
