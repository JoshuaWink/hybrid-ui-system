import type { Meta, StoryObj } from '@storybook/react';
import { StatusIndicator } from './StatusIndicator';

const meta = { component: StatusIndicator, tags: ['autodocs'], title: 'Micro/StatusIndicator' } satisfies Meta<typeof StatusIndicator>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = { args: { status: 'online' } };
export const Offline: Story = { args: { status: 'offline' } };
export const Pulsing: Story = { args: { status: 'online', pulse: true } };
