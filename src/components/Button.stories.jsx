import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
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
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const Disabled = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
