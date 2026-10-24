import React from 'react'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  const { mode } = useColorScheme()

  return (
    <Box sx={
      {
        p: '10px 0',
        backgroundColor: (mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight
      }
    }>
      <ListColumns />
    </Box>
  )
}

export default BoardContent
