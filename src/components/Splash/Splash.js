import React from 'react';

import SplashStyles from './Splash.module.scss';

const Splash = () => {
  return (
    <section id="splash">
      <div className="gridWrapper">
        <div className={SplashStyles.indexTitleBlock}>
          <h2 className="fancyTitle">front end web dev</h2>
        </div>
        <div className={SplashStyles.indexContentBlock}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi, explicabo exercitationem, deleniti soluta quaerat debitis enim voluptate ratione eveniet amet maiores voluptatibus doloremque laudantium illo accusantium saepe a autem!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sequi consequuntur optio nihil distinctio, rem earum perspiciatis atque minima placeat molestiae, possimus at cumque autem doloribus voluptas! Excepturi iure, odit voluptas ab quaerat tempore laborum tempora atque, sed dolorem fugiat dignissimos ratione deleniti accusamus alias.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi iste incidunt itaque aut quam corporis modi molestiae eos eaque exercitationem.</p>
        </div>
      </div>
    </section>
  );
}

export default Splash;