import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

const Button = ({ children, theme = {}, isExtra, isOutline, ...props }) => {
  const className = cn(
    styles.container,
    {[styles.containerIsExtra]: isExtra},
    {[styles.containerIsOutline]: isOutline},
    theme.container,
  );

  return (
    <button className={className} {...props}>
      <div className={styles.content}>{children}</div>
    </button>
  );
};

export default Button;