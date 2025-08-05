import React from 'react';
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';

function Skills({ data }) {
  const categories = [
    { label: 'Frontend', skills: data.frontend },
    { label: 'Backend', skills: data.backend },
    { label: 'Database', skills: data.database },
    { label: 'Cloud', skills: data.cloud },
  ];

  return (
    <Section title="Technical Skills">
      {categories.map(category => (
        <div key={category.label}>
          <h3>{category.label}</h3>
          <div>
            {category.skills.map(skill => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Skills;