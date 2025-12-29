// theme.js
import { Height } from '@mui/icons-material'
import { extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: 58,
    boardBarHeight: 60
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#c8d6e5',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: '#48dbfb'
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
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important'
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    }
  },
  // ⚠️ QUAN TRỌNG — để đổi theme bằng code
  colorSchemeSelector: 'class',
  cssVarPrefix: 'mui'
})

export default theme
