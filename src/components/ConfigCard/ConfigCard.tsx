import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

export type ConfigStatus = 'active' | 'inactive' | 'warning' | 'error';

interface ConfigCardProps {
  title: string;
  description: string;
  status: ConfigStatus;
  onEdit?: () => void;
  onDelete?: () => void;
  compact?: boolean;
}

export function ConfigCard({ title, description, status, compact = false }: ConfigCardProps) {
  return (
    <Card data-testid="config-card" data-status={status}>
      <CardContent>
        <Typography variant={compact ? 'body2' : 'h6'}>{title}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
        <Chip label={status} size="small" />
      </CardContent>
    </Card>
  );
}
