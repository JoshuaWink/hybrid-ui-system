import React from 'react';
import { Chip, Box } from '@mui/material';
import { CheckCircle as CheckIcon } from '@mui/icons-material';

export type ToolCategory = 'ci' | 'deployment' | 'monitoring' | 'security' | 'other';
export type BadgeSize = 'small' | 'medium' | 'large';

interface ToolBadgeProps {
  name: string;
  version?: string;
  category: ToolCategory;
  verified?: boolean;
  size?: BadgeSize;
}

export function ToolBadge({ name, version, verified, size = 'medium' }: ToolBadgeProps) {
  return (
    <Box data-testid="tool-badge" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip label={name} size={size === 'large' ? 'medium' : 'small'} />
      {verified && <CheckIcon fontSize="small" color="success" />}
      {version && <span>{version}</span>}
    </Box>
  );
}
