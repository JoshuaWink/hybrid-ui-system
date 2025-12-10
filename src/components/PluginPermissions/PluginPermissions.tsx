import React from 'react';
import { Box, Typography } from '@mui/material';

interface PluginPermissionsProps {
  permissions?: string[];
}

export function PluginPermissions({ permissions = [] }: PluginPermissionsProps) {
  return (
    <Box data-testid="plugin-permissions">
      <Typography variant="h6">Permissions</Typography>
      {permissions.map((p, i) => <div key={i}>{p}</div>)}
    </Box>
  );
}
