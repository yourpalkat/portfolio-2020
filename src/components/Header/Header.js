import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Navigation from '../Navigation/Navigation';
import headerStyles from './Header.module.scss';

const Header = ({ siteTitle, homePage }) => (
  <header className={headerStyles.siteHeader}>
    <div className="gridWrapper">
      <h1 className={headerStyles.siteName}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <h1 className={headerStyles.mobileSiteName}>
        <Link to="/">DM</Link>
      </h1>
      <Navigation homePage={homePage} />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
