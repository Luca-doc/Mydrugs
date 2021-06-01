import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faTwitter, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="Contact">
      <div className="contactSection">
        <h1 className="contactHeading">Main Developer</h1>
        <div className="mainContact">
          <div className="gitHub">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <Link className="link">M1000</Link>
