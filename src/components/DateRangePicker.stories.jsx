import { DateRangePicker } from './DateRangePicker';
import { useState } from 'react';

export default {
  title: 'Form/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const [startDate, setStartDate] = useState(args.startDate || '');
  const [endDate, setEndDate] = useState(args.endDate || '');

  return (
    <DateRangePicker
      {...args}
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Ready By',
};

export const WithValues = Template.bind({});
WithValues.args = {
  label: 'Ready By',
  startDate: '2026-03-01',
  endDate: '2026-03-31',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Ready By',
  disabled: true,
  startDate: '2026-03-01',
  endDate: '2026-03-31',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Ready By',
  error: 'Invalid date range',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Ready By',
  helperText: 'Select a date range for filtering bookings',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Ready By',
  required: true,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Ready By',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Ready By',
  size: 'lg',
};

export const WithConstraints = Template.bind({});
WithConstraints.args = {
  label: 'Ready By',
  minDate: '2026-03-01',
  maxDate: '2026-03-31',
  helperText: 'Select dates within March 2026',
};
