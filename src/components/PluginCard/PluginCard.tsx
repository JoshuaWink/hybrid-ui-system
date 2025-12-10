import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface PluginCardProps {
  title?: string;
  description?: string;
}

export function PluginCard({ title = 'Plugin', description }: PluginCardProps) {
  return (
    <Card data-testid="plugin-card">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        {description && <Typography color="textSecondary">{description}</Typography>}
      </CardContent>
    </Card>
  );
}
