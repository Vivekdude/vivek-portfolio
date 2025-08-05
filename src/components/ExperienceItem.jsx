import React from 'react';

/**
 * Display a single professional experience entry.
 *
 * @param {Object} props Component props.
 * @param {string} props.company Name of the company.
 * @param {string} props.duration Time period of the employment.
 * @param {string[]} props.responsibilities List of responsibilities.
 * @returns {JSX.Element} Structured experience item.
 */
export default function ExperienceItem({ company, duration, responsibilities }) {
  return (
    <div className="experience-item">
      <h3>{company}</h3>
      <p>{duration}</p>
      {Array.isArray(responsibilities) && (
        <ul>
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

