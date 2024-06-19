export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      adaptive: { max: '374px' },
      mobile: { min: '375px' },
      tablet: { min: '768px' },
      desktop: { min: '1024px' },
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      'inputs-label': '#8A8A89',
      'mid-grey': '#363535',
      'dark-grey': '#1A1919',
      'custom-white': '#F3F3F2',
      'inputs-bg': '#F7F7FB',
      'custom-white-3': '#F9F9F9',
      text: '#121417',
      brand: '#3470FF',
      hover: '#0B44CD',
    },
  },
};
