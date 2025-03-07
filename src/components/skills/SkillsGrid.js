import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './SkillsGrid.css';


import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaLinux, FaWindows, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiDjango, SiLatex, SiKaggle, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';

// Style for the category boxes
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
}));

export default function SkillsGrid() {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/nosql.svg`} alt="NoSQL" className="custom-icon" />, name: "NoSQL" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/sql.svg`} alt="SQL" className="custom-icon" />, name: "SQL" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/sparql.svg`} alt="Sparql" className="custom-icon" />, name: "SPARQL" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/bash.svg`} alt="Bash" className="custom-icon" />, name: "Bash" }
      ],
    },
    {
      category: 'Databases',
      items: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" }
      ],
    },
    {
      category: 'Web Development',
      items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiDjango />, name: "Django" }
      ],
    },
    {
      category: 'Development Tools',
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiKaggle />, name: "Kaggle" }
      ],
    },
    {
      category: 'Operating Systems',
      items: [
        { icon: <FaWindows />, name: "Windows" },
        { icon: <FaLinux />, name: "Linux" }
      ],
    },
    {
      category: 'Other Tools',
      items: [
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/matlab.svg`} alt="MATLAB" className="custom-icon" />, name: "MATLAB" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/mininet.svg`} alt="Mininet" className="custom-icon" />, name: "Mininet" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/ThingsBoard.svg`} alt="ThingsBoard" className="custom-icon1" />, name: "ThingsBoard" }
      ],
    },
    {
      category: 'AI/ML Algorithms',
      items: [
        "Supervised Learning Algorithms (e.g. Logistic Regression, Random Forests, SVMs)",
        "Unsupervised Learning Techniques (e.g. K-Means, Hierarchical Clustering)",
        "Neural Networks & Deep Learning Frameworks (e.g. CNNs, RNNs, Transformers)",
        "Reinforcement Learning",
        "Data Preparation and Feature Engineering (e.g. Pandas, NumPy)",
        "Model Evaluation and Optimization (e.g. Hyperparameter Tuning, Cross-Validation)"
      ],
      isTextOnly: true,
    },
    {
      category: 'Office & Documentation Tools',
      items: [
        { icon: <SiLatex />, name: "LaTeX" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/Markdown.svg`} alt="Markdown" className="custom-icon" />, name: "Markdown" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/MSOffice.svg`} alt="MS Office" className="custom-icon" />, name: "MS Office" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/GoogleDrive.svg`} alt="Google Drive" className="custom-icon" />, name: "Google Drive" },
        { icon: <img src={`${process.env.PUBLIC_URL}/assets/OneDrive.svg`} alt="OneDrive" className="custom-icon" />, name: "OneDrive" }
      ],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skillGroup, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item>
              <h3 className="skills-category">{skillGroup.category}</h3>

              {skillGroup.isTextOnly ? (
                <ul className="skills-text-list">
                  {skillGroup.items.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              ) : (
                <Grid container spacing={1} justifyContent="center">
                  {skillGroup.items.map((skill, idx) => (
                    <Grid item xs={3} sm={3} key={idx}>
                      <div
                        className="skills-icon-box"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {skill.icon}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Item>
          </Grid>
        ))}
      </Grid>

      {hoveredSkill && (
        <div className="skill-tooltip">
          {hoveredSkill}
        </div>
      )}
    </Box>
  );
}
