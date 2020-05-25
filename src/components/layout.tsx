import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Nav from './navbar';
import Footer from './footer';
import './layout.scss';
import styles from './layout.module.scss';

interface Props {
  children: unknown
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { site: { siteMetadata: { author } } } = data;
  return (
    <div className={styles.container}>
      <Nav title="Home" />
      <div className={styles.content}>
        <main>{children}</main>
      </div>
      <Footer siteAuthor={author} />
    </div>
  );
};

export default Layout;
