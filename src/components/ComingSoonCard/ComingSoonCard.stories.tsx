import type { Meta, StoryObj } from '@storybook/react';
import { ComingSoonCard } from './ComingSoonCard';

const meta = { component: ComingSoonCard, tags: ['autodocs'], title: 'Micro/ComingSoonCard' } satisfies Meta<typeof ComingSoonCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
