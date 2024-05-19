// Filename - Footer.js

import React from "react";

import { SocialIcon } from 'react-social-icons'



const Footer = () => (
	<footer className="footer">
		<h6 className="foot1">Made with 💗 by Mallipudi Naveen</h6>
        <p className="para"><SocialIcon network="linkedin" url="https://www.linkedin.com/in/mallipudi-naveen-193124211/" />
        <SocialIcon network="github" url="https://github.com/mallipudinaveen29" />
        <SocialIcon network="instagram" url="https://www.instagram.com/naveen_yadav34/" /></p>
	</footer>
);

export default Footer;
