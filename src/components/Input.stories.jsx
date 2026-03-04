import React from 'react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'date'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue = {
  args: {
    placeholder: 'Enter text...',
    value: 'Sample value',
  },
};

export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter email address...',
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Error = {
  args: {
    placeholder: 'Enter text...',
    error: true,
  },
};

export const Disabled = {
  args: {
    placeholder: 'Disabled input...',
    disabled: true,
    value: 'Cannot edit',
  },
};

export const Number = {
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
  },
};
