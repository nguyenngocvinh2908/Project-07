import React from 'react'
import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(5)} - ${theme.trelloCustom.columnHeaderHeight} - ${theme.trelloCustom.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          background: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#bfc2cf'
        }
      }}
    >
      {/* Card */}
      { cards?.map(card => (<Card key={card._id} card={card} />))}
    </Box>
  )
}

export default ListCards