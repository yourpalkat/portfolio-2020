import React from 'react';

import ProjectStyles from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects">
      <div className="gridWrapper">
        <div className={ProjectStyles.indexTitleBlock}>
          <h3 className="fancyTitle">projects</h3>
        </div>
        <div className={ProjectStyles.indexContentBlock}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem omnis labore hic aspernatur saepe! Nisi nam dolores nemo alias atque magnam cum voluptates cumque iusto culpa possimus, fuga hic sapiente?</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;