import React, { useState } from 'react';
import styles from './DateRangePicker.module.css';

export const DateRangePicker = ({
  label,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  error,
  disabled = false,
  required = false,
  helperText,
  size = 'md',
  minDate,
  maxDate,
  ...props
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingStart, setSelectingStart] = useState(true);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }

    return days;
  };

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const parseDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString + 'T00:00:00');
  };

  const isInRange = (date) => {
    if (!startDate || !endDate) return false;
    const start = parseDate(startDate);
    const end = parseDate(endDate);
    return date >= start && date <= end;
  };

  const isSelected = (date) => {
    if (selectingStart && startDate) {
      return formatDate(date) === startDate;
    }
    if (!selectingStart && endDate) {
      return formatDate(date) === endDate;
    }
    return false;
  };

  const handleDayClick = (day) => {
    const dateString = formatDate(day);
    if (selectingStart) {
      onStartDateChange?.(dateString);
      setSelectingStart(false);
    } else {
      onEndDateChange?.(dateString);
      if (startDate && endDate) {
        setShowCalendar(false);
      }
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const calendarDays = generateCalendarDays();
  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className={`${styles.dateRangeWrapper} ${styles[size]}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.rangeContainer}>
        {/* Start Date */}
        <div className={`${styles.dateInputGroup} ${styles.startDate}`}>
          <div
            className={`${styles.dateInputContainer} ${error ? styles.error : ''} ${
              disabled ? styles.disabled : ''
            }`}
            onClick={() => !disabled && setShowCalendar(true)}
          >
            <input
              type="text"
              className={styles.dateInput}
              value={startDate || ''}
              onChange={(e) => onStartDateChange?.(e.target.value)}
              placeholder="Start Date"
              disabled={disabled}
              readOnly
            />
          </div>
        </div>

        {/* Separator */}
        <div className={styles.separator}>To</div>

        {/* End Date */}
        <div className={`${styles.dateInputGroup} ${styles.endDate}`}>
          <div
            className={`${styles.dateInputContainer} ${error ? styles.error : ''} ${
              disabled ? styles.disabled : ''
            }`}
            onClick={() => !disabled && setShowCalendar(true)}
          >
            <input
              type="text"
              className={styles.dateInput}
              value={endDate || ''}
              onChange={(e) => onEndDateChange?.(e.target.value)}
              placeholder="End Date"
              disabled={disabled}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {showCalendar && !disabled && (
        <div className={styles.calendarDropdown}>
          {/* Header */}
          <div className={styles.calendarHeader}>
            <button className={styles.navButton} onClick={handlePrevMonth} type="button">
              ‹
            </button>
            <span className={styles.monthYear}>{monthName}</span>
            <button className={styles.navButton} onClick={handleNextMonth} type="button">
              ›
            </button>
          </div>

          {/* Weekdays */}
          <div className={styles.weekdaysRow}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className={styles.weekday}>
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className={styles.daysGrid}>
            {calendarDays.map((day, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.day} ${
                  day
                    ? `${isSelected(day) ? styles.selected : ''} ${
                        isInRange(day) ? styles.inRange : ''
                      }`
                    : styles.empty
                }`}
                onClick={() => day && handleDayClick(day)}
                disabled={!day}
              >
                {day?.getDate()}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className={styles.calendarFooter}>
            <button
              className={styles.clearButton}
              onClick={() => {
                onStartDateChange?.('');
                onEndDateChange?.('');
                setShowCalendar(false);
              }}
              type="button"
            >
              Clear
            </button>
            <button
              className={styles.applyButton}
              onClick={() => setShowCalendar(false)}
              type="button"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
