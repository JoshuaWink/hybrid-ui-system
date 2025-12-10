import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComingSoonCard } from './ComingSoonCard';

describe('ComingSoonCard', () => {
  it('renders', () => {
    const { container } = render(<ComingSoonCard />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
