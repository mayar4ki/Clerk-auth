import { BreakpointsOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

// those are same tailwind breakpoints so
// feel free to make responsive components
// using both tailwind and mui

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
};
