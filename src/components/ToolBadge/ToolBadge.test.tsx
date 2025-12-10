import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ToolBadge } from './ToolBadge';

describe('ToolBadge', () => {
  it('renders', () => {
    const { container } = render(<ToolBadge />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
