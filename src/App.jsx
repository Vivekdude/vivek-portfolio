import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import resumeData from './data/resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setData(resumeData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/skills" element={<Skills data={data.technicalExpertise} />} />
            <Route path="/experience" element={<Experience data={data.experience} />} />
            <Route path="/certifications" element={<Certifications data={data.certifications} />} />
            <Route path="/contact" element={<Contact data={data.contact} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;