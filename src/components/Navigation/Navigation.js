import React from 'react';
import { Link } from 'gatsby';

import navStyles from './Navigation.module.scss';

const Navigation = ({ homePage }) => {
  return (
    <nav className={navStyles.mainNav}>
      {homePage ? (
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#writing">Writing</a></li>
        </ul>
      ) : (
        <ul>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/writing'>Writing</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;