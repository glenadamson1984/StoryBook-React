import React from "react";
import Button from "./Button";
// import Center from "../Center/Center";

export default {
  title: "Buttons/Button",
  component: Button,
  // can also set args (v6) at a component level and then we dont need to specify unless to override
  args: {
    children: "Button",
  },
  // this will wrap every component in this particular story with the Center Component - you can also set global
  // decorators in preview.js
  // decorators: [(story) => <Center>{story()}</Center>],
};

// pre v6 you had to write all exports like this but we can now use a template
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

// templates although less true to react actually allow for less typing and for more reuse like example
// LongPrimaryA

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA,
  children: "Long Primary args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary",
};
