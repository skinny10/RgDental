import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas transition-colors dark:bg-canvas-dark">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
