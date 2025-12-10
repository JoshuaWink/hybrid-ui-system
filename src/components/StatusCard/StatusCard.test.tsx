/**
 * StatusCard Tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusCard } from './StatusCard';

describe('StatusCard Component', () => {
  it('renders label and value', () => {
    render(<StatusCard label="Jobs" value={42} testId="jobs-card" />);
    expect(screen.getByText('Jobs')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('formats large numbers with comma separator', () => {
    render(<StatusCard label="Total" value={1234567} testId="large" />);
    expect(screen.getByText('1,234,567')).toBeInTheDocument();
  });

  it('renders status badges correctly', () => {
    const { rerender } = render(<StatusCard label="Success" value={1} status="success" />);
    expect(screen.getByText('✅')).toBeInTheDocument();

    rerender(<StatusCard label="Warning" value={1} status="warning" />);
    expect(screen.getByText('⚠️')).toBeInTheDocument();

    rerender(<StatusCard label="Error" value={1} status="error" />);
    expect(screen.getByText('❌')).toBeInTheDocument();

    rerender(<StatusCard label="Info" value={1} status="info" />);
    expect(screen.getByText('ℹ️')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    const { container } = render(
      <StatusCard label="Test" value={5} icon={<span data-testid="icon">🔵</span>} />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies testId', () => {
    render(<StatusCard label="Test" value={10} testId="test-card" />);
    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });
});
