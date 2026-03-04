import React, { useState } from 'react';
import styles from './Select.module.css';

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  disabled = false,
  error,
  helperText,
  required = false,
  size = 'md',
  ...props
}) => {
  return (
    <div className={`${styles.selectWrapper} ${styles[size]}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={`${styles.selectContainer} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
        <select
          className={styles.select}
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron}>▼</span>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
