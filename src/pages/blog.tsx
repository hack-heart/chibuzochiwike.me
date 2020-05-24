import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';

interface Edge {
  node: {
    excerpt: string,
    id: string,
    frontmatter: {title: string, date: string},
    fields: {slug: string}
  }
}
const Blog: React.FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/blog/"}}
      ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
    }
  `);
  const { allMarkdownRemark: { edges } } = data;

  const listPosts = edges.map((edge: Edge) => {
    const { node: { id, frontmatter: { title, date }, fields: { slug } } } = edge;
    return (
      <li key={id}>
        <Link to={`blog/${slug}`}>
          <h1>{title}</h1>
          <p>{date}</p>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <ul>
        {listPosts}
      </ul>
    </Layout>
  );
};

export default Blog;
