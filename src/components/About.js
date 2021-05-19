import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/About.css';


function About() {
    return(
        
        <div className="about" style={{ backgroundImage: `url('/images/logo.png')`, height: '100%' }}>

            <h3 className="title" >About the Maker</h3>

            <img className="img" src="../images/Perfil.jpg" alt="profile"/>
            <br></br>

            <NavLink to="https://github.com/PatriciaFDRocha/" className="git-name"> <img className="git" src="../images/github.png" alt="github-logo" /> GitHub </NavLink>

            <NavLink to="https://www.linkedin.com/in/patricia-ferreira-da-rocha/" className="linke-name" > <img className="linke" src="../images/Linkedin-Logo.png" alt="linkedin-logo" /> LinkedIn </NavLink>
            <br></br>

            <NavLink to="/" className="home-name"> <img className="home" src="../images/logo.png" alt="logo" /> Home </NavLink>
        </div>
    )
}

export default About;