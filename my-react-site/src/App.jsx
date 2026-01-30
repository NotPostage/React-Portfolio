import { useEffect, useState } from 'react'
import NavBar from './components/Nav'
import './App.css'
import {Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <NavBar setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        {/* catch-all */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Card /> */}
    </>
  )
} 

function Card() {
  return <div className="card" />
}

export default App
