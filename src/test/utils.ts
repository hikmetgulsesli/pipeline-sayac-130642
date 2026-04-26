import { render, type RenderOptions } from '@testing-library/react';
import React from 'react';

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { ...options });
}
