import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";
import {
  Toast,
  ToastAction,
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const meta: Meta<typeof Toast> = {
  title: "ui/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = Omit<StoryObj<typeof Toast>, "args"> & {
  args: Omit<ToasterToast, "id">;
};

type ToasterToast = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

const ToastExample = (args: Story["args"]) => {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast(args);
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

export const Simple: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    description: "Your message has been sent.",
  },
};

export const WithTitle: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
  },
};

export const WithAction: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  },
};

export const Destructive: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    variant: "destructive",
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
    action: <ToastAction altText="Try again">Try again</ToastAction>,
  },
};
