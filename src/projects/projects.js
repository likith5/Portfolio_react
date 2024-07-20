import React, { useState } from 'react';
import ProjectCard from './project-card';
import projectData from './projects_data';
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projectData
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <div className="project-content">
        <div className="categories">
          <h4 >Click to view Projects</h4>
          <button onClick={() => handleCategoryClick('all')}>All</button>

          {projectData.map((project,index) => (
                    <button  key ={index} onClick={() => handleCategoryClick(project.category)}>{project.category}</button>

          ))}
        {/* <button onClick={() => handleCategoryClick('machine-learning')}>Machine Learning</button>
        <button onClick={() => handleCategoryClick('django')}>Django</button>
        <button onClick={() => handleCategoryClick('web-development')}>Web Development</button>
        <button onClick={() => handleCategoryClick('image-processing')}>Image Processing</button>
        <button onClick={() => handleCategoryClick('flask')}>Flask</button> */}
      </div>
      <div className="project-cards">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    
    </div>
  );
}
