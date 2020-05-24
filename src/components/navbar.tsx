import { Link } from 'gatsby';
import React from 'react';

interface Props {
  siteTitle: string,
}

const Nav: React.FC<Props> = (props): JSX.Element => {
  const { siteTitle } = props;

  return (
    <nav>
      <ul>
        <li><Link to="/">{siteTitle}</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
