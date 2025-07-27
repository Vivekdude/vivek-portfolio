import React from 'react';

function Skills({ data }) {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <ul>
        <li>Frontend: {data.frontend.join(', ')}</li>
        <li>Backend: {data.backend.join(', ')}</li>
        <li>Database: {data.database.join(', ')}</li>
        <li>Cloud: {data.cloud.join(', ')}</li>
      </ul>
    </div>
  );
}

export default Skills;