// Utility Functions
// This directory contains reusable utility functions for the application

/**
 * Format a number to a specific number of decimal places
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted number as string
 */
export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};

/**
 * Convert dBm to Watts
 * @param dbm - Power in dBm
 * @returns Power in Watts
 */
export const dbmToWatts = (dbm: number): number => {
  return Math.pow(10, (dbm - 30) / 10);
};

/**
 * Convert Watts to dBm
 * @param watts - Power in Watts
 * @returns Power in dBm
 */
export const wattsToDbm = (watts: number): number => {
  return 10 * Math.log10(watts) + 30;
};

/**
 * Calculate free space path loss
 * @param frequency - Frequency in MHz
 * @param distance - Distance in kilometers
 * @returns Path loss in dB
 */
export const calculateFreeSpacePathLoss = (frequency: number, distance: number): number => {
  return 32.45 + 20 * Math.log10(frequency) + 20 * Math.log10(distance);
};

/**
 * Validate input range
 * @param value - Value to validate
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns True if value is within range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Clamp a value between min and max
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Debounce function calls
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};