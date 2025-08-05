import React from 'react';

/**
 * Generic layout component for a portfolio section.
 *
 * @param {Object} props Component props.
 * @param {string} [props.title] Optional section title.
 * @param {React.ReactNode} props.children Section content.
 * @returns {JSX.Element} Section wrapper.
 */
export default function Section({ title, children }) {
  return (
    <section className="section">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

