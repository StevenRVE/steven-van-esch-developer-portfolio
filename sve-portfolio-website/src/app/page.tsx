import About from "@/component/layout/About";
import Footer from "@/component/layout/Footer";
import Hero from "@/component/layout/Hero";
import Navbar from "@/component/layout/Navbar";
import Projects from "@/component/layout/Projects";
import Services from "@/component/layout/Services";
import "./globals.css";
import BurgerMenu from "@/component/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";

export default function Home() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <BurgerMenu />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}
