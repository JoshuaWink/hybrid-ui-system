/**
 * Theme Palette Stories
 * 
 * Showcase the @hybrid/ui-system theme in all MUI components
 * Demonstrates: colors, typography, component overrides
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Paper,
  Chip,
} from '@mui/material';
import { Check, Warning, Error, Info } from '@mui/icons-material';

const meta = {
  title: 'Theme/Theme Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of the @hybrid/ui-system theme applied to MUI components',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default - Full theme showcase
 */
export const Default: Story = {
  render: () => (
    <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Stack spacing={6}>
        {/* Header */}
        <Box>
          <Typography variant="h3" sx={{ mb: 1, fontWeight: 800 }}>
            @hybrid/ui-system Theme
          </Typography>
          <Typography variant="body1" color="textSecondary">
            MUI theme with dark mode, semantic colors, and component overrides
          </Typography>
        </Box>

        {/* Palette Colors */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Semantic Colors
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {[
              { name: 'Success', color: 'success.main', icon: Check },
              { name: 'Warning', color: 'warning.main', icon: Warning },
              { name: 'Error', color: 'error.main', icon: Error },
              { name: 'Info', color: 'info.main', icon: Info },
            ].map(({ name, color, icon: Icon }) => (
              <Paper
                key={name}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: color,
                  color: 'white',
                  minWidth: 200,
                }}
              >
                <Icon />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {name}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Typography */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Typography Scale
          </Typography>
          <Stack spacing={2}>
            {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'subtitle1', 'subtitle2'] as const).map(
              (variant) => (
                <Typography key={variant} variant={variant}>
                  {variant}: The quick brown fox jumps over the lazy dog
                </Typography>
              )
            )}
          </Stack>
        </Box>

        {/* Buttons */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Buttons
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="outlined" color="primary">
              Outlined
            </Button>
            <Button variant="text" color="primary">
              Text
            </Button>
          </Stack>
        </Box>

        {/* Cards */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Cards
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {[
              { title: 'Default Card', desc: 'Standard card with theme colors' },
              { title: 'Info Card', desc: 'Card using theme palette' },
            ].map(({ title, desc }) => (
              <Card key={title} sx={{ flex: 1, minWidth: 250 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Form Elements */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Form Elements
          </Typography>
          <Stack spacing={2} sx={{ maxWidth: 400 }}>
            <TextField label="Text Input" placeholder="Enter text" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <TextField label="Disabled" disabled fullWidth />
          </Stack>
        </Box>

        {/* Chips */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Chips
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" icon={<Check />} color="success" />
            <Chip label="Warning" color="warning" />
            <Chip label="Error" color="error" />
          </Stack>
        </Box>

        {/* Background & Text Colors */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            Text Colors
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body1" color="textPrimary">
              Primary Text - Used for main content
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Secondary Text - Used for supporting content
            </Typography>
            <Typography variant="body1" color="textDisabled">
              Disabled Text - Used for inactive elements
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};

/**
 * Light Mode - Same theme in light context
 */
export const LightMode: Story = {
  render: () => (
    <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Light Mode Example
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
      </Box>
    </Box>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Component Overrides - Theme component styling
 */
export const ComponentOverrides: Story = {
  render: () => (
    <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            MUI Component Overrides
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            All MUI components automatically inherit theme styling
          </Typography>
        </Box>

        {/* Buttons get theme colors */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Buttons (no text transform)
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Default Contained</Button>
            <Button variant="outlined">Outlined Button</Button>
            <Button variant="text">Text Button</Button>
          </Stack>
        </Box>

        {/* TextField gets theme borders and text colors */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            TextField (theme borders & text)
          </Typography>
          <TextField label="Themed input" fullWidth sx={{ maxWidth: 300 }} />
        </Box>

        {/* Paper/Card inherit theme backgrounds */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Paper (no background image)
          </Typography>
          <Paper sx={{ p: 2, maxWidth: 400 }}>
            <Typography>Clean paper without background pattern</Typography>
          </Paper>
        </Box>

        {/* Chips get semantic colors */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Chips (semantic colors)
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Success" color="success" variant="filled" />
            <Chip label="Warning" color="warning" variant="filled" />
            <Chip label="Error" color="error" variant="filled" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
};
