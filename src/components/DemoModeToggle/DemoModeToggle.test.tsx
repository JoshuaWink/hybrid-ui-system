import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DemoModeToggle } from './DemoModeToggle';

describe('DemoModeToggle', () => {
  it('renders', () => {
    const { container } = render(<DemoModeToggle />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
