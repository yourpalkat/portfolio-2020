import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';

import CardStyles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className={CardStyles.projectCard}>
      <div className={CardStyles.thumbnail}></div>
      <div className={CardStyles.projectContent}>
        <h4>{project.title}</h4>
        <ReactMarkdown
          source={project.shortDescription.shortDescription}
          escapeHtml={false}
        />
        <Link to={project.slug}>Read more...</Link>
        {project.externalUrl && <p><a href={project.externalUrl}>See it here!</a></p> }
      </div>
    </div>
  );
}

export default ProjectCard;