import React from 'react';

import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import FooterStyles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="gridWrapper">
        <div className={FooterStyles.contact}>
          <p>Made in Toronto by Derek Murr.</p>
          <ul>
            <li><a href="mailto:hello@derekmurr.com" title="Email"><IoIosMail /></a></li>
            <li><a href="https://twitter.com/derekmurr" title="Twitter"><FaTwitterSquare /></a></li>
            <li><a href="https://www.linkedin.com/in/derek-murr-3449412/" title="LinkedIn"><FaLinkedin /></a></li>
            <li><a href="https://github.com/derekmurr" title="GitHub"><FaGithubSquare /></a></li>
          </ul>
        </div>
        <div className={FooterStyles.colophon}>
          <p>Built in <a href="https://www.gatsbyjs.org/">Gatsby.</a> Hosted by <a href="https://www.netlify.com/">Netlify.</a> </p>
          <p>Headline type treatments based on an example by <a href="https://rwt.io/">Jason Pamental.</a> Fonts: Ultra by Astigmatic, Roboto Sans by Christian Robertson, via Google.</p>
        </div>
        <div className={FooterStyles.copyright}>
          <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved, all wrongs reversed. Thanks for stopping by!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;