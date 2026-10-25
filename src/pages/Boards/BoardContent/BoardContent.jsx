import React from 'react'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import ListColumns from './ListColumns/ListColumns'
import * as sort from '~/utils/sort'

function BoardContent({ board }) {
  const { mode } = useColorScheme()

  const orderedColumns = sort.mapOrder(board?.columns, board?.columnOrderIds, '_id')

  return (
    <Box sx={
      {
        p: '10px 0',
        backgroundColor: (mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight
      }
    }>
      <ListColumns columns={ orderedColumns } />
    </Box>
  )
}

export default BoardContent
