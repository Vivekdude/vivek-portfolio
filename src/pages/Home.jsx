import React from 'react';
import Section from '../components/Section';

function Home({ data }) {
  return (
    <Section>
      <h1>{data.name}</h1>
      <p>{data.summary}</p>
    </Section>
  );
}

export default Home;