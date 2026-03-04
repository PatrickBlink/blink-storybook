import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Atomic/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    id: 'checkbox-1',
    label: 'Accept terms and conditions',
  },
};

export const Checked = {
  args: {
    id: 'checkbox-checked',
    label: 'Option is checked',
    checked: true,
  },
};

export const Disabled = {
  args: {
    id: 'checkbox-disabled',
    label: 'This option is disabled',
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    id: 'checkbox-disabled-checked',
    label: 'Disabled and checked',
    checked: true,
    disabled: true,
  },
};

export const Indeterminate = {
  args: {
    id: 'checkbox-indeterminate',
    label: 'Indeterminate state (partially selected)',
    indeterminate: true,
    checked: true,
  },
};

export const Group = () => {
  const [selected, setSelected] = useState({
    option1: false,
    option2: true,
    option3: false,
  });

  const handleChange = (key) => {
    setSelected(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
      <Checkbox
        id="group-1"
        label="Item 1"
        checked={selected.option1}
        onChange={() => handleChange('option1')}
      />
      <Checkbox
        id="group-2"
        label="Item 2"
        checked={selected.option2}
        onChange={() => handleChange('option2')}
      />
      <Checkbox
        id="group-3"
        label="Item 3"
        checked={selected.option3}
        onChange={() => handleChange('option3')}
      />
    </div>
  );
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Default</h3>
        <Checkbox
          id="state-default"
          label="Default unchecked state"
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Checked</h3>
        <Checkbox
          id="state-checked"
          label="Checked state"
          checked={true}
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Disabled</h3>
        <Checkbox
          id="state-disabled"
          label="Disabled unchecked state"
          disabled
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Disabled Checked</h3>
        <Checkbox
          id="state-disabled-checked"
          label="Disabled checked state"
          checked={true}
          disabled
        />
      </div>

      <div>
        <h3 style={{ marginTop: 0, marginBottom: '12px' }}>Indeterminate</h3>
        <Checkbox
          id="state-indeterminate"
          label="Indeterminate state"
          indeterminate={true}
          checked={true}
        />
      </div>
    </div>
  ),
};
