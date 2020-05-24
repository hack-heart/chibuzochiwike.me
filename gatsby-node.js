const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === 'MarkdownRemark' && node.frontmatter.parent === 'blog') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.tsx');

  const res = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/blog/"}}
      ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
    }
  `);

  const { data: { allMarkdownRemark: { edges } } } = res;
  edges.forEach((edge) => {
    const { node: { fields: { slug } } } = edge;
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    });
  });
};
