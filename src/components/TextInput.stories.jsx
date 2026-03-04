import React from 'react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Atomic/Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'phone', 'number'],
    },
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

export const Default = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithValue = {
  args: {
    label: 'Full Name',
    value: 'Patrick',
    placeholder: 'Enter your name',
  },
};

export const Required = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
    type: 'email',
  },
};

export const WithError = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    type: 'email',
  },
};

export const WithHelperText = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

export const Disabled = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <TextInput
        size="sm"
        label="Small Input"
        placeholder="Small size"
      />
      <TextInput
        size="md"
        label="Medium Input"
        placeholder="Medium size (default)"
      />
      <TextInput
        size="lg"
        label="Large Input"
        placeholder="Large size"
      />
    </div>
  ),
};

export const Types = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <TextInput
        type="text"
        label="Text Input"
        placeholder="Regular text"
      />
      <TextInput
        type="email"
        label="Email Input"
        placeholder="your@email.com"
      />
      <TextInput
        type="password"
        label="Password Input"
        placeholder="••••••••"
      />
      <TextInput
        type="phone"
        label="Phone Input"
        placeholder="+1 (555) 000-0000"
      />
      <TextInput
        type="number"
        label="Number Input"
        placeholder="0"
      />
    </div>
  ),
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Default</h3>
        <TextInput
          label="Default State"
          placeholder="Type something..."
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Filled</h3>
        <TextInput
          label="Filled State"
          value="Filled with value"
          placeholder="Placeholder"
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Error</h3>
        <TextInput
          label="Error State"
          value="invalid"
          error="This field is required"
          placeholder="Placeholder"
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Disabled</h3>
        <TextInput
          label="Disabled State"
          value="Disabled"
          disabled
          placeholder="Placeholder"
        />
      </div>
    </div>
  ),
};
