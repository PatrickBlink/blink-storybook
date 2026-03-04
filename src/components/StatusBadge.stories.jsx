import React from 'react';
import { StatusBadge } from './StatusBadge';

const meta = {
  title: 'Business Components/Status Badge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'text' },
    type: {
      control: 'select',
      options: ['booking', 'quote', 'quote-response', 'run', 'item', 'leg'],
    },
  },
};

export default meta;

export const BookingStatus = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <StatusBadge type="booking" status="pending" />
      <StatusBadge type="booking" status="pending-shipper" />
      <StatusBadge type="booking" status="booked" />
      <StatusBadge type="booking" status="allocated" />
      <StatusBadge type="booking" status="in-progress" />
      <StatusBadge type="booking" status="completed" />
      <StatusBadge type="booking" status="invoiced" />
      <StatusBadge type="booking" status="cancelled" />
      <StatusBadge type="booking" status="exception" />
      <StatusBadge type="booking" status="rejected" />
    </div>
  ),
};

export const QuoteRequestStatus = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <StatusBadge type="quote" status="active" />
      <StatusBadge type="quote" status="expired" />
      <StatusBadge type="quote" status="completed" />
      <StatusBadge type="quote" status="cancelled" />
    </div>
  ),
};

export const QuoteResponseStatus = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <StatusBadge type="quote-response" status="pending" />
      <StatusBadge type="quote-response" status="accepted" />
      <StatusBadge type="quote-response" status="rejected" />
      <StatusBadge type="quote-response" status="expired" />
      <StatusBadge type="quote-response" status="withdrawn" />
    </div>
  ),
};

export const RunStatus = {
  args: {
    status: "test",
    type: "run"
  },
  render:() => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <StatusBadge type="run" status="booked" />
      <StatusBadge type="run" status="allocated" />
      <StatusBadge type="run" status="acknowledged" />
      <StatusBadge type="run" status="in-progress" />
      <StatusBadge type="run" status="completed" />
    </div>
  )
};

export const ItemStatus = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <StatusBadge type="item" status="pending" />
      <StatusBadge type="item" status="booked" />
      <StatusBadge type="item" status="allocated" />
      <StatusBadge type="item" status="collected" />
      <StatusBadge type="item" status="delivered" />
      <StatusBadge type="item" status="exception" />
      <StatusBadge type="item" status="cancelled" />
    </div>
  ),
};

export const LegStatus = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <StatusBadge type="leg" status="booked" />
      <StatusBadge type="leg" status="allocated" />
      <StatusBadge type="leg" status="at-collection" />
      <StatusBadge type="leg" status="collected" />
      <StatusBadge type="leg" status="at-delivery" />
      <StatusBadge type="leg" status="delivered" />
      <StatusBadge type="leg" status="exception" />
    </div>
  ),
};

export const AllStatuses = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Booking Status</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <StatusBadge type="booking" status="pending" />
          <StatusBadge type="booking" status="booked" />
          <StatusBadge type="booking" status="in-progress" />
          <StatusBadge type="booking" status="completed" />
          <StatusBadge type="booking" status="exception" />
        </div>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Quote Status</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <StatusBadge type="quote" status="active" />
          <StatusBadge type="quote" status="completed" />
          <StatusBadge type="quote" status="expired" />
        </div>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Item Status</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <StatusBadge type="item" status="pending" />
          <StatusBadge type="item" status="booked" />
          <StatusBadge type="item" status="collected" />
          <StatusBadge type="item" status="delivered" />
        </div>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Leg Status</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <StatusBadge type="leg" status="booked" />
          <StatusBadge type="leg" status="at-collection" />
          <StatusBadge type="leg" status="collected" />
          <StatusBadge type="leg" status="delivered" />
        </div>
      </div>
    </div>
  ),
};
