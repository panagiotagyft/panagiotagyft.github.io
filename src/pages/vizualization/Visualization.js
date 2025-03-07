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
                    <img src="https://ourworldindata.org/cdn-cgi/imagedelivery/qLq-8BTgXU8yG0N6HnOy8g/7c6d1d59-eab0-44cf-88bc-1f04efbaf200/w=850" alt="Data Visualization Example" />
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
