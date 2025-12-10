# @hybrid/ui-system

MUI Theme configuration for Hybrid CI/CD platform. Provides dark mode, semantic colors, and component overrides for all MUI components across projects.

## Features

- 🎨 **Dark Mode Theme**: MUI-based dark theme with semantic colors
- 🎯 **Component Overrides**: Consistent styling for all MUI components (buttons, fields, cards, etc.)
- 🌈 **Semantic Colors**: Success, warning, error, info palettes
- 📝 **Typography**: Consistent font family and sizing
- 📦 **Lightweight**: Just theme, no component dependencies

## Installation

```bash
npm install @hybrid/ui-system
# or
pnpm add @hybrid/ui-system
```

## Quick Start

### Setup

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { hybridTheme } from '@hybrid/ui-system';

export default function App() {
  return (
    <ThemeProvider theme={hybridTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using MUI Components

All MUI components automatically inherit the theme:

```tsx
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

export function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h6">Dashboard</Typography>
          <Button variant="contained">Action</Button>
        </CardContent>
      </Card>
    </Box>
  );
}
```

**Theme automatically styles**: Button colors, Card backgrounds, Typography colors, all form fields, AppBar, Drawer, Table, Dialog, etc.

## Theme Details

### Palette

**Colors**:
- `primary`: #1976d2 (blue)
- `secondary`: #dc004e (pink)
- `success`: #4caf50 (green)
- `warning`: #ff9800 (orange)
- `error`: #f44336 (red)
- `info`: #2196f3 (cyan)
- Background: #0d1117 (dark gray)
- Text: #e6edf3 (light gray)

### Typography

- Font Family: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Headings: h1-h6 with font weights 600-700
- Body: body1 (primary text), body2 (secondary text)
- Sizes: Responsive from 0.875rem to 2.5rem

### Component Overrides

All MUI components are styled:
- Button: No text transform, 600 font weight
- Paper/Card: No background image
- AppBar, List, Menu, Dialog, Drawer, Table: Color-mapped
- TextField, Input: Border and focus colors
- Chip, Badge, Icon: Semantic color mapping

## File Structure

```
src/
├── theme/
│   ├── index.ts          # Theme exports
│   └── hybridTheme.ts    # MUI theme configuration
│
└── index.ts              # Main export
```

## Development

### Building

```bash
npm run build
```

### Watch Mode

```bash
npm run dev
```

## Contributing

1. Create a feature branch
2. Update theme configuration in `src/theme/hybridTheme.ts`
3. Build and test locally
4. Submit PR

## License

MIT

## Repository

https://github.com/hybrid-team/@hybrid/ui-system
