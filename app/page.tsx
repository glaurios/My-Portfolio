import Hero from "@/components/Hero";
import Background from "@/components/Background";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SelectedProjects from "@/components/SelectedProjects";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/FFooter";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#080b12] dark:text-white">
      <Background />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <SelectedProjects />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
}