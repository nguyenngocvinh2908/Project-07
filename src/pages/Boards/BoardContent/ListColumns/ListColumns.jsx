import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function ListColumns() {
  return (
    <Box
      sx={{
        bgColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m : 2 }
      }}
    >
      <Column />

      {/* Box Add Column */}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          bgcolor: '#ffffff3d',
          height: 'fit-content',
          borderRadius: '6px'
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns