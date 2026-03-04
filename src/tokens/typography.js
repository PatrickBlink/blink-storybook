import designSystemData from '../design-system.json';

export const typography = designSystemData.tokens.typography || {};

export const fontSizes = Object.entries(typography).reduce((acc, [key, value]) => {
  if (value.fontSize) {
    acc[key] = {
      size: value.fontSize,
      weight: value.fontWeight || '400',
      lineHeight: value.lineHeight || '1.5',
      variable: value.variable || `--${key}`,
    };
  }
  return acc;
}, {});
