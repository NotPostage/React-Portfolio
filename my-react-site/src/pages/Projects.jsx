import Card from "../components/Card";
import { projects } from "../../data/projects";
import "./Page.css"

import { useState } from 'react'
import OverlayPopup from "../components/OverlayPopup";

function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [openPopup, setOpenPopup] = useState(null);
  // setOpenPopup(false);
  
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
        {projects
          .slice()
          .sort((a, b) => (b.featured === true) - (a.featured === true))
          .map((project) => (
            <Card 
              key={project.title} 
              {...project} 
              onClick={() => {setActiveProject(project); console.log(activeProject); setOpenPopup(true)}}
            />
        ))}
      </section>
      
      <OverlayPopup open={openPopup} setOpen={setOpenPopup}>
        {activeProject && <Card 
          key={activeProject.title} 
          {...activeProject}
          onClick={() => {return}}
        />}
      </OverlayPopup>
    </main>
    
  );
}

export default ProjectsPage;
