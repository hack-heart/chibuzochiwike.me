import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {title: string, date: string, attachments: Array<string>}
      html: string;
    }
  }
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        attachments
      }
      html
    }
  }
`;
const Blog: React.FC<Props> = (props): JSX.Element => {
  const { data: { markdownRemark: { html, frontmatter: { title, date, attachments } } } } = props;
  return (
    <Layout>
      <Link to="/blog">Back</Link>
      <h1>{title}</h1>
      <p>{date}</p>
      {attachments[0] === '#' ? null : <img src={attachments[0]} alt="header" />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default Blog;
