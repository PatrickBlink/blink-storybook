import React, { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Form/DateInput',
  component: DateInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return <DateInput {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Date',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Select Date',
  value: '2026-03-05',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select Date',
  value: '2026-03-05',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Select Date',
  error: 'Date is required',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Select Date',
  helperText: 'Choose a date within the next 30 days',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Select Date',
  required: true,
};

export const WithConstraints = Template.bind({});
WithConstraints.args = {
  label: 'Select Date',
  min: '2026-03-01',
  max: '2026-03-31',
  helperText: 'Select a date within March 2026',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Select Date',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Select Date',
  size: 'lg',
};
