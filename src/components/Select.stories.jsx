import React, { useState } from 'react';
import { Select } from './Select';

const meta = {
  title: 'Atomic/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;

const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

const shippers = [
  { label: 'Patrick Carrier', value: 'patrick' },
  { label: 'Software Integrators', value: 'software' },
  { label: 'Test Company', value: 'test' },
];

const statuses = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Booked', value: 'booked' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Completed', value: 'completed' },
];

export const Default = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
    placeholder: 'Choose one...',
  },
};

export const WithValue = () => {
  const [value, setValue] = useState('option2');
  return (
    <Select
      label="Shipper"
      options={shippers}
      value={value}
      onChange={setValue}
    />
  );
};

export const Required = {
  args: {
    label: 'Select an option',
    options: defaultOptions,
    required: true,
  },
};

export const WithError = () => {
  const [value, setValue] = useState('');
  return (
    <Select
      label="Status"
      options={statuses}
      value={value}
      onChange={setValue}
      error="Please select a status"
      placeholder="Choose status..."
    />
  );
};

export const WithHelperText = {
  args: {
    label: 'Select shipper',
    options: shippers,
    helperText: 'Search shippers by name or ID',
    placeholder: 'Type to search...',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled select',
    options: defaultOptions,
    disabled: true,
    value: 'option1',
  },
};

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
    <Select
      size="sm"
      label="Small Select"
      options={defaultOptions}
      placeholder="Small size"
    />
    <Select
      size="md"
      label="Medium Select"
      options={defaultOptions}
      placeholder="Medium size (default)"
    />
    <Select
      size="lg"
      label="Large Select"
      options={defaultOptions}
      placeholder="Large size"
    />
  </div>
);

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Default</h3>
        <Select
          label="Default State"
          options={defaultOptions}
          placeholder="Select option..."
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Filled</h3>
        <Select
          label="Filled State"
          options={shippers}
          value="patrick"
          placeholder="Select shipper..."
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Error</h3>
        <Select
          label="Error State"
          options={statuses}
          error="This field is required"
          placeholder="Select status..."
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Disabled</h3>
        <Select
          label="Disabled State"
          options={defaultOptions}
          disabled
          value="option1"
        />
      </div>
    </div>
  ),
};
