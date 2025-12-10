/**
 * Theme System Tests
 * 
 * Verify @hybrid/ui-system theme configuration
 */

import { describe, it, expect } from 'vitest';
import { hybridTheme } from '../theme/hybridTheme';

describe('Theme System - Palette & Typography', () => {
  describe('Palette Colors', () => {
    it('defines primary color', () => {
      expect(hybridTheme.palette.primary.main).toBeDefined();
      expect(hybridTheme.palette.primary.light).toBeDefined();
      expect(hybridTheme.palette.primary.dark).toBeDefined();
    });

    it('defines semantic colors (success, warning, error, info)', () => {
      expect(hybridTheme.palette.success?.main).toBeDefined();
      expect(hybridTheme.palette.warning?.main).toBeDefined();
      expect(hybridTheme.palette.error?.main).toBeDefined();
      expect(hybridTheme.palette.info?.main).toBeDefined();
    });

    it('defines background colors', () => {
      expect(hybridTheme.palette.background?.default).toBeDefined();
      expect(hybridTheme.palette.background?.paper).toBeDefined();
    });

    it('defines text colors', () => {
      expect(hybridTheme.palette.text?.primary).toBeDefined();
      expect(hybridTheme.palette.text?.secondary).toBeDefined();
    });

    it('sets mode to dark', () => {
      expect(hybridTheme.palette.mode).toBe('dark');
    });
  });

  describe('Typography', () => {
    it('defines font family', () => {
      expect(hybridTheme.typography.fontFamily).toBeDefined();
      expect(typeof hybridTheme.typography.fontFamily).toBe('string');
    });

    it('defines heading styles (h1-h6)', () => {
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((heading) => {
        const variant = hybridTheme.typography[heading as keyof typeof hybridTheme.typography];
        expect(variant).toBeDefined();
      });
    });

    it('defines body text styles', () => {
      expect(hybridTheme.typography.body1).toBeDefined();
      expect(hybridTheme.typography.body2).toBeDefined();
    });

    it('heading font weights are defined', () => {
      expect(hybridTheme.typography.h1?.fontWeight).toBeGreaterThan(0);
      expect(hybridTheme.typography.h2?.fontWeight).toBeGreaterThan(0);
    });
  });

  describe('Component Overrides', () => {
    it('has component style overrides', () => {
      expect(hybridTheme.components).toBeDefined();
    });

    it('defines Button overrides', () => {
      expect(hybridTheme.components?.MuiButton).toBeDefined();
    });

    it('defines Paper overrides', () => {
      expect(hybridTheme.components?.MuiPaper).toBeDefined();
    });
  });

  describe('Theme Structure', () => {
    it('theme is a valid MUI theme object', () => {
      expect(hybridTheme).toHaveProperty('palette');
      expect(hybridTheme).toHaveProperty('typography');
      expect(hybridTheme).toHaveProperty('components');
    });

    it('theme has required palette properties', () => {
      expect(hybridTheme.palette).toHaveProperty('mode');
      expect(hybridTheme.palette).toHaveProperty('primary');
      expect(hybridTheme.palette).toHaveProperty('background');
      expect(hybridTheme.palette).toHaveProperty('text');
    });
  });
});
