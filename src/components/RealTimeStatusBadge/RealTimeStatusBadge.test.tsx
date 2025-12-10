import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RealTimeStatusBadge } from './RealTimeStatusBadge';

describe('RealTimeStatusBadge', () => {
  it('renders', () => {
    const { container } = render(<RealTimeStatusBadge />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
