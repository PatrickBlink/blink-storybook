import designSystemData from '../design-system.json';

// Extract and organize colors from design system
export const colors = designSystemData.tokens.colors;

// Flatten colors for easy access
export const flatColors = Object.entries(colors).reduce((acc, [category, paletteData]) => {
  paletteData.colors.forEach(color => {
    acc[color.variable.replace('--', '')] = {
      name: color.name,
      hex: color.hex,
      variable: color.variable,
      category,
    };
  });
  return acc;
}, {});

// Create CSS variable declarations
export const colorVariables = Object.entries(colors).reduce((acc, [, paletteData]) => {
  paletteData.colors.forEach(color => {
    acc += `${color.variable}: ${color.hex};\n`;
  });
  return acc;
}, '');
