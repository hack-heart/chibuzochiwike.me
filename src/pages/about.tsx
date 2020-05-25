import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const About: React.FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/md-pages/about.md/" }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);
  const { markdownRemark: { html, frontmatter: { title } } } = data;
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default About;
