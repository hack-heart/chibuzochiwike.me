import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import styles from './blog.module.scss';

interface Edge {
  node: {
    excerpt: string,
    id: string,
    frontmatter: {title: string, date: string, attachments: Array<string>},
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
              excerpt(pruneLength: 150)
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                attachments
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
    const {
      node: {
        excerpt, id, frontmatter: { title, date, attachments }, fields: { slug },
      },
    } = edge;
    return (
      <li key={id}>
        <Link className={styles.link} to={`blog/${slug}`}>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{excerpt}</p>
          {attachments[0] === '#' ? null : <img src={attachments[0]} alt="header" />}
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <h1>Blog posts</h1>
      <ul className={styles.container}>
        {listPosts}
      </ul>
    </Layout>
  );
};

export default Blog;
