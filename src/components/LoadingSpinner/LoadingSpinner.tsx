/**
 * LoadingSpinner Component
 * 
 * Animated loading indicator for async operations
 * Supports multiple sizes and custom labels
 */

import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

export interface LoadingSpinnerProps {
  /** Size preset: 'small' (24px), 'medium' (40px), 'large' (56px) */
  size?: 'small' | 'medium' | 'large';
  /** Custom pixel size (overrides size prop) */
  pixelSize?: number;
  /** Optional loading label below spinner */
  label?: string;
  /** Thickness of the spinner line (default: 3.6) */
  thickness?: number;
  /** Spinner variant (default: 'indeterminate') */
  variant?: 'circular' | 'determinate';
  /** MUI sx prop for custom styling */
  sx?: any;
}

const sizeMap = {
  small: 24,
  medium: 40,
  large: 56,
};

export function LoadingSpinner({
  size = 'medium',
  pixelSize,
  label,
  thickness = 3.6,
  variant = 'indeterminate',
  sx,
}: LoadingSpinnerProps) {
  const diameter = pixelSize || sizeMap[size];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        ...sx,
      }}
    >
      <CircularProgress
        size={diameter}
        thickness={thickness}
        variant={variant === 'circular' ? 'indeterminate' : 'indeterminate'}
      />
      {label && (
        <Typography variant="body2" color="textSecondary">
          {label}
        </Typography>
      )}
    </Box>
  );
}

export default LoadingSpinner;
