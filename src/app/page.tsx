import { SettingsProvider } from "@/context/SettingsContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import FAQChat from "./components/FAQChat";
import StarBackground from "./components/ui/StarBackground";
import StartNow from "./components/StartNow";

export default function Home() {
  return (
    <>
      <SettingsProvider>
        <StarBackground />
        <Navbar />
        <Hero />
        <StartNow />
        <Features />
        <FAQChat />
        <Footer />
      </SettingsProvider>
    </>
  );
}
