import React from 'react';

import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import FooterStyles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="gridWrapper">
        <div className={FooterStyles.contact}>
          <p>Derek Murr</p>
          <ul>
            <li><a href="mailto:hello@derekmurr.com"><IoIosMail /></a></li>
            <li><a href="https://twitter.com/derekmurr"><FaTwitterSquare /></a></li>
            <li><a href="https://www.linkedin.com/in/derek-murr-3449412/"><FaLinkedin /></a></li>
            <li><a href="https://github.com/derekmurr"><FaGithubSquare /></a></li>
          </ul>
        </div>
        <div className={FooterStyles.colophon}>
          <p>Built in Gatsby. Hosted by Netlify. </p>
          <p>Alfa Slab One, by JM Solé</p>
          <p>Roboto Sans, by Christian Robertson</p>
        </div>
        <div className={FooterStyles.copyright}>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;