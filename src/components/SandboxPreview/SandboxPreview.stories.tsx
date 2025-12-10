import type { Meta, StoryObj } from '@storybook/react';
import { SandboxPreview } from './SandboxPreview';

const meta = { component: SandboxPreview, tags: ['autodocs'], title: 'Micro/SandboxPreview' } satisfies Meta<typeof SandboxPreview>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
