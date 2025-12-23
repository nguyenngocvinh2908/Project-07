import React from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'

function AppBar() {
  return (
    <Box sx={
      {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'primary.light',
        height: (theme) => theme.trelloCustom.appBarHeight
      }
    }>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
