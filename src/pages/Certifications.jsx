import React from 'react';
import Section from '../components/Section';

function Certifications({ data }) {
  return (
    <Section title="Certifications">
      <ul>
        {data.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </Section>
  );
}

export default Certifications;