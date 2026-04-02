import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      <div className="max-w-2xl mx-auto px-6 flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
