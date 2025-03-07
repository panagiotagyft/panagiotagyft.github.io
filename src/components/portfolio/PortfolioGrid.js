import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './PortfolioGrid.css'; 

export default function PortfolioGrid() {
  const projects = [
    {
      title: 'Berkeley Pacman Project',
      // description: 'Short description about project 1',
      imageUrl: `${process.env.PUBLIC_URL}/assets/giphy.gif`,
      link: 'https://github.com/panagiotagyft/Artificial_Intelligence_I',
    },
    {
      title: 'Pattern Recognition - Machine Learning Projects',
      // description: 'Short description about project 2',
      imageUrl: `${process.env.PUBLIC_URL}/assets/pattern-recognition.png`,
      link: 'https://github.com/panagiotagyft/Pattern-Recognition-Machine-Learning_2023',
    },
    {
      title: 'Quantum Classifier Project',
      // description: 'Short description about project 3',
      imageUrl: `${process.env.PUBLIC_URL}/assets/quantum-classifier.png`,
      link: 'https://github.com/panagiotagyft/Quantum-Classifier',
    },
    {
      title: 'Deep Learning for Natural Language Processing Project',
      // description: 'Short description about project 4',
      imageUrl: `${process.env.PUBLIC_URL}/assets/nlp.png`,
      link: 'https://github.com/panagiotagyft/Artificial-Intelligence-II-Deep-Learning-for-Natural-Language-Processing',
    },
    {
      title: ' Key Value Database Project',
      // description: 'Short description about project 4',
      imageUrl: `${process.env.PUBLIC_URL}/assets/kv.png`,
      link: 'https://github.com/panagiotagyft/Key-Value-Database',
    },
  ];

  return (
    <Box sx={{ width: '100%', padding: '2rem 0' }}>
      <Grid 
        container 
        rowSpacing={2} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              className="portfolio-item" 
              onClick={() => window.open(project.link, '_blank')}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="portfolio-image"
              />
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
