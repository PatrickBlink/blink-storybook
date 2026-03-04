import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Atomic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Success = {
  args: {
    children: 'Success Button',
    variant: 'success',
  },
};

export const Error = {
  args: {
    children: 'Error Button',
    variant: 'error',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading = {
  args: {
    children: 'Loading...',
    variant: 'primary',
    loading: true,
  },
};

export const WithIcon = {
  args: {
    children: 'New Booking',
    variant: 'primary',
    icon: '➕',
    iconPosition: 'left',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Secondary</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="md">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Success</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="success" size="sm">Small</Button>
          <Button variant="success" size="md">Medium</Button>
          <Button variant="success" size="lg">Large</Button>
          <Button variant="success" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Error</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="error" size="sm">Small</Button>
          <Button variant="error" size="md">Medium</Button>
          <Button variant="error" size="lg">Large</Button>
          <Button variant="error" disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Default</h3>
        <Button variant="primary">Default State</Button>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Hover (Visual Reference)</h3>
        <Button variant="primary">Hover State</Button>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Active (Visual Reference)</h3>
        <Button variant="primary">Active State</Button>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Disabled</h3>
        <Button variant="primary" disabled>Disabled State</Button>
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Loading</h3>
        <Button variant="primary" loading>Loading State</Button>
      </div>
    </div>
  ),
};
