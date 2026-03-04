import designSystemData from '../design-system.json';

export const spacing = designSystemData.tokens.spacing || {};

export const spacingVariables = Object.entries(spacing).reduce((acc, [key, value]) => {
  acc[key] = {
    value: value.value,
    variable: value.variable,
  };
  return acc;
}, {});
