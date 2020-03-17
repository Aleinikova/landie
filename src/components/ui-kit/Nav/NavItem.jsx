import React from 'react';

const NavItem = ({ children, theme = {} }) => {
  return (
    <li className={theme.item}>
      {children}
    </li>
  );
};

export default NavItem;