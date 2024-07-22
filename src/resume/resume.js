import React from 'react'
import Experience from './experience'
import Skills from './skills'
import resumeData from './resume_data'
export default function Resume() {

  return (
    <div className='project-content'>
      <div>
        <Skills/>
      </div>
      <div className='project-cards'>
        <h2 class="text-center p-1">Experience</h2>
{resumeData.map(exp => (
  <Experience key={exp.id} experience={exp} />

))}
      </div>
      
    </div>
  )
}
