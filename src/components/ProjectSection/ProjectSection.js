import React from 'react';
import { Link } from 'gatsby';
import FancyText from '../FancyText/FancyText';
import ProjectCard from '../ProjectCard/ProjectCard';

import ProjectStyles from './ProjectSection.module.scss';

const ProjectSection = ({ projects }) => {
  return (
    <section id="projects" className={ProjectStyles.projectSection}>
      <div className="gridWrapper">
        <div className={ProjectStyles.indexTitleBlock}>
          <FancyText text="rec ent projects" label="Recent projects" />
        </div>
        <div className={ProjectStyles.indexContentBlock}>
          <h3 className="title">Recent projects</h3>
          <p>Here are a few projects I’ve worked on lately (or that I’m currently working on) that I’m excited to show off! You can also see additional work on the <Link to='/projects'>All Projects</Link> page.</p>
          <div className={ProjectStyles.projectCardSection}>
            {projects.edges.map(project => <ProjectCard project={project.node} key={project.node.contentful_id} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;