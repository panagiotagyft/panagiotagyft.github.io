import React, { useRef, useState, useEffect, useContext } from 'react'; 
import { FaArrowUp } from 'react-icons/fa';
import NavigationBar from '../../components/navbar/NavigationBar'; 
import { LanguageContext } from '../../context/LanguageContext';

import './Sources.css'; 

export default function Sources() {

  const { language, translations } = useContext(LanguageContext);
  const [paused, setPaused] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const sourcesRef = useRef(null);

  const [visible, setVisible] = useState({
    ellipse: true,
    square: true,
    triangle: true
  });

  const [colors, setColors] = useState({
    ellipse: { fill: "white", stroke: "#eec925" },
    square: { fill: "#91b474", stroke: "#f1dc99" },
    triangle: { fill: "white", stroke: "#9fdfe0" }
  });

  const toggleVisibility = (shape) => {
    setVisible((prev) => ({ ...prev, [shape]: !prev[shape] }));
  };

  const togglePause = () => {
    if (!sourcesRef.current) return;
    if (paused) {
      sourcesRef.current.unpauseAnimations();
    } else {
      sourcesRef.current.pauseAnimations();
    }
    setPaused(!paused);
  };

  // When the cursor touches the shape, it changes color.
  const handleMouseEnter = (shape) => {
    setColors((prev) => ({
      ...prev,
      [shape]: { fill: "#cbdfbc", stroke: "#f09c78" } 
    }));
  };

  // When the cursor leaves, it returns to its original color
  const handleMouseLeave = (shape) => {
    setColors((prev) => ({
      ...prev,
      [shape]: { fill: shape === "square" ? "#91b474": "white", stroke: shape === "ellipse" ? "#eec925" : shape === "square" ? "#f1dc99" : "#9fdfe0" }
    }));
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 

  return (
    <div className="sources-page">

      <div className="navigation-bar">
        <NavigationBar />
      </div>

      {/* Full-screen sources background */}
      <div className="sources-background">
        <svg
          ref={sourcesRef}
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/sources"
          onContextMenu={(e) => {
            e.preventDefault();
            togglePause();
          }}
        >
          {visible.ellipse && (
            <ellipse
              cx="300"
              cy="200"
              rx="200"
              ry="100"
              stroke={colors.ellipse.stroke}
              strokeWidth="70"
              fill={colors.ellipse.fill}
              onClick={() => toggleVisibility('ellipse')}
              onMouseEnter={() => handleMouseEnter('ellipse')}
              onMouseLeave={() => handleMouseLeave('ellipse')}
            >
              <animateMotion
                path="M80,20 L600,30 L80,40 L1000,5 L8,6 L4,7"
                begin="0s"
                dur="15s"
                repeatCount="indefinite"
              />
            </ellipse>
          )}

          {visible.square && (
            <rect
              x="500"
              y="250"
              width="300"
              height="300"
              stroke={colors.square.stroke}
              strokeWidth="20"
              fill={colors.square.fill}
              onClick={() => toggleVisibility('square')}
              onMouseEnter={() => handleMouseEnter('square')}
              onMouseLeave={() => handleMouseLeave('square')}
            >

              <animateMotion
                path="M0,0 L400,200 L800,400 L400,600 L0,400 Z"
                begin="0s"
                dur="5s"
                repeatCount="indefinite"
              />
              
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 600 400"
                to="360 600 40"
                begin="0s"
                dur="4s"
                repeatCount="indefinite"
              />
            </rect>
          )}

          {visible.triangle && (
            <polygon
              points="600,100 750,400 450,400"
              stroke={colors.triangle.stroke}
              strokeWidth="15"
              fill={colors.triangle.fill}
              onClick={() => toggleVisibility('triangle')}
              onMouseEnter={() => handleMouseEnter('triangle')}
              onMouseLeave={() => handleMouseLeave('triangle')}
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.5"
                to="6"
                begin="0s"
                dur="30s"
                repeatCount="indefinite"
              />
            </polygon>
          )}
        </svg>
      </div>

      <div className='info-container'>
        <div className="sources">
          <h3>{translations[language].sources}</h3>
          <ul>
            {translations[language].sourcesList.map((source, index) => (
              <li key={index}>
                <a href={source.link} target="_blank" rel="noopener noreferrer">
                  {source.name}
                </a> <strong>license:</strong> {source.license}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <ul>
            <li><strong>{translations[language].hoverText}</strong></li>
            <li><strong>{translations[language].clickText}</strong></li>
            <li><strong>{translations[language].rightClickText}</strong></li>
          </ul>
        </div>
      </div>

      {/* Scroll-to-top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp size={24} />
        </button>
      )}

    </div>
  );
} 