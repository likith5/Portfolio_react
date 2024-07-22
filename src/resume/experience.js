import React from 'react'

export default function Experience({experience}) {
  return (
    <div className='cardBody'>
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={experience.image} className="img-fluid rounded-start" alt={experience.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{experience.title}</h5>
            <p className="card-text">{experience.description}</p>
            <p className="card-text">
                <small className="text-body-secondary">{experience.lastUpdated} </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
