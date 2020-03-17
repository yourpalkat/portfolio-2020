import React from 'react';
import FancyText from '../FancyText/FancyText';

import WritingStyles from './Writing.module.scss';

const Writing = () => {
  return (
    <section id="writing">
      <div className="gridWrapper">
        <div className={WritingStyles.indexTitleBlock}>
          <FancyText text="writing" />
        </div>
        <div className={WritingStyles.indexContentBlock}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem omnis labore hic aspernatur saepe! Nisi nam dolores nemo alias atque magnam cum voluptates cumque iusto culpa possimus, fuga hic sapiente?</p>
        </div>
      </div>
    </section>
  );
}

export default Writing;