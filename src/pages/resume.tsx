import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const Resume: React.FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/md-pages/resume.md/" }) {
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

export default Resume;
