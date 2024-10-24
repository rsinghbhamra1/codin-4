import { Meta, StoryFn } from "@storybook/react";
import { RadioButton } from "./index";
import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    labelText: { control: "text", defaultValue: "Radio Button" },
    textColor: { control: "color", defaultValue: "#1e3a8a" },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: "Default Radio",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  labelText: "Disabled Radio",
  disabled: true,
};
