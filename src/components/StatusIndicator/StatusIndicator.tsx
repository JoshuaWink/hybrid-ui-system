/**
 * StatusIndicator Component
 * 
 * Colored status indicator dot with optional pulse animation
 * Used for health checks, real-time status, connection state
 */

import React from 'react';
import { Box, Tooltip } from '@mui/material';

export type StatusIndicatorStatus = 'online' | 'offline' | 'idle' | 'busy' | 'error';

interface StatusIndicatorProps {
  status: StatusIndicatorStatus;
  size?: 'small' | 'medium' | 'large';
  pulse?: boolean;
}

function getStatusConfig(status: StatusIndicatorStatus) {
  const configs = {
    online: { color: '#4caf50', label: 'Online' },
    offline: { color: '#9e9e9e', label: 'Offline' },
    idle: { color: '#ff9800', label: 'Idle' },
    busy: { color: '#2196f3', label: 'Busy' },
    error: { color: '#f44336', label: 'Error' },
  };
  return configs[status];
}

const sizeMap = {
  small: '8px',
  medium: '12px',
  large: '16px',
};

export function StatusIndicator({
  status,
  size = 'medium',
  pulse = false,
}: StatusIndicatorProps) {
  const config = getStatusConfig(status);
  const diameter = sizeMap[size];

  return (
    <Tooltip title={config.label}>
      <Box
        data-testid="status-indicator"
        sx={{
          display: 'inline-block',
          width: diameter,
          height: diameter,
          borderRadius: '50%',
          backgroundColor: config.color,
          animation: pulse ? 'pulse 2s ease-in-out infinite' : 'none',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
        }}
      />
    </Tooltip>
  );
}

export default StatusIndicator;
