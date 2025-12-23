// theme.js
import { extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: 48,
    boardBarHeight: 58
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#1976d2ff', light: '#63a4ff' },
        background: { default: '#ffffff' }
      }
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        background: { default: '#121212' }
      }
    }
  },

  // ⚠️ QUAN TRỌNG — để đổi theme bằng code
  colorSchemeSelector: 'class',
  cssVarPrefix: 'mui'
})

export default theme
