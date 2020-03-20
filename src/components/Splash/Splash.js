import React from 'react';
import FancyText from '../FancyText/FancyText';

import SplashStyles from './Splash.module.scss';

const Splash = () => {
  return (
    <section id="splash">
      <div className="gridWrapper">
        <div className={SplashStyles.indexTitleBlock}>
          <FancyText text="front end web dev" />
        </div>
        <div className={SplashStyles.indexContentBlock}>
          <h3>Well, hi.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi, explicabo exercitationem, deleniti soluta quaerat debitis enim voluptate ratione eveniet amet maiores voluptatibus doloremque laudantium illo accusantium saepe a autem!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sequi consequuntur optio nihil distinctio, rem earum perspiciatis atque minima placeat molestiae, possimus at cumque autem doloribus voluptas! Excepturi iure, odit voluptas ab quaerat tempore laborum tempora atque, sed dolorem fugiat dignissimos ratione deleniti accusamus alias.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi iste incidunt itaque aut quam corporis modi molestiae eos eaque exercitationem.</p>
          <h4>What am I into these days? I'm glad you asked:</h4>
          <ul className={SplashStyles.tagList}>
            <li>Gatsby</li>
            <li>React / Redux</li>
            <li>GraphQL</li>
            <li>SCSS modules</li>
            <li>A11y</li>
            <li>Open Data</li>
            <li>Design systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Splash;