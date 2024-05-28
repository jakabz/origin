import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TreeNavigation } from '../components/TreeNavigation/TreeNavigation';
import { NavigationItems } from '../components/TreeNavigation/simpleData';

const meta = {
  title: 'CollabIT/TreeNavigation',
  component: TreeNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { changeNavigation: fn() },
} satisfies Meta<typeof TreeNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Edit: Story = {
  args: {
    navigationItems: NavigationItems,
    editMode: true,
  },
};

export const Display: Story = {
    args: {
      navigationItems: NavigationItems,
      editMode: false,
    },
  };