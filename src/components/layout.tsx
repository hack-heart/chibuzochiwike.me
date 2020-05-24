import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Nav from './navbar';
import Footer from './footer';
import './layout.scss';

interface Props {
  children: unknown
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <div>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </div>
  );
};

export default Layout;
