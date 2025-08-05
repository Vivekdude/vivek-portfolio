import React from 'react';

/**
 * Small visual element displaying a skill label.
 *
 * @param {Object} props Component props.
 * @param {string} props.skill Skill name to display.
 * @returns {JSX.Element} Styled badge element.
 */
export default function SkillBadge({ skill }) {
  return <span className="skill-badge">{skill}</span>;
}

