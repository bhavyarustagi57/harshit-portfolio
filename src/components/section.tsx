import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type SectionProps = {
  id: string;
  title: string;
  marker: string;
  icon: LucideIcon;
  children: ReactNode;
};

export function Section({ id, title, marker, icon: Icon, children }: SectionProps) {
  return (
    <section id={id} className="content-section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <div className="section-title-wrap">
          <Icon aria-hidden="true" size={18} />
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <span className="section-marker">{marker}</span>
      </div>
      {children}
    </section>
  );
}

