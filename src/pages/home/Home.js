import React, { useRef, useState, useEffect, useContext  } from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import { FaArrowUp, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import PortfolioGrid from '../../components/portfolio/PortfolioGrid';
import NavigationBar from '../../components/navbar/NavigationBar';
import SkillsGrid from '../../components/skills/SkillsGrid';
import { LanguageContext } from "../../context/LanguageContext";

export default function Home() {
    const { language, translations } = useContext(LanguageContext);
    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const [showScroll, setShowScroll] = useState(false);

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
        <div className='home'>
            <NavigationBar />

            <div className='up'>
                <div className='social'>
                    <a href='https://github.com/panagiotagyft' target='_blank' rel='noreferrer'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100048932058640&sk=about&locale=el_GR' target='_blank' rel='noreferrer'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/panagiota-gyftou-17a882237/' target='_blank' rel='noreferrer'>
                        <FaLinkedin size={24} />
                    </a>
                </div>

                <div className='home-left'>
                    <h1>{translations[language].name}</h1>
                    <h3>{translations[language].jobTitle}</h3>
                    <div className="text-container">{translations[language].descriptionParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>))}
                    </div>
                    <div className='btn-group'>
                        <Button variant="contained" onClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            {translations[language].skillsButton}
                        </Button>
                        <Button variant="contained" onClick={() => portfolioRef.current.scrollIntoView({ behavior: 'smooth' })}>
                            {translations[language].portfolioButton}
                        </Button>
                    </div>
                </div>

                <div className='home-right'>
                    <img src={`${process.env.PUBLIC_URL}/assets/myphoto.jpg`} alt='profile' className='my-photo' />
                </div>
            </div>

            <div className='down'>
                <section ref={skillsRef} className="skills-section">
                    <span>{translations[language].mySkills}</span>
                    <SkillsGrid />
                </section>

                <section ref={portfolioRef} className="portfolio-section">
                    <span>{translations[language].myPinnedProjects}</span>
                    <PortfolioGrid />
                </section>
            </div>

            {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp size={24} />
                </button>
            )}
        </div>
    );
}
