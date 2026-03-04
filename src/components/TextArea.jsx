import React, { useState } from 'react';
import styles from './TextArea.module.css';

export const TextArea = ({
  label,
  placeholder,
  value: controlledValue,
  onChange,
  error,
  disabled = false,
  required = false,
  helperText,
  rows = 4,
  maxLength,
  size = 'md',
  ...props
}) => {
  const [value, setValue] = useState(controlledValue || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  const isControlled = controlledValue !== undefined;
  const displayValue = isControlled ? controlledValue : value;
  const charCount = displayValue?.length || 0;

  return (
    <div className={`${styles.textareaWrapper} ${styles[size]}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={`${styles.textareaContainer} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          value={displayValue}
          onChange={handleChange}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          {...props}
        />
      </div>
      <div className={styles.footer}>
        {maxLength && (
          <span className={styles.charCount}>
            {charCount} / {maxLength}
          </span>
        )}
        {error && <span className={styles.errorText}>{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    </div>
  );
};
