import React from 'react';
import skills_data from './skils_data';
export default function Skills() {
  return (
    <div>
      <h2 className="text-center p-1">Skills</h2>
      <div class="p-4">
        {skills_data.map((skill, index) => (
          <button key={index}>{skill}</button>
        ))}
      </div>
      <div class="text-center pt-5">
        <h4>Check out my resume</h4>
        <a href="/likith_resume.pdf" download="likith_resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
}
