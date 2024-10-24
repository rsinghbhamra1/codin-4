import { Meta, StoryFn } from '@storybook/react';
import { Card } from './index';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    cardTitle: { control: 'text', defaultValue: 'Card Title' },
    cardContent: { control: 'text', defaultValue: 'Card Content' },
    backgroundColor: { control: 'color', defaultValue: '#ffffff' },
    textColor: { control: 'color', defaultValue: '#000000' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
