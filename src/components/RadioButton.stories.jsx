import React, { useState } from 'react';
import { RadioGroup, RadioButton } from './RadioButton';

const meta = {
  title: 'Atomic/Form/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Single = {
  args: {
    id: 'radio-1',
    label: 'Option 1',
    value: 'option1',
  },
};

export const Checked = {
  args: {
    id: 'radio-checked',
    label: 'Selected Option',
    value: 'selected',
    checked: true,
  },
};

export const Disabled = {
  args: {
    id: 'radio-disabled',
    label: 'Disabled Option',
    value: 'disabled',
    disabled: true,
  },
};

export const Group = () => {
  const [selected, setSelected] = useState('carrier');

  return (
    <RadioGroup
      label="Account Type"
      name="account-type"
      value={selected}
      onChange={setSelected}
      options={[
        { label: "I'm a Carrier", value: 'carrier' },
        { label: "I'm a Shipper", value: 'shipper' },
        { label: 'Both', value: 'both' },
      ]}
    />
  );
};

export const GroupWithDisabled = () => {
  const [selected, setSelected] = useState('active');

  return (
    <RadioGroup
      label="Status"
      name="status"
      value={selected}
      onChange={setSelected}
      options={[
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive', disabled: true },
        { label: 'Pending', value: 'pending' },
      ]}
    />
  );
};

export const DisabledGroup = () => {
  return (
    <RadioGroup
      label="Disabled Group"
      name="disabled-group"
      value="option1"
      disabled
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
    />
  );
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Default</h3>
        <RadioGroup
          label="Choose one"
          name="default"
          value="option1"
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Checked/Selected</h3>
        <RadioGroup
          label="Choose one"
          name="checked"
          value="option2"
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2 (Selected)', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Disabled</h3>
        <RadioGroup
          label="Choose one"
          name="disabled"
          value="option1"
          disabled
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
        />
      </div>
    </div>
  ),
};
