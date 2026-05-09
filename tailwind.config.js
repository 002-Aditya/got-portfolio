/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#141218',
          dim: '#141218',
          bright: '#3b383e',
          'container-lowest': '#0f0d13',
          'container-low': '#1d1b20',
          container: '#211f24',
          'container-high': '#2b292f',
          'container-highest': '#36343a',
          tint: '#cfbcff',
          variant: '#36343a',
        },
        'on-surface': {
          DEFAULT: '#e6e0e9',
          variant: '#cbc4d2',
        },
        'inverse-surface': '#e6e0e9',
        'inverse-on-surface': '#322f35',
        outline: {
          DEFAULT: '#948e9c',
          variant: '#494551',
        },
        primary: {
          DEFAULT: '#cfbcff',
          container: '#6750a4',
          fixed: '#e9ddff',
          'fixed-dim': '#cfbcff',
        },
        'on-primary': {
          DEFAULT: '#381e72',
          container: '#e0d2ff',
          fixed: '#22005d',
          'fixed-variant': '#4f378a',
        },
        'inverse-primary': '#6750a4',
        secondary: {
          DEFAULT: '#cdc0e9',
          container: '#4d4465',
          fixed: '#e9ddff',
          'fixed-dim': '#cdc0e9',
        },
        'on-secondary': {
          DEFAULT: '#342b4b',
          container: '#bfb2da',
          fixed: '#1f1635',
          'fixed-variant': '#4b4263',
        },
        tertiary: {
          DEFAULT: '#e7c365',
          container: '#c9a74d',
          fixed: '#ffdf93',
          'fixed-dim': '#e7c365',
        },
        'on-tertiary': {
          DEFAULT: '#3e2e00',
          container: '#503d00',
          fixed: '#241a00',
          'fixed-variant': '#594400',
        },
        error: {
          DEFAULT: '#ffb4ab',
          container: '#93000a',
        },
        'on-error': {
          DEFAULT: '#690005',
          container: '#ffdad6',
        },
        background: '#141218',
        'on-background': '#e6e0e9',
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'code-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
        'display-xl-mobile': ['40px', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
      },
      spacing: {
        'container-max': '1280px',
        gutter: '32px',
        'margin-mobile': '20px',
        'stack-lg': '80px',
        'stack-md': '48px',
        'stack-sm': '24px',
      },
    },
  },
  plugins: [],
};
