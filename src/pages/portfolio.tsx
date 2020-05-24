import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const Portfolio: React.FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/md-pages/portfolio.md/" }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);
  const { markdownRemark: { html } } = data;
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default Portfolio;
