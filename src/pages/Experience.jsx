import React from 'react';
import Section from '../components/Section';
import ExperienceItem from '../components/ExperienceItem';

function Experience({ data }) {
  return (
    <Section title="Professional Experience">
      {data.map((job, index) => (
        <ExperienceItem key={index} {...job} />
      ))}
    </Section>
  );
}

export default Experience;