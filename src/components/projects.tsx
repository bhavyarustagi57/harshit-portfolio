import type { Project } from "@/data/portfolio";

export function Projects({ projects }: { projects: readonly Project[] }) {
  if (!projects.length) return null;

  return (
    <section id="projects" className="content-section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
