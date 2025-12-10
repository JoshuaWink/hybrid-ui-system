import type { Meta, StoryObj } from '@storybook/react';
import { PluginCard } from './PluginCard';

const meta = { component: PluginCard, tags: ['autodocs'], title: 'Micro/PluginCard' } satisfies Meta<typeof PluginCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
