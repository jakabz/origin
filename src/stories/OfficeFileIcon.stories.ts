import type { Meta, StoryObj } from '@storybook/react';
import { OfficeFileIcon } from '../components/OfficeFileIcon/OfficeFileIcon';
import { IIconSize, IIconType } from '../components/OfficeFileIcon/fileIconUrl';

const meta = {
  title: 'CollabIT/OfficeFileIcon',
  component: OfficeFileIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageType: {
      options: ['png', 'svg'],
      control: {type: 'select', labels: {png: 'png', svg: 'svg'}},
    },
    imageSize: {
      options: [16, 20, 24, 48, 96],
      control: {type: 'select', labels: {16: 'xs', 20: 's', 24: 'm', 48: 'l', 96: 'xl'}},
    },
  },
  args: {
    fileName: 'test.docx',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  }
} satisfies Meta<typeof OfficeFileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const World: Story = {
  args: {
    fileName: 'test.docx',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  },
};

export const Excel: Story = {
  args: {
    fileName: 'test.xlsx',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  },
};

export const PowerPoint: Story = {
  args: {
    fileName: 'test.pptx',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  },
};

export const Visio: Story = {
  args: {
    fileName: 'test.vsdx',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  },
};

export const Acrobat: Story = {
  args: {
    fileName: 'test.pdf',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  },
};

export const Other: Story = {
  args: {
    fileName: 'test.aaa',
    imageType: IIconType.png,
    imageSize: IIconSize.xl
  },
};