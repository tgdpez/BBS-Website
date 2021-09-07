const path = require("path");

// generate detail pages for the workPortfolio
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    `src/pages/work/workDetailPageTemplate.js`
  );

  return graphql(
    `
      query absolutePath {
        allMdx(filter: { fileAbsolutePath: { regex: "/workPortfolio/" } }) {
          edges {
            node {
              slug
              fileAbsolutePath
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // pass both the slug and absolute path without trailing slash
    // to use for querying in the workDetailPageTemplate
    result.data.allMdx.edges.forEach((edge) => {
      const removedTrailingSlash = edge.node.slug.replace(/\/$/gm, "");

      createPage({
        path: `/work/${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: `${edge.node.slug}`,
          absolutePathSlug: removedTrailingSlash,
        },
      });
    });
  });
};
