const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/singleProject.js');

    // Project pages
    resolve(
      graphql(`
          query {
            allContentfulProject {
              edges {
                node {
                  title
                  contentful_id
                  shortDescription {
                    shortDescription
                  }
                  slug
                  externalUrl
                  gitHubUrl
                  fullDescription {
                    fullDescription
                  }
                }
              }
            }
          }
      `).then(res => {
        if (res.errors) {
          reject(res.errors);
        }
        res.data.allContentfulProject.edges.forEach(edge => {
        createPage({
          path: `/project/${edge.node.slug}`,
          component: projectTemplate,
          id: edge.node.contentful_id,
          context: {
            project: edge.node,
            slug: `project/${edge.node.slug}`
          }
        });
        });
      })
    );
  });
};