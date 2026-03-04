import React from 'react';
import styles from './Input.module.css';

export const Input = ({
  placeholder = 'Enter text...',
  type = 'text',
  disabled = false,
  error = false,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
