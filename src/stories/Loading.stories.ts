import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../components/Loading/Loading';

const meta = {
  title: 'CollabIT/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    spinnerSize: { control: { type: 'number', min:5, max:100, step: 1 } },
    loadingString: {
      control: {
        type: 'text',
      },
    },
    visible: {
      control: {
        type: 'boolean',
      },
    },
    bgColor: {
      control: {
        type: 'color',
      },
    },
  },
  args: {
    visible: true,
    spinnerSize: 40,
    spinnerColor: 'rgba(0, 0, 0, 1)',
    loadingString: 'Please wait...',
    loadingStringColor: 'rbba(0, 0, 0, 1)',
    loadingStringSize: 16,
    bgColor: 'rgba(0, 0, 0, 0.5)',
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    visible: true,
    spinnerSize: 40,
    spinnerColor: 'rgba(0, 0, 0, 1)',
    loadingString: 'Please wait...',
    loadingStringColor: 'rbba(0, 0, 0, 1)',
    loadingStringSize: 16,
    bgColor: 'rgba(0, 0, 0, 0.5)',
  },
};