import React from 'react';
import styles from './StatusBadge.module.css';

export const StatusBadge = ({
  status,
  type = 'booking',
  children,
  ...props
}) => {
  // Map of status types to their color configurations
  const statusConfig = {
    booking: {
      pending: { bg: '#F2CA3B', text: '#1A1A1A' },
      'pending-shipper': { bg: '#F2CA3B', text: '#1A1A1A' },
      booked: { bg: '#0096E1', text: '#FFFFFF' },
      allocated: { bg: '#9A2380', text: '#FFFFFF' },
      'in-progress': { bg: '#EA9C2E', text: '#FFFFFF' },
      completed: { bg: '#9ACF30', text: '#1A1A1A' },
      invoiced: { bg: '#5D8916', text: '#FFFFFF' },
      cancelled: { bg: '#7B7B7B', text: '#FFFFFF' },
      exception: { bg: '#ED5958', text: '#FFFFFF' },
      rejected: { bg: '#ED5958', text: '#FFFFFF' },
    },
    quote: {
      active: { bg: '#0096E1', text: '#FFFFFF' },
      expired: { bg: '#7B7B7B', text: '#FFFFFF' },
      completed: { bg: '#9ACF30', text: '#1A1A1A' },
      cancelled: { bg: '#7B7B7B', text: '#FFFFFF' },
    },
    'quote-response': {
      pending: { bg: '#F2CA3B', text: '#1A1A1A' },
      accepted: { bg: '#9ACF30', text: '#1A1A1A' },
      rejected: { bg: '#ED5958', text: '#FFFFFF' },
      expired: { bg: '#7B7B7B', text: '#FFFFFF' },
      withdrawn: { bg: '#7B7B7B', text: '#FFFFFF' },
    },
    run: {
      booked: { bg: '#0096E1', text: '#FFFFFF' },
      allocated: { bg: '#9A2380', text: '#FFFFFF' },
      acknowledged: { bg: '#405E8A', text: '#FFFFFF' },
      'in-progress': { bg: '#EA9C2E', text: '#FFFFFF' },
      completed: { bg: '#9ACF30', text: '#1A1A1A' },
    },
    item: {
      pending: { bg: '#F2CA3B', text: '#1A1A1A' },
      booked: { bg: '#0096E1', text: '#FFFFFF' },
      allocated: { bg: '#9A2380', text: '#FFFFFF' },
      collected: { bg: '#EA9C2E', text: '#FFFFFF' },
      delivered: { bg: '#9ACF30', text: '#1A1A1A' },
      exception: { bg: '#ED5958', text: '#FFFFFF' },
      cancelled: { bg: '#7B7B7B', text: '#FFFFFF' },
    },
    leg: {
      booked: { bg: '#0096E1', text: '#FFFFFF' },
      allocated: { bg: '#9A2380', text: '#FFFFFF' },
      'at-collection': { bg: '#F2CA3B', text: '#1A1A1A' },
      collected: { bg: '#EA9C2E', text: '#FFFFFF' },
      'at-delivery': { bg: '#BBDE76', text: '#1A1A1A' },
      delivered: { bg: '#9ACF30', text: '#1A1A1A' },
      exception: { bg: '#ED5958', text: '#FFFFFF' },
    },
  };

  const typeConfig = statusConfig[type] || statusConfig.booking;
  const colors = typeConfig[status] || { bg: '#7B7B7B', text: '#FFFFFF' };

  return (
    <span
      className={styles.badge}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
      {...props}
    >
      {children || status}
    </span>
  );
};
