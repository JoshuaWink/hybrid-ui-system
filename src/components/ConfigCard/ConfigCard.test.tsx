import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConfigCard } from './ConfigCard';

describe('ConfigCard', () => {
  it('renders', () => {
    const { container } = render(<ConfigCard />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
