const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

      const blogPostTemplate = path.resolve("./src/templates/blogpost.js");

      result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          path: edge.node.slug,
          component: slash(blogPostTemplate),
          context: {
                        slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};