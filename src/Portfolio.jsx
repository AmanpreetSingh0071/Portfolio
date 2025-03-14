import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-Powered Financial Chatbot',
    description: 'Developed an AI chatbot for financial analysis using LLMs, Pandas, and Python.',
    link: 'https://github.com/AmanpreetSingh0071/financial-chatbot',
  },
  {
    title: 'Diabetes Prediction System',
    description: 'Built a machine learning model for predicting diabetes with 93% accuracy.',
    link: 'https://github.com/AmanpreetSingh0071/diabetes-prediction',
  },
  {
    title: 'Autonomous Vehicle Simulation',
    description: 'Implemented a robotic navigation system using C# and Raycasting sensors.',
    link: 'https://github.com/AmanpreetSingh0071/autonomous-vehicle',
  }
];

export default function Portfolio() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1>Amanpreet Ahluwalia</h1>
      <p>AI Engineer | Machine Learning | NLP | Generative AI</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
        <a href="https://github.com/AmanpreetSingh0071" target="_blank"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/aman-m-singh" target="_blank"><FaLinkedin size={30} /></a>
        <a href="mailto:amanpreet.m.ahluwalia@gmail.com"><FaEnvelope size={30} /></a>
      </div>
      <h2 style={{ marginTop: '20px' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '10px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" style={{ textDecoration: 'none', color: 'blue' }}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}