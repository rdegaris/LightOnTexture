export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'logo': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'eurostile': ['Eurostile', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
      },
      letterSpacing: {
        'tight': '-0.025em',
        'wider': '0.1em',
        'widest': '0.2em',
      }
    },
  },
  plugins: [],
};