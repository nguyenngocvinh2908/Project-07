// theme.js
import { extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        background: { default: '#ffffff', paper: '#fff' }
      }
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        background: { default: '#121212', paper: '#1d1d1d' }
      }
    }
  },

  // ⚠️ QUAN TRỌNG — để đổi theme bằng code
  colorSchemeSelector: 'class',
  cssVarPrefix: 'mui'
})

export default theme