import type { Meta, StoryObj } from '@storybook/react';
import { DemoModeToggle } from './DemoModeToggle';

const meta = { component: DemoModeToggle, tags: ['autodocs'], title: 'Micro/DemoModeToggle' } satisfies Meta<typeof DemoModeToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
