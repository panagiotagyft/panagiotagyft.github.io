import React, { useContext } from 'react';
import './Publications.css';
import NavigationBar from '../../components/navbar/NavigationBar'; 
import { LanguageContext } from '../../context/LanguageContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si'; 

export default function Publications() {
    const { language, translations } = useContext(LanguageContext);

    const publicationsList = translations[language].publicationsList || [];

    return (
        <div className='publications'>
            <NavigationBar />

            {/* Χρησιμοποιούμε το 'up' wrapper ακριβώς όπως στο Home για να κάτσουν τα social αριστερά */}
            <div className='up'>
                
                <div className='social'>
                    <a href='https://github.com/panagiotagyft' target='_blank' rel='noreferrer'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/panagiota-gyftou-17a882237/' target='_blank' rel='noreferrer'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='https://orcid.org/0009-0005-0620-8894' target='_blank' rel='noreferrer'>
                        <SiOrcid size={24} />
                    </a>
                </div>

                <div className="publications-container">
                    <span className='v-span'>{translations[language].datapublications}</span>
                    
                    <div className="publications-list-wrapper">
                        {publicationsList.map((group, index) => (
                            <div key={index} className="year-section">
                                <h3 className="year-heading">{group.year}</h3>
                                <ul className="publications-ul">
                                    {group.citations.map((item, cIndex) => (
                                        <li key={cIndex} className="publication-item">
                                            <div className="publication-text">{item.text}</div>
                                            
                                            {item.links && item.links.length > 0 && (
                                                <div className="publication-links">
                                                    {item.links.map((link, lIndex) => (
                                                        <a 
                                                            key={lIndex} 
                                                            href={link.url} 
                                                            target="_blank" 
                                                            rel="noreferrer" 
                                                            className="pub-link-btn"
                                                        >
                                                            [{link.label}]
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div> {/* Τέλος του up */}
        </div>
    );
}