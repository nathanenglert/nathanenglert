import path from "path";
import slash from "slash";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  try {
    const result = await graphql<Queries.Query>(`
      query CreatePagesQuery {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
      return;
    }

    const blogPostTemplate = path.resolve("./src/templates/blogpost.tsx");

    result.data?.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        path: edge.node.slug ?? "",
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.slug ?? "",
          id: edge.node.id,
        },
      });
    });
  } catch (error) {
    console.log("Error retrieving contentful data", error);
  }
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};
