import React from 'react';
import { Box } from '@mui/material';

interface SandboxPreviewProps {
  html?: string;
  srcDoc?: string;
}

export function SandboxPreview({ html, srcDoc }: SandboxPreviewProps) {
  return (
    <Box data-testid="sandbox-preview" component="iframe" srcDoc={srcDoc || html} sx={{ width: '100%', height: '400px', border: 'none' }} />
  );
}
