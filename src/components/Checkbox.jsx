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
          {checked && !indeterminate && '✓'}
          {indeterminate && '−'}
        </span>
        {label}
      </label>
    </div>
  );
};
