# @hybrid/ui-system

Unified UI system for Hybrid CI/CD platform combining theme configuration and microcomponents.

## Features

- 🎨 **Theme System**: MUI-based dark/light theme with semantic colors
- 🧩 **Microcomponents**: 11 reusable atomic components
- 📱 **Responsive**: Mobile-first responsive design
- ♿ **Accessible**: WCAG AA compliance built-in
- 🧪 **Fully Tested**: Vitest + Cypress component tests + Storybook stories
- 📦 **Zero Dependencies**: Uses only MUI and React (peer dependencies)

## Installation

```bash
npm install @hybrid/ui-system
# or
pnpm add @hybrid/ui-system
```

## Quick Start

### Theme Setup

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

### Using Microcomponents

```tsx
import {
  LoadingSpinner,
  StatusIndicator,
  ConfigCard,
  ToolBadge,
  PluginCard,
} from '@hybrid/ui-system';

export function Dashboard() {
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <StatusIndicator status="healthy" pulse />
      <ConfigCard title="Settings" description="App configuration" />
      <ToolBadge name="GitHub" category="ci" verified />
      <PluginCard plugin={pluginData} />
    </>
  );
}
```

## Microcomponents

| Component | Purpose | Use Case |
|-----------|---------|----------|
| **LoadingSpinner** | Async operation indicator | Show while fetching data |
| **StatusIndicator** | Status visualization | Health check, real-time status |
| **StatusCard** | Metric display | Dashboard KPI cards |
| **ConfigCard** | Configuration display | Settings, properties |
| **PluginCard** | Plugin information | Plugin marketplace, registry |
| **ToolBadge** | Tool status badge | Tool integrations |
| **PluginPermissions** | Permission matrix | Manage permissions |
| **SandboxPreview** | Iframe preview | Safe content preview |
| **RealTimeStatusBadge** | Real-time status chip | Live status updates |
| **ComingSoonCard** | Feature placeholder | Future features |
| **DemoModeToggle** | Feature flag toggle | Demo mode toggle |

## Theming Strategy

### Phase 1: Current (Active)
- Use MUI components directly with `@hybrid/ui-system` theme applied
- Apply theme tokens via `sx` props
- Custom microcomponents for animations + business logic

### Phase 2: Future
- Comprehensive theming audit
- Ensure consistent theme token usage
- Document customization points

### Phase 3: Optional Enhancement
- Golden ratio (φ ≈ 1.618) sizing scale
- Mathematically harmonious spacing
- Experimental, requires A/B testing

## File Structure

```
src/
├── theme/
│   ├── index.ts          # Theme exports
│   ├── hybridTheme.ts    # MUI theme configuration
│   └── types.ts          # TypeScript types
│
├── components/
│   ├── LoadingSpinner/
│   ├── StatusIndicator/
│   ├── ConfigCard/
│   ├── PluginCard/
│   ├── ToolBadge/
│   ├── PluginPermissions/
│   ├── SandboxPreview/
│   ├── RealTimeStatusBadge/
│   ├── ComingSoonCard/
│   ├── DemoModeToggle/
│   └── StatusCard/
│
└── index.ts              # Main export file
```

## Component Examples

### LoadingSpinner

```tsx
import { LoadingSpinner } from '@hybrid/ui-system';

export function DataFetch() {
  const [loading, setLoading] = useState(true);
  
  return (
    <>
      {loading && <LoadingSpinner />}
    </>
  );
}
```

### StatusIndicator

```tsx
import { StatusIndicator } from '@hybrid/ui-system';

export function HealthCheck() {
  return (
    <StatusIndicator 
      status="healthy"     // 'healthy' | 'degraded' | 'unhealthy'
      size="medium"        // 'small' | 'medium' | 'large'
      pulse={true}         // Optional animation
    />
  );
}
```

### ConfigCard

```tsx
import { ConfigCard } from '@hybrid/ui-system';

export function Settings() {
  return (
    <ConfigCard 
      title="Database Configuration"
      description="Connection settings for primary database"
      icon={<DatabaseIcon />}
    >
      {/* Content */}
    </ConfigCard>
  );
}
```

## Development

### Running Tests

```bash
# Unit tests
npm run test

# Watch mode
npm run test -- --watch

# Coverage
npm run test -- --coverage
```

### Storybook

```bash
# Start Storybook
npm run storybook

# Build static site
npm run build:storybook
```

### Building

```bash
npm run build
```

## Contributing

1. Create a feature branch
2. Add component (`.tsx` + `.stories.tsx` + `.test.tsx` + `.cy.tsx`)
3. Write tests (RED phase → GREEN phase)
4. Submit PR

## License

MIT

## Repository

https://github.com/hybrid-team/@hybrid/ui-system
