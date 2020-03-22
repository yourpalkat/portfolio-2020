import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown/with-html';

import CardStyles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className={CardStyles.projectCard}>
      <h4>{project.title}</h4>
      <div className={CardStyles.thumbnail}>
        <Img  fluid={project.thumbnail.fluid} alt={project.thumbnail.description} />
      </div>
      <div className={CardStyles.projectContent}>
        <ReactMarkdown
          source={project.shortDescription.shortDescription}
          escapeHtml={false}
        />
        <Link to={`/project/${project.slug}`}>Read more...</Link>
      </div>
    </div>
  );
}

export default ProjectCard;