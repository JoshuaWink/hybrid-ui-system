import type { Meta, StoryObj } from '@storybook/react';
import { PluginPermissions } from './PluginPermissions';

const meta = { component: PluginPermissions, tags: ['autodocs'], title: 'Micro/PluginPermissions' } satisfies Meta<typeof PluginPermissions>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
