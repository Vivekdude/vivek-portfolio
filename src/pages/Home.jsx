import React from 'react';

function Home({ data }) {
  return (
    <div className="home">
      <h1>Welcome to {data.name}'s Portfolio</h1>
      <p>{data.summary}</p>
    </div>
  );
}

export default Home;