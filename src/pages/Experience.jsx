import React from 'react';

function Experience({ data }) {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      {data.map((job, index) => (
        <div key={index}>
          <h3>{job.company}</h3>
          <p>{job.duration}</p>
          <ul>
            {job.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;