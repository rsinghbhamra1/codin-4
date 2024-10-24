import { Meta, StoryFn } from "@storybook/react";
import { Label } from "./index";
import { LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    labelText: { control: "text", defaultValue: "Label Text" },
    textColor: { control: "color", defaultValue: "#1e3a8a" },
  },
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: "Default Label",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  labelText: "Disabled Label",
  disabled: true,
};
