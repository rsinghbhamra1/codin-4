import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from './index';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    backgroundColor: { control: 'color', defaultValue: '#ffffff' },
    textColor: { control: 'color', defaultValue: '#1e3a8a' },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  disabled: true,
};
