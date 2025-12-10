import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PluginCard } from './PluginCard';

describe('PluginCard', () => {
  it('renders', () => {
    const { container } = render(<PluginCard />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
