import { Meta, StoryFn } from '@storybook/react';
import { HeroImage } from './index';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundImage: {
      control: 'text',
      defaultValue: 'https://picsum.photos/1920/1080',
    },
    heroText: { control: 'text', defaultValue: 'Hero Content' },
    textColor: { control: 'color', defaultValue: '#ffffff' },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  backgroundImage: 'https://picsum.photos/1920/1080',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  backgroundImage: 'https://picsum.photos/1920/1080',
};
