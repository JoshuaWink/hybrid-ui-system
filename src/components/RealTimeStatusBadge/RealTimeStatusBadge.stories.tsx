import type { Meta, StoryObj } from '@storybook/react';
import { RealTimeStatusBadge } from './RealTimeStatusBadge';

const meta = { component: RealTimeStatusBadge, tags: ['autodocs'], title: 'Micro/RealTimeStatusBadge' } satisfies Meta<typeof RealTimeStatusBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
