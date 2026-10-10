import { portfolio } from "@/data/portfolio";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { ResumeSections } from "@/components/resume-sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content" className="portfolio-shell" tabIndex={-1}>
        <Hero />
        <About />
        <ResumeSections />
        <Projects projects={portfolio.projects} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
