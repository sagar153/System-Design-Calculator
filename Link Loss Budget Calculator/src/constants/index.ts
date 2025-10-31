// Application Constants
// This file contains all constant values used throughout the application

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Application Settings
export const APP_NAME = 'Link Loss Budget Calculator';
export const APP_VERSION = '1.0.0';

// Calculation Constants
export const DEFAULT_TRANSMITTER_POWER = 20; // dBm
export const DEFAULT_TRANSMITTER_LOSS = 2; // dB
export const DEFAULT_PATH_LOSS = 120; // dB
export const DEFAULT_RECEIVER_SENSITIVITY = -85; // dBm
export const DEFAULT_RECEIVER_LOSS = 2; // dB
export const DEFAULT_FADE_MARGIN = 10; // dB

// UI Constants
export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
} as const;

// Validation Constants
export const VALIDATION = {
  MIN_POWER: -100,
  MAX_POWER: 100,
  MIN_LOSS: 0,
  MAX_LOSS: 200,
} as const;

// Status Messages
export const STATUS = {
  PASS: 'PASS',
  FAIL: 'FAIL',
} as const;

export type StatusType = typeof STATUS[keyof typeof STATUS];