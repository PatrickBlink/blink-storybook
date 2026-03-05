import React, { useState, useRef, useEffect } from 'react';
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
  ...props
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingStart, setSelectingStart] = useState(true);
  const containerRef = useRef(null);

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

  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const date = parseDate(dateString);
    if (!date) return dateString;
    const day = String(date.getDate()).padStart(2, '0');
    const monthName = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
  };

  const parseDate = (dateString) => {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-');
    return new Date(year, parseInt(month) - 1, day);
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

  const isBeforeStart = (date) => {
    if (!startDate) return false;
    const start = parseDate(startDate);
    return date < start;
  };

  const isInRange = (date) => {
    if (!startDate || !endDate) return false;
    const start = parseDate(startDate);
    const end = parseDate(endDate);
    return date > start && date < end;
  };

  const isSelected = (date) => {
    const dateStr = formatDate(date);
    return dateStr === startDate || dateStr === endDate;
  };

  const handleDayClick = (day) => {
    const dateString = formatDate(day);

    if (selectingStart) {
      onStartDateChange?.(dateString);
      setSelectingStart(false);
    } else {
      // Check if clicked date is before start date - if so, swap them
      if (startDate && parseDate(dateString) < parseDate(startDate)) {
        onEndDateChange?.(startDate);
        onStartDateChange?.(dateString);
      } else {
        onEndDateChange?.(dateString);
      }
      // Close calendar after selecting end date
      setShowCalendar(false);
      setSelectingStart(true); // Reset for next range selection
    }
  };

  const handleQuickSelect = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);

    onStartDateChange?.(formatDate(start));
    onEndDateChange?.(formatDate(end));
    setShowCalendar(false);
    setSelectingStart(true);
  };

  const handleToday = () => {
    const today = formatDate(new Date());
    onStartDateChange?.(today);
    onEndDateChange?.(today);
    setShowCalendar(false);
    setSelectingStart(true);
  };

  const handleYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterday_str = formatDate(yesterday);
    onStartDateChange?.(yesterday_str);
    onEndDateChange?.(yesterday_str);
    setShowCalendar(false);
    setSelectingStart(true);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showCalendar]);

  const calendarDays = generateCalendarDays();
  const monthYear = currentMonth.toLocaleString('default', { month: 'short', year: 'numeric' }).toUpperCase();

  return (
    <div 
      className={`${styles.dateRangeWrapper} ${styles[size]}`}
      ref={containerRef}
    >
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div 
        className={`${styles.dateRangeContainer} ${error ? styles.error : ''} ${
          disabled ? styles.disabled : ''
        }`}
      >
        {/* Start Date Display */}
        {startDate && (
          <div className={styles.dateChip}>
            <span className={styles.dateChipText}>{formatDisplayDate(startDate)}</span>
            <button
              className={styles.dateChipRemove}
              onClick={(e) => {
                e.stopPropagation();
                onStartDateChange?.('');
                setSelectingStart(true);
              }}
              type="button"
              aria-label="Remove start date"
            >
              ×
            </button>
          </div>
        )}

        {/* Separator */}
        {startDate && endDate && (
          <span className={styles.separator}>–</span>
        )}

        {/* End Date Display */}
        {endDate && (
          <div className={styles.dateChip}>
            <span className={styles.dateChipText}>{formatDisplayDate(endDate)}</span>
            <button
              className={styles.dateChipRemove}
              onClick={(e) => {
                e.stopPropagation();
                onEndDateChange?.('');
              }}
              type="button"
              aria-label="Remove end date"
            >
              ×
            </button>
          </div>
        )}

        {/* Placeholder Text when empty */}
        {!startDate && !endDate && (
          <span className={styles.placeholder}>Select date range</span>
        )}

        {/* Calendar Icon */}
        <span className={styles.calendarIcon}>📅</span>

        {/* Hidden input for click handler */}
        <div
          className={styles.clickable}
          onClick={() => !disabled && setShowCalendar(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && !disabled && setShowCalendar(true)}
        />
      </div>

      {showCalendar && !disabled && (
        <div 
          className={styles.calendarDropdown}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.calendarContent}>
            {/* Left Sidebar - Quick Select */}
            <div className={styles.quickSelectSidebar}>
              <button
                className={styles.quickSelectButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToday();
                }}
                type="button"
              >
                Today
              </button>
              <button
                className={styles.quickSelectButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleYesterday();
                }}
                type="button"
              >
                Yesterday
              </button>
              <button
                className={styles.quickSelectButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickSelect(7);
                }}
                type="button"
              >
                Last 7 days
              </button>
              <button
                className={styles.quickSelectButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickSelect(14);
                }}
                type="button"
              >
                Last 14 days
              </button>
              <button
                className={styles.quickSelectButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickSelect(30);
                }}
                type="button"
              >
                Last 30 days
              </button>
              <button
                className={styles.quickSelectButton}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                type="button"
              >
                Custom date
              </button>
            </div>

            {/* Right Side - Calendar */}
            <div className={styles.calendarPanel}>
              {/* Month/Year Navigation */}
              <div className={styles.monthNavigation}>
                <button
                  className={styles.navButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevMonth();
                  }}
                  type="button"
                >
                  ‹
                </button>
                <span className={styles.monthYear}>{monthYear}</span>
                <button
                  className={styles.navButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextMonth();
                  }}
                  type="button"
                >
                  ›
                </button>
              </div>

              {/* Weekday Headers */}
              <div className={styles.weekdaysRow}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                  <div key={day} className={styles.weekday}>
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className={styles.daysGrid}>
                {calendarDays.map((day, index) => {
                  const isBeforeStartDate = day && isBeforeStart(day);
                  const isInDateRange = day && isInRange(day);
                  const isDateSelected = day && isSelected(day);

                  return (
                    <button
                      key={index}
                      type="button"
                      className={`${styles.day} ${
                        isDateSelected ? styles.selected : ''
                      } ${isInDateRange ? styles.inRange : ''} ${
                        isBeforeStartDate ? styles.beforeStart : ''
                      } ${!day ? styles.empty : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        day && !isBeforeStartDate && handleDayClick(day);
                      }}
                      disabled={!day || isBeforeStartDate}
                    >
                      {day?.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
