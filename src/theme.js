// theme.js
import { extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: 58,
    boardBarHeight: 60
  },
  colorSchemes: {
    light: {
      palette: {
        // mode: 'light',
        // primary: { main: '#1976d2ff', light: '#63a4ff' },
        // background: { default: '#ffffff' }
      }
    },
    dark: {
      palette: {
        // mode: 'dark',
        // primary: { main: '#90caf9' },
        // background: { default: '#121212' }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '1px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main
        })
      }
    }
  },
  // QUAN TRỌNG — để đổi theme bằng code
  colorSchemeSelector: 'class',
  cssVarPrefix: 'mui'
})

export default theme
