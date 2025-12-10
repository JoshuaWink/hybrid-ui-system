import React from 'react';
import { Chip, Box } from '@mui/material';

export function RealTimeStatusBadge() {
  return (
    <Box data-testid="realtime-badge">
      <Chip label="Live" size="small" color="primary" />
    </Box>
  );
}
