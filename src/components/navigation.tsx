"use client";

import { Award, BookOpen, BriefcaseBusiness, Code2, GraduationCap, Home, Languages, Menu, MessageCircleMore, Sparkles, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Sparkles },
  { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#certifications", label: "Certifications", icon: BookOpen },
  { href: "#achievements", label: "Achievements", icon: Award },
  { href: "#languages", label: "Languages", icon: Languages },
  { href: "#contact", label: "Contact", icon: MessageCircleMore },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="desktop-nav" aria-label="Section navigation">
        {links.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} aria-label={label}><Icon size={17} /><span>{label}</span></a>
        ))}
      </nav>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.filter(({ label }) => ["Home", "Skills", "Contact"].includes(label)).map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}><Icon size={17} /><span>{label}</span></a>
        ))}
        <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={17} /> : <Menu size={17} />}<span>Menu</span>
        </button>
      </nav>
      {open && (
        <nav className="mobile-menu" aria-label="Complete section navigation">
          {links.map(({ href, label }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      )}
    </>
  );
}
