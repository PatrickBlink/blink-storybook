import { TextArea } from './TextArea';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const WithValue = {
  args: {
    label: 'Message',
    value: 'This is a sample message for the text area component.',
    rows: 4,
  },
};

export const WithCharLimit = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message (max 200 characters)...',
    maxLength: 200,
    rows: 4,
  },
};

export const Disabled = {
  args: {
    label: 'Message',
    value: 'This field is disabled and cannot be edited.',
    disabled: true,
    rows: 4,
  },
};

export const WithError = {
  args: {
    label: 'Message',
    error: 'Message is required',
    rows: 4,
  },
};

export const WithHelperText = {
  args: {
    label: 'Message',
    helperText: 'Please provide a detailed description of your issue',
    rows: 4,
  },
};

export const Required = {
  args: {
    label: 'Message',
    required: true,
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const Small = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    size: 'sm',
    rows: 3,
  },
};

export const Large = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    size: 'lg',
    rows: 6,
  },
};

export const LongContent = {
  args: {
    label: 'Message',
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
    rows: 5,
  },
};
