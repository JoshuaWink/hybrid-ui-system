/**
 * StatusCard Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { StatusCard } from './StatusCard';
import {
  CheckCircle as SuccessIcon,
  WarningAmber as WarningIcon,
  ErrorOutline as ErrorIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

const meta = {
  component: StatusCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Micro/StatusCard',
} satisfies Meta<typeof StatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    label: 'Completed',
    value: 42,
    status: 'success',
    icon: <SuccessIcon sx={{ fontSize: '1.25rem' }} />,
    testId: 'success-card',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending Approvals',
    value: 5,
    status: 'warning',
    icon: <WarningIcon sx={{ fontSize: '1.25rem' }} />,
    testId: 'warning-card',
  },
};

export const Error: Story = {
  args: {
    label: 'Failed',
    value: 1,
    status: 'error',
    icon: <ErrorIcon sx={{ fontSize: '1.25rem' }} />,
    testId: 'error-card',
  },
};

export const Info: Story = {
  args: {
    label: 'Running',
    value: 12,
    status: 'info',
    icon: <InfoIcon sx={{ fontSize: '1.25rem' }} />,
    testId: 'info-card',
  },
};

export const LargeNumber: Story = {
  args: {
    label: 'Total',
    value: 1234567,
    status: 'info',
    testId: 'large-num',
  },
};

export const Clickable: Story = {
  args: {
    label: 'Jobs',
    value: 89,
    status: 'success',
    onClick: () => console.log('Clicked!'),
    testId: 'clickable-card',
  },
};
