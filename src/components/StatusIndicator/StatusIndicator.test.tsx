import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { StatusIndicator } from './StatusIndicator';

describe('StatusIndicator', () => {
  it('renders indicator', () => {
    const { container } = render(<StatusIndicator status="online" />);
    expect(container.querySelector('[data-testid="status-indicator"]')).toBeInTheDocument();
  });
});
