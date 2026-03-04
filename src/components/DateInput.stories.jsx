import { DateInput } from './DateInput';

export default {
  title: 'Form/DateInput',
  component: DateInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Select Date',
    placeholder: 'MM/DD/YYYY',
  },
};

export const WithValue = {
  args: {
    label: 'Select Date',
    value: '2026-03-05',
  },
};

export const Disabled = {
  args: {
    label: 'Select Date',
    value: '2026-03-05',
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'Select Date',
    error: 'Date is required',
  },
};

export const WithHelperText = {
  args: {
    label: 'Select Date',
    helperText: 'Choose a date within the next 30 days',
  },
};

export const Required = {
  args: {
    label: 'Select Date',
    required: true,
  },
};

export const WithConstraints = {
  args: {
    label: 'Select Date',
    min: '2026-03-01',
    max: '2026-03-31',
    helperText: 'Select a date within March 2026',
  },
};

export const Small = {
  args: {
    label: 'Select Date',
    size: 'sm',
  },
};

export const Large = {
  args: {
    label: 'Select Date',
    size: 'lg',
  },
};
