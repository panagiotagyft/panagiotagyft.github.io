import React, { useContext } from "react";
import "./NavigationBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import { LanguageContext } from "../../context/LanguageContext";

const NavigationBar = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container className="navbar-container">
        <Nav className="navbar-nav">
     
          <NavLink to="/" className="special-link">Panagiota</NavLink>
          
  
          <NavLink to="/" end className="nav-link">
            {translations[language].aboutMe}
          </NavLink>
          
          <NavLink to="/publications" className="nav-link">
            {translations[language].publications_title}
          </NavLink>
        </Nav>
        <button className="language-toggle" onClick={toggleLanguage}>
          <img 
            src={language === "en" ? `${process.env.PUBLIC_URL}/assets/flags/gr.svg` : `${process.env.PUBLIC_URL}/assets/flags/gb.svg`}
            alt={language === "en" ? "Greek Flag" : "British Flag"} 
            className="flag-icon"
          />
        </button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;