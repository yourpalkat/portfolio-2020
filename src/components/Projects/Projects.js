import React from 'react';
import FancyText from '../FancyText/FancyText';

import ProjectStyles from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects">
      <div className="gridWrapper">
        <div className={ProjectStyles.indexTitleBlock}>
          <FancyText text="projects" />
        </div>
        <div className={ProjectStyles.indexContentBlock}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem omnis labore hic aspernatur saepe! Nisi nam dolores nemo alias atque magnam cum voluptates cumque iusto culpa possimus, fuga hic sapiente?</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;