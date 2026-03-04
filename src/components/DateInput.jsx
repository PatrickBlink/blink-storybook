import React, { useState } from 'react';
import styles from './DateInput.module.css';

export const DateInput = ({
  label,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  helperText,
  size = 'md',
  min,
  max,
  ...props
}) => {
  return (
    <div className={`${styles.dateWrapper} ${styles[size]}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div
        className={`${styles.dateContainer} ${error ? styles.error : ''} ${
          disabled ? styles.disabled : ''
        }`}
      >
        <input
          type="date"
          className={styles.input}
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          min={min}
          max={max}
          {...props}
        />
        <span className={styles.icon}>📅</span>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
