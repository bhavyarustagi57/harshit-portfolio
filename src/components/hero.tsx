import { ArrowDownRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { personal, socials } = portfolio;

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="identity-card">
        <div className="avatar" aria-hidden="true">{personal.initials}</div>
        <div className="identity-copy">
          <span className="availability"><i /> {personal.status}</span>
          <h1 id="hero-title">{personal.name}</h1>
          <div className="identity-meta">
            <span>{personal.role}</span>
            <span aria-hidden="true">•</span>
            <span><MapPin size={13} aria-hidden="true" />{personal.location}</span>
          </div>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Let&apos;s connect <ArrowDownRight size={16} /></a>
          <a className="icon-button" href={socials.email} aria-label={`Email ${personal.name}`}><Mail size={18} /></a>
          <a className="icon-button" href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${personal.name} on LinkedIn`}><ExternalLink size={18} /></a>
        </div>
      </div>
      <p className="hero-summary">{personal.heroSummary}</p>
    </section>
  );
}
