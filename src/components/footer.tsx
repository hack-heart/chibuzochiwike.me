import React from 'react';

interface Props {
  siteAuthor: string
}

const Footer: React.FC<Props> = (props): JSX.Element => {
  const { siteAuthor } = props;
  return (
    <footer>
      © {new Date().getFullYear()}, Built by {siteAuthor}
    </footer>
  );
};

export default Footer;
