import React from 'react';
import styles from './RadioButton.module.css';

export const RadioButton = ({
  id,
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <div className={`${styles.radioWrapper} ${disabled ? styles.disabled : ''}`}>
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
        {...props}
      />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.radioCircle}></span>
        {label}
      </label>
    </div>
  );
};

export const RadioGroup = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  name,
  ...props
}) => {
  return (
    <fieldset className={`${styles.radioGroup} ${disabled ? styles.disabled : ''}`} disabled={disabled}>
      {label && <legend className={styles.legend}>{label}</legend>}
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            id={`${name}-${option.value}`}
            label={option.label}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            disabled={disabled || option.disabled}
            {...props}
          />
        ))}
      </div>
    </fieldset>
  );
};
