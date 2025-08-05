import React from 'react';
import Section from '../components/Section';

function Contact({ data }) {
  return (
    <Section title="Contact Information">
      <p>
        Email: <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>
      <p>Phone: {data.phone}</p>
      <p>
        LinkedIn: <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a>
      </p>
    </Section>
  );
}

export default Contact;