import React from 'react';
import './liens.css';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";


function Link () {
    const socialMediaLinks = [
        { name: "GitHub", icon:<FaGithub /> , url:"https://github.com/ssiimmoonndev"},
        { name: "Linkedin", icon:<FaLinkedin /> , url:"https://fr.linkedin.com/in/simon-blecot"},
        { name: "YouTube", icon:<FaYoutube /> , url:"https://www.youtube.com/@EnVoiture"},
    ];