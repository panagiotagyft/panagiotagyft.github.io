import React, { useContext } from "react";
import "./NavigationBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

const NavigationBar = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container className="navbar-container">
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/" className="special-link">Panagiota</Nav.Link>
          <Nav.Link as={Link} to="/" className="nav-link">{translations[language].aboutMe}</Nav.Link>
          <Nav.Link as={Link} to="/visualization" className="nav-link">{translations[language].visualization}</Nav.Link>
          <Nav.Link as={Link} to="/sources" className="nav-link">{translations[language].sources_title}</Nav.Link>
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
