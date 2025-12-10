import React, { useState } from 'react';
import { Switch, FormControlLabel, Box } from '@mui/material';

export function DemoModeToggle() {
  const [demoMode, setDemoMode] = useState(false);
  
  return (
    <Box data-testid="demo-toggle">
      <FormControlLabel
        control={<Switch checked={demoMode} onChange={(e) => setDemoMode(e.target.checked)} />}
        label="Demo Mode"
      />
    </Box>
  );
}
