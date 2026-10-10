import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "./section";
import { sectionIcons } from "./icons";

export function Contact() {
  const { personal, socials } = portfolio;

  return (
    <Section id="contact" title="Let’s talk" marker="CONNECT" icon={sectionIcons.contact}>
      <div className="contact-panel">
        <div>
          <h3>{personal.contactHeading}</h3>
          <p>{personal.contactBlurb}</p>
        </div>
        <div className="contact-links">
          <a href={socials.email}><span><Mail size={16} /> Email</span><strong>{personal.email}</strong><ArrowUpRight size={16} /></a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><span><ExternalLink size={16} /> LinkedIn</span><strong>{personal.name}</strong><ArrowUpRight size={16} /></a>
          <div className="contact-location"><span><MapPin size={16} /> Location</span><strong>{personal.location}</strong></div>
        </div>
      </div>
    </Section>
  );
}
