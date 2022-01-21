// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    primary: {
      400: '#CA33F0',
    },
    secondary: {
      400: '#011C23',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

export default theme;
