import React from 'react';
import styles from './Checkbox.module.css';

export const Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  ...props
}) => {
  return (
    <div className={`${styles.checkboxWrapper} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
        {...props}
      />
      <label htmlFor={id} className={styles.label}>
        <span className={`${styles.checkmark} ${indeterminate ? styles.indeterminate : ''}`}>
          {checked && !indeterminate && (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={styles.checkmarkSvg}
            >
              <path
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
                className={styles.checkmarkPath}
              />
            </svg>
          )}
          {indeterminate && '−'}
        </span>
        {label}
      </label>
    </div>
  );
};
