import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/About.css';


function About() {
    return(
        
        <div className="about" style={{ backgroundImage: `url('/images/logo.png')`, height: '100%' }}>

            <h3 className="title" >About the Maker</h3>

            <img src="../images/Perfil.jpg" alt="profile" width="100px" height="90px" />
            <br></br>

            <NavLink to="https://github.com/PatriciaFDRocha/" > <img className="git" src="../images/github.png" alt="github-logo" /> GitHub </NavLink>
            <br></br>
            <br></br>

            <NavLink to="https://www.linkedin.com/in/patricia-ferreira-da-rocha/" > <img className="linke" src="../images/Linkedin-Logo.png" alt="linkedin-logo" /> LinkedIn </NavLink>
            <br></br>
            <br></br>

            <NavLink to="/"> <img className="home" src="../images/logo.png" alt="logo" /> Home </NavLink>
        </div>
    )
}

export default About;