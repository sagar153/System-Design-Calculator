// Unit Tests
// This directory contains unit tests for the application

// Note: Install a testing framework like vitest, jest, or @testing-library/react
// Example: npm install -D vitest @testing-library/react @testing-library/jest-dom

// Example test structure (uncomment when testing framework is installed):
/*
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render the main heading', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
*/

// Test utilities and helpers can be added here
export const mockData = {
  linkBudgetParams: {
    transmitterPower: 20,
    transmitterLoss: 2,
    pathLoss: 120,
    receiverSensitivity: -85,
    receiverLoss: 2,
    fadeMargin: 10,
  },
};

// Helper function for testing
export const createMockEvent = (value: string) => ({
  target: { value },
  preventDefault: () => {},
  stopPropagation: () => {},
} as any);

// Test setup utilities
export const setupTestEnvironment = () => {
  // Add any global test setup here
  return {
    cleanup: () => {
      // Add cleanup logic here
    },
  };
};