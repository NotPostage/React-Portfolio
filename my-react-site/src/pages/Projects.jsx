import Card from "../components/Card";
import { projects } from "../../data/projects";
import "./Page.css"

function ProjectsPage() {
  return (
    <main className="projects-page container">
      <header className="page-header">
        <h1>Projects</h1>
        <p>
          A selection of projects that reflect my experience with front-end
          development, APIs, and problem-solving.
        </p>
      </header>

      <section className="projects-grid">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}

export default ProjectsPage;
