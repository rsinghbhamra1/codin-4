import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./index";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonText: { control: "text", defaultValue: "Button Text" },
    backgroundColor: { control: "color", defaultValue: "#4ea8de" },
    textColor: { control: "color", defaultValue: "#ffffff" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: "Default Button",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonText: "Disabled Button",
  disabled: true,
};
