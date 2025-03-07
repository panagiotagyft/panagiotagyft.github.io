import React, { useContext  } from 'react';
import './Visualization.css';
import NavigationBar from '../../components/navbar/NavigationBar'; 
import { LanguageContext } from '../../context/LanguageContext';

export default function Visualization() {

    const { language, translations } = useContext(LanguageContext);

    return (
        <div className='visualization'>
            <NavigationBar />
            <div className="visualization-container">
                <span className='v-span'>{translations[language].dataVisualization}</span>
                <div className="image-frame">
                    <img src={`${process.env.PUBLIC_URL}/assets/combatant_deaths_in_conventional_wars_landscape.png`} alt="Data Visualization Example" />
                </div>
                <p className="caption">{translations[language].sources}: 
                    <a href="https://ourworldindata.org/war-and-peace"> Source Website</a>
                </p>
                <p className="description">
                    {translations[language].visualizationDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </p>
            </div>
        </div>
    );
}
