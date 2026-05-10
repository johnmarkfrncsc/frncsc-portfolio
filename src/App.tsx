import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Professional from "./components/sections/Professional";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      <header className="sticky top-0 z-10 flex justify-center px-6">
        <Navbar />
      </header>
      <div className="px-6 flex-1 flex flex-col">
        <main className="flex-1 max-w-3xl mx-auto w-full">
          <Hero />
          <Professional />
          <Project />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
