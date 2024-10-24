import { Meta, StoryFn } from '@storybook/react';
import { Img } from './index';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text', defaultValue: 'https://picsum.photos/1920/1080' },
    altText: { control: 'text', defaultValue: 'Placeholder Image' },
    borderRadius: { control: 'text', defaultValue: '5px' },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  src: 'https://picsum.photos/1920/1080',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  src: 'https://picsum.photos/1920/1080',
};
