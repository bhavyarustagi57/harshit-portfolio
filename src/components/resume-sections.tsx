import { portfolio } from "@/data/portfolio";
import { Section } from "./section";
import { sectionIcons } from "./icons";

export function ResumeSections() {
  return (
    <>
      <Section id="experience" title="Experience" marker="JOURNEY" icon={sectionIcons.experience}>
        <div className="experience-list">
          {portfolio.experience.map((entry) => (
            <article className="experience-entry" key={`${entry.organization}-${entry.period}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="experience-content">
                <div className="entry-heading">
                  <div>
                    <h3>{entry.organization}</h3>
                    <p>{entry.title}</p>
                  </div>
                  <time>{entry.period}</time>
                </div>
                <ul>
                  {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" marker="TOOLKIT" icon={sectionIcons.skills}>
        <div className="skills-panel">
          {portfolio.skills.map((group) => (
            <div className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" marker="LEARNING" icon={sectionIcons.education}>
        <div className="timeline-list">
          {portfolio.education.map((entry) => (
            <article key={entry.institution} className="timeline-entry">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="education-content">
                <div className="entry-heading">
                  <div>
                    <h3>{entry.institution}</h3>
                    {entry.qualification && <p>{entry.qualification}</p>}
                  </div>
                  {entry.period && <time>{entry.period}</time>}
                </div>
                <strong>{entry.result}</strong>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications" marker="CREDENTIALS" icon={sectionIcons.certifications}>
        <div className="credential-list">
          {portfolio.certifications.map((certification) => {
            const content = (
              <div>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
              </div>
            );

            return certification.href ? (
              <a key={certification.title} className="credential-entry" href={certification.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <article key={certification.title} className="credential-entry">{content}</article>
            );
          })}
        </div>
      </Section>

      <Section id="achievements" title="Achievements" marker="MILESTONES" icon={sectionIcons.achievements}>
        <ul className="achievement-list">
          {portfolio.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
        </ul>
      </Section>

      <Section id="languages" title="Languages" marker="COMMUNICATION" icon={sectionIcons.languages}>
        <ul className="language-list">
          {portfolio.languages.map((language) => <li key={language}>{language}</li>)}
        </ul>
      </Section>
    </>
  );
}
