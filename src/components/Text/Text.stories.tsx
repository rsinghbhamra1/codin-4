import { Meta, StoryFn } from '@storybook/react';
import { Text } from './index';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text', defaultValue: 'Sample Text' },
    textColor: { control: 'color', defaultValue: '#000000' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
