import React from "react";
import Input from "./Input";

export default {
  title: "Input Controls/Text",
  component: Input,
  // to add actions to the storybook page
  argTypes: { onClick: { action: "Clicked" } },
};

// export const Small = () => <Input size="small" placeholder="Small" />;
// export const Medium = () => <Input size="medium" placeholder="Medium" />;
// export const Large = () => <Input size="large" placeholder="Large" />;

// changing from this format above to the one below allows for the controls section at the bottom of the
// storybook page to be enabled so you can now switch between modes using the controls
const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Large",
};

Small.storyName = "Small input";
