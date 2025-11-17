import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Vinh</p>
      <Button variant='text'>Click</Button>
      <Button variant='outlined'>Click</Button>
      <Button variant='contained'>Click</Button>

      <AccessAlarmIcon color='primary'/>
      <ThreeDRotation sx={{ color: 'yellow' }}/>
    </>
  )
}

export default App
