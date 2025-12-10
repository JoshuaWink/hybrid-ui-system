import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PluginPermissions } from './PluginPermissions';

describe('PluginPermissions', () => {
  it('renders', () => {
    const { container } = render(<PluginPermissions />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
