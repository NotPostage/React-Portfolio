import './Card.css' 

function Card({ title, summary, tech, highlights, github, replit, live }) {
  return (
    <div className="project-card">
      <header>
        <h2>{title}</h2>
        <p className="project-summary">{summary}</p>
      </header>

      <ul className="tech-stack">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="highlights">
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <footer className="project-links">
        {github && (
            <a href={github} target="_blank" rel="noreferrer">
                GitHub
            </a>)}

        {live && (
            <a href={live} target="_blank" rel="noreferrer">
                Live Demo
            </a>
        )}

        {replit && (
            <a href={replit} target="_blank" rel="noreferrer">
                Replit
            </a>
        )}
    </footer>

    </div>
  );
}

export default Card;
