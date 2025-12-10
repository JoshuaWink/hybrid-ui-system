import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ComingSoonCardProps {
  title?: string;
}

export function ComingSoonCard({ title = 'Coming Soon' }: ComingSoonCardProps) {
  return (
    <Card data-testid="coming-soon-card">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="textSecondary">This feature is coming soon</Typography>
      </CardContent>
    </Card>
  );
}
