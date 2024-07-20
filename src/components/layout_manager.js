import React,{useState} from 'react'
import NavBar from './nav_bar';
import Footer from './footer';
import Content from '../content/content';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
export default function LayoutManager() {
  const [view, setView] = useState('home');
  console.log(view)

  return (
    <div className="layout">
      <NavBar setView={setView}/>
      {view === 'home' && (
        <>
        <Content/> 
        <Footer/>
        </>
      ) }
      
        {view === 'projects' && <Projects />}
        {view === 'resume' && <Resume />}

    </div>
  )
}
