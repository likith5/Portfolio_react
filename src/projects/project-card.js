import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className='cardBody'>
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={project.image} className="img-fluid rounded-start" alt={project.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <p className="card-text">
              <a href={project.link}>
                <small className="text-body-secondary">Link to repo <i class="fa-solid fa-arrow-up-right-from-square"></i></small>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
