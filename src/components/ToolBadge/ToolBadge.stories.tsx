import type { Meta, StoryObj } from '@storybook/react';
import { ToolBadge } from './ToolBadge';

const meta = { component: ToolBadge, tags: ['autodocs'], title: 'Micro/ToolBadge' } satisfies Meta<typeof ToolBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
