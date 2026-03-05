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
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    value ? new Date(value + 'T00:00:00') : new Date()
  );

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }

    return days;
  };

  const isSelected = (date) => {
    return formatDate(date) === value;
  };

  const handleDayClick = (day) => {
    const dateString = formatDate(day);
    onChange?.(dateString);
    setShowCalendar(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleToday = () => {
    const today = formatDate(new Date());
    onChange?.(today);
    setShowCalendar(false);
  };

  const calendarDays = generateCalendarDays();
  const monthYear = currentMonth.toLocaleString('default', { month: 'short', year: 'numeric' }).toUpperCase();

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
        onClick={() => !disabled && setShowCalendar(!showCalendar)}
      >
        <input
          type="text"
          className={styles.input}
          value={value || ''}
          placeholder="Select Date"
          disabled={disabled}
          readOnly
          {...props}
        />
        <span className={styles.icon}>📅</span>
      </div>

      {showCalendar && !disabled && (
        <div className={styles.calendarDropdown}>
          <div className={styles.quickSelectButtons}>
            <button
              className={styles.quickButton}
              onClick={handleToday}
              type="button"
            >
              Today
            </button>
          </div>

          <div className={styles.monthNavigation}>
            <button
              className={styles.navButton}
              onClick={handlePrevMonth}
              type="button"
            >
              ‹
            </button>
            <span className={styles.monthYear}>{monthYear}</span>
            <button
              className={styles.navButton}
              onClick={handleNextMonth}
              type="button"
            >
              ›
            </button>
          </div>

          <div className={styles.weekdaysRow}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
              <div key={day} className={styles.weekday}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.daysGrid}>
            {calendarDays.map((day, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.day} ${
                  day && isSelected(day) ? styles.selected : ''
                } ${!day ? styles.empty : ''}`}
                onClick={() => day && handleDayClick(day)}
                disabled={!day}
              >
                {day?.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
