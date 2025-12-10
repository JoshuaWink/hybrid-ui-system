import type { Meta, StoryObj } from '@storybook/react';
import { ConfigCard } from './ConfigCard';

const meta = { component: ConfigCard, tags: ['autodocs'], title: 'Micro/ConfigCard' } satisfies Meta<typeof ConfigCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
