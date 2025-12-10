import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SandboxPreview } from './SandboxPreview';

describe('SandboxPreview', () => {
  it('renders', () => {
    const { container } = render(<SandboxPreview />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
