import { useEffect, useState, useRef } from 'react'
import './Home.css'
import './Page.css'

import './Home.css';
import './Page.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>Hi, I’m Udara</h1>
        <p>
            I’m a Computer Science student at Carleton University with a 
            focus on front-end development and a growing interest in broader 
            software engineering, including APIs, tooling, and system design!
        </p>

        <div className="home-actions">
            <Link to="/projects" className="nav-button">
            View Projects
            </Link>
            <a href="https://github.com/NotPostage" className="nav-button">
            GitHub
            </a>
        </div>
    </header>

    </main>
  );
}

export default HomePage
