import { Link } from 'gatsby';
import React from 'react';

import styles from './navbar.module.scss';

interface Props {
  title: string,
}

const Nav: React.FC<Props> = (props): JSX.Element => {
  const { title } = props;

  return (
    <nav>
      <ul className={styles.navLinks}>
        <li><Link className={styles.link} to="/">{title}</Link></li>
        <li><Link className={styles.link} to="/about">About</Link></li>
        <li><Link className={styles.link} to="/blog">Blog</Link></li>
        <li><Link className={styles.link} to="/portfolio">Portfolio</Link></li>
        <li><Link className={styles.link} to="/contact">Contact</Link></li>
        <li><Link className={styles.link} to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
