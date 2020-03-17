import React from 'react';

import navStyles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={navStyles.mainNav}>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#writing">Writing</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;