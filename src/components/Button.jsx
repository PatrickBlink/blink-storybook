import React from 'react';
import styles from './Button.module.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
