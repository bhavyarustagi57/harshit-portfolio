import { portfolio } from "@/data/portfolio";
import { Section } from "./section";
import { sectionIcons } from "./icons";

export function About() {
  return (
    <Section id="about" title="About" marker="PROFILE" icon={sectionIcons.about}>
      <p className="measure">{portfolio.personal.summary}</p>
    </Section>
  );
}
