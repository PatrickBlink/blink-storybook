import React, { useState } from 'react';
import styles from './TextInput.module.css';

export const TextInput = ({
  type = 'text',
  label,
  placeholder,
  value: controlledValue,
  onChange,
  error,
  disabled = false,
  required = false,
  helperText,
  icon,
  iconPosition = 'left',
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

  return (
    <div className={`${styles.inputWrapper} ${styles[size]}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={`${styles.inputContainer} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
        {icon && iconPosition === 'left' && <span className={styles.iconLeft}>{icon}</span>}
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder || label}
          value={displayValue}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        {icon && iconPosition === 'right' && <span className={styles.iconRight}>{icon}</span>}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
