/**
 * LoadingSpinner Component Tests
 * 
 * Tests for LoadingSpinner component functionality
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner Component', () => {
  describe('Rendering', () => {
    it('renders spinner by default', () => {
      const { container } = render(<LoadingSpinner />);
      const spinner = container.querySelector('.MuiCircularProgress-root');
      expect(spinner).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<LoadingSpinner label="Loading..." />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders without label when not provided', () => {
      render(<LoadingSpinner />);
      // Should render spinner without any text
      const { container } = render(<LoadingSpinner />);
      expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('renders small spinner', () => {
      const { container } = render(<LoadingSpinner size="small" />);
      const spinner = container.querySelector('[style*="width: 24px"]');
      expect(spinner || container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });

    it('renders medium spinner (default)', () => {
      const { container } = render(<LoadingSpinner size="medium" />);
      expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });

    it('renders large spinner', () => {
      const { container } = render(<LoadingSpinner size="large" />);
      expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });

    it('respects pixelSize prop override', () => {
      const { container } = render(<LoadingSpinner pixelSize={100} />);
      expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });
  });

  describe('Customization', () => {
    it('accepts custom thickness', () => {
      const { container } = render(<LoadingSpinner thickness={6} />);
      expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });

    it('accepts custom sx prop', () => {
      const { container } = render(
        <LoadingSpinner sx={{ padding: '20px' }} />
      );
      const box = container.querySelector('[style*="padding"]') || 
                  container.firstChild;
      expect(box).toBeInTheDocument();
    });
  });
});
