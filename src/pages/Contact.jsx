import React from 'react';

function Contact({ data }) {
  return (
    <div className="contact">
      <h2>Contact Information</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>LinkedIn: <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
    </div>
  );
}

export default Contact;